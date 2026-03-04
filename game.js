import * as THREE from 'three';

// --- Setup ---
const container = document.getElementById('three-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 400);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);
dirLight.castShadow = true;
scene.add(dirLight);

// --- Game Constants ---
const GROUND_SPEED = 0.2;
const GRAVITY = -0.015;
const JUMP_FORCE = 0.35;
const FINISH_Z = -100;

// --- State ---
let gameState = 'START';
let player, floor, finishLine;
let obstacles = [];
let particles = [];
let distance = 0;
let mathProblem = null;
let spawnTimer = 0;
let clearTimer = 0;

// UI elements
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over');
const clearScreen = document.getElementById('clear-screen');
const mathUI = document.getElementById('math-ui');
const mathProblemText = document.getElementById('math-problem');
const mathInput = document.getElementById('math-input');
const timerBar = document.getElementById('timer-bar');
const progressUI = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const clearText = document.getElementById('clear-text');

// --- Classes ---

class Player {
    constructor() {
        this.group = new THREE.Group();

        // Head
        const headGeo = new THREE.SphereGeometry(0.5, 32, 32);
        const blackMat = new THREE.MeshPhongMaterial({ color: 0x000000 });
        this.head = new THREE.Mesh(headGeo, blackMat);
        this.head.position.y = 4;
        this.group.add(this.head);

        // Body
        const bodyGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5);
        this.body = new THREE.Mesh(bodyGeo, blackMat);
        this.body.position.y = 3;
        this.group.add(this.body);

        // Legs
        this.leftLeg = this.createLimb();
        this.rightLeg = this.createLimb();
        this.leftLeg.position.set(-0.2, 2.2, 0);
        this.rightLeg.position.set(0.2, 2.2, 0);
        this.group.add(this.leftLeg, this.rightLeg);

        // Arms
        this.leftArm = this.createLimb();
        this.rightArm = this.createLimb();
        this.leftArm.position.set(-0.4, 3.5, 0);
        this.rightArm.position.set(0.4, 3.5, 0);
        this.group.add(this.leftArm, this.rightArm);

        this.group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
        scene.add(this.group);

        this.y = 0;
        this.vy = 0;
        this.isJumping = false;
        this.isSitting = false;
        this.animTime = 0;
    }

    createLimb() {
        const geo = new THREE.CylinderGeometry(0.1, 0.1, 1.5);
        const mat = new THREE.MeshPhongMaterial({ color: 0x000000 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.geometry.translate(0, -0.75, 0);
        return mesh;
    }

    jump() {
        if (!this.isJumping && !this.isSitting) {
            this.vy = JUMP_FORCE;
            this.isJumping = true;
        }
    }

    update() {
        if (!this.isSitting) {
            this.vy += GRAVITY;
            this.y += this.vy;
            if (this.y < 0) {
                this.y = 0;
                this.vy = 0;
                this.isJumping = false;
            }
            this.group.position.y = this.y;

            // Simple running animation
            this.animTime += 0.15;
            const angle = Math.sin(this.animTime) * 0.8;
            this.leftLeg.rotation.x = angle;
            this.rightLeg.rotation.x = -angle;
            this.leftArm.rotation.x = -angle;
            this.rightArm.rotation.x = angle;
        }
    }

    setToThinker() {
        this.isSitting = true;
        this.group.position.y = 1;
        this.leftLeg.rotation.x = -Math.PI / 2;
        this.rightLeg.rotation.x = -Math.PI / 2;
        this.leftArm.rotation.x = -1;
        this.leftArm.position.y = 2.5;
        this.head.rotation.x = 0.5;
    }
}

class Obstacle {
    constructor(z) {
        const geo = new THREE.BoxGeometry(1.5, Math.random() * 2 + 1, 1);
        const mat = new THREE.MeshPhongMaterial({ color: 0x333333 });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(0, geo.parameters.height / 2, z);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        scene.add(this.mesh);
    }
    update(speed) {
        this.mesh.position.z += speed;
    }
    destroy() {
        scene.remove(this.mesh);
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
    }
}

class ParticleSystem {
    constructor(pos) {
        const count = 40;
        this.particles = [];
        for (let i = 0; i < count; i++) {
            const material = new THREE.SpriteMaterial({
                map: poopTexture,
                transparent: true,
                opacity: 1
            });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(0.4, 0.4, 1);
            sprite.position.copy(pos);
            sprite.userData.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.6,
                (Math.random()) * 0.6,
                (Math.random() - 0.5) * 0.6
            );
            sprite.userData.life = 60 + Math.random() * 20;
            scene.add(sprite);
            this.particles.push(sprite);
        }
    }
    update() {
        this.particles.forEach((p, idx) => {
            p.position.add(p.userData.velocity);
            p.userData.velocity.y -= 0.015; // Poop gravity
            p.userData.life--;
            p.material.opacity = p.userData.life / 60;
            if (p.userData.life <= 0) {
                scene.remove(p);
                this.particles.splice(idx, 1);
            }
        });
    }
}

class MathHandler {
    constructor() {
        const ops = ['+', '-', '*'];
        this.op = ops[Math.floor(Math.random() * ops.length)];
        this.n1 = Math.floor(Math.random() * 15) + 1;
        this.n2 = Math.floor(Math.random() * 15) + 1;
        if (this.op === '-') [this.n1, this.n2] = [Math.max(this.n1, this.n2), Math.min(this.n1, this.n2)];
        this.answer = this.op === '+' ? this.n1 + this.n2 : this.op === '-' ? this.n1 - this.n2 : this.n1 * this.n2;
        this.timer = 180;
    }
    getProblem() { return `${this.n1} ${this.op} ${this.n2} = ?`; }
}

// --- Initialization ---

function initWorld() {
    // Floor - Dark Grid
    const floorGeo = new THREE.PlaneGeometry(40, 2000);
    const floorMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.1,
        metalness: 0.5
    });
    floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Glowing Grid
    const grid = new THREE.GridHelper(2000, 100, 0x4444ff, 0x222222);
    grid.position.y = 0.1;
    scene.add(grid);

    // Toilet - Metallic/Glow
    const toiletGroup = new THREE.Group();
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0, metalness: 1 });
    const bowl = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.8, 1.5), chromeMat);
    const tank = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 0.4), chromeMat);
    tank.position.set(0, 1.15, -0.55);

    // Toilet glow
    const light = new THREE.PointLight(0xffffff, 2, 10);
    light.position.set(0, 3, 0);
    toiletGroup.add(bowl, tank, light);

    toiletGroup.position.set(0, 0.4, FINISH_Z);
    scene.add(toiletGroup);
    finishLine = toiletGroup;

    player = new Player();
}

function resetGame() {
    obstacles.forEach(o => o.destroy());
    obstacles = [];
    particles.forEach(p => scene.remove(p));
    particles = [];
    distance = 0;
    mathProblem = null;
    clearTimer = 0;
    spawnTimer = 0;
    if (player) scene.remove(player.group);
    player = new Player();
    mathInput.value = "";
}

function switchState(state) {
    gameState = state;
    console.log("Switching to state:", state);

    const overlays = [startScreen, gameOverScreen, clearScreen, mathUI, progressUI, clearText];
    overlays.forEach(el => { if (el) el.classList.add('hidden'); });

    if (state === 'START' && startScreen) startScreen.classList.remove('hidden');
    if (state === 'PLAYING') {
        if (progressUI) progressUI.classList.remove('hidden');
        resetGame();
    }
    if (state === 'GAME_OVER' && gameOverScreen) gameOverScreen.classList.remove('hidden');
    if (state === 'CLEAR' && clearScreen) clearScreen.classList.remove('hidden');
}

// --- Interaction ---

const startBtn = document.getElementById('start-btn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        console.log("Start button clicked");
        switchState('PLAYING');
    });
}
const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
    restartBtn.addEventListener('click', () => switchState('PLAYING'));
}

window.addEventListener('keydown', (e) => {
    if (gameState === 'PLAYING' && !mathProblem && e.code === 'Space') {
        mathProblem = new MathHandler();
        mathProblemText.innerText = mathProblem.getProblem();
        mathUI.classList.remove('hidden');
        mathInput.value = "";
        mathInput.focus();
        e.preventDefault();
    } else if (mathProblem && e.key === 'Enter') {
        if (parseInt(mathInput.value) === mathProblem.answer) {
            player.jump();
            mathProblem = null;
            mathUI.classList.add('hidden');
        } else {
            mathInput.value = "";
        }
    }
});

// --- Loop ---

function animate() {
    requestAnimationFrame(animate);

    const isPaused = mathProblem !== null && gameState === 'PLAYING';

    if (gameState === 'PLAYING' && !isPaused) {
        distance += GROUND_SPEED;
        player.update();

        // Spawn obstacles
        spawnTimer++;
        if (spawnTimer > 80 && distance < Math.abs(FINISH_Z) * 5 - 20) {
            if (Math.random() < 0.02) {
                obstacles.push(new Obstacle(-60));
                spawnTimer = 0;
            }
        }

        // Update Obstacles
        obstacles.forEach((obs, idx) => {
            obs.update(GROUND_SPEED);
            if (obs.mesh.position.z > 15) {
                obs.destroy();
                obstacles.splice(idx, 1);
            }
            // Collision
            const pX = 0;
            const pZ = 0;
            const oX = obs.mesh.position.x;
            const oZ = obs.mesh.position.z;

            // Simplified radius-based for performance/accuracy in 3D
            const dist = Math.sqrt((pZ - oZ) ** 2);
            if (dist < 0.8 && player.y < obs.mesh.geometry.parameters.height) {
                switchState('GAME_OVER');
                new ParticleSystem(player.group.position);
                cameraShake = 20;
            }
        });

        // World movement
        finishLine.position.z += GROUND_SPEED;
        if (finishLine.position.z >= 0) {
            switchState('CLEAR');
            player.setToThinker();
        }

        progressBar.style.width = Math.min((distance / (Math.abs(FINISH_Z) * 5)) * 100, 100) + '%';
    }

    if (isPaused) {
        mathProblem.timer--;
        timerBar.style.transform = `scaleX(${mathProblem.timer / 180})`;
        if (mathProblem.timer <= 0) {
            mathProblem = null;
            mathUI.classList.add('hidden');
        }
    }

    if (gameState === 'CLEAR') {
        clearTimer++;
        player.group.position.z = finishLine.position.z;
        if (clearTimer > 180) clearText.classList.remove('hidden');
        if (clearTimer > 450) switchState('START');
    }

    // Camera follow and shake
    if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.05;
        camera.position.y = 4 + (Math.random() - 0.5) * cameraShake * 0.05;
        cameraShake *= 0.9;
    } else {
        camera.position.x = 0;
        camera.position.y = 4;
    }

    renderer.render(scene, camera);
}

initWorld();
animate();
switchState('START');
