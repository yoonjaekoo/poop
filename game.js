// Initial setup - Using global THREE (no imports for local file portability)

// DATA URI for Poop (Generated)
const POOP_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFmklEQVR4nO2dW28TRxTH/2vfG/v6Etsm9WkhDkgLIVUv8ALvXUqV+AAlVfUN6iN8iPIS5UOUV9SXqKofUKU8REpV9A0mIChCqEohTSk0TQshTSA277HPrfow612u17vXvtdje/A8f8lrZ+fMzszO38zeOWfWWIAAAAAAAAAAIB6N9A/Wp6pP1067F6v3K+dLv64eX6m068fdizX3S6m85C6Wlp1fT2v+338YmN88eXFhc/uMvXN6K08Yvj1rHzG3z189/eTFrTOnN98/XGg9v7HaeXGj2f7hRqP98uZa5+WNVvuXG/X2Kxv19itrtfar67X279Zr7XfXa+2v5mrtu/O19t35WvuHeVr7U/7G7T8v0m8/L9BvPy/Qbz8u0G8/L9BvPy/QLT8v0C0/L9AtPy/QLT8v0C2/L9Atvy+m7v/mH9z+42Kq6m9+P6KueuL9XkR98V4vou6270XU3fa9iOrbvhfR3Xbfi+huu+9FuO0+z+m2+zyn2+/znG6/z3O6/f6YVfX3f1X1fX9UdW//V9W7+G9Vr+rXqlf1Tf1u9eqS+l316pL6XfVv9W/Vv9Vv1Tf1Tf1WfVv9Vn1Tf1SXVXVZVXVZVZdVdVlVl1V1WVWXVXVZVZdVdVlVl1V1WVWXVXVZVZdVdVlVl1V1WVWXVXVZVZVZVZVZVZVZVZVZVZVZVQFAiXREOnKkdORIF9I96YHcRLogNzKTu5B7mcl9zP0+5P0B5EMh7H0FPH8Y+XAZ+Z8y8v8F5H87kP8rkP9pQ/6vSfkfD8T/NCT/X0TyfwVE8v9lRPK/ZUTWvR0j8u6eEnnvnpH1bs7IunsmIuvu74msu78vIuuun5F1188ZkXV3hsi6qzMi6666RFZdxUTWXVmJVfWWiKxeYCKrO1hYvYCJrN5fIrLqAySi7iYSUXeOiKjbS0TUXSAi6nYREXWXiYiq60BEdZdIRNV1I6LquhJR9YCIqN4XEFW9IKJ6X0RE9YCI6v0RIarvR4SosR+R3u09onfvS/Xuf7Heg6/Ue/CVeg++UO+Bl+o9+Ey9h1+pD/ED9SF+oT7GD9XH+In6FD9TH+Nn6mP8Xn+MH+mP8Yf6Y/xk/8mDq/5vI9V731G9+1vVu79Tvfu71LtvqXfPV+/eXerds9S7Z6h3z1LvntU/6Z9P+r6kfz7p+5L++ajvS9qXfC+5XnK9eF7yvHhf8rzkefG65XrxunRdvy9dl8+XjsunT8fV68vU68vU68uW68uW66uW66uS6yuS6wuS66t+66t+S6sS65pU7pZUnlWJdVXpWFf6L9YVf8W60W60m92Ldrdr0W6pFu2W6tFunXqR7m6jSHd3k0I7FmSxej7IK9V8YVat5QuzYi1fmBVq+fKsUMuXZ4Varjwr1HLlWa6WK09ytVx5lqvl/pIs95f6S7P9pc7+pT86+pe+6Ohf+KKjf/6Ljv7pLjr6pzvR0T/dhY6O/qUvOvqXvujoX/qio3/pi47+pS86+qe76Oif7qKjf+mLjvyP96OfN+of70ef76Y/7kwffXf87LvjZ9+7fPbd8Xm3/9H8u3Y7K3Y7O2Z/f798T/uN8rXyNbPfK189873yNbPfK189+73yNbPfK18z873yNbPfK18z+73yNbPfK18z873yNbPfK18j873yNbPfK18z873yNbPfK18z873yNbPfK18T873yNbPfK18T873yNbPfK18T873yNbPfK18T873ytfIu87XyNfO++D7yvfg++D74PvA++D74PvA++D7wvfA98L3wvfi++F58X3wvfi++F74XvxffC98L34vvi++H64vri8vL64vri+uL6yvry+sr6yvry+vL68vry+vL68vryyvL68sr64vri+ur86vzivOqcytzqXOqc6pzqnOqc6rzqvOqc6rxqvOq8anzqvGq86rxqvOq86rxqvGq8arnqvGq8anxqfGp8ajvqe+p76rvqu+q76rvqu+q76rvqu+q76rvqu+q66pvYm52Lu5t7m3u7e7t7u3u7u7u7+727u7u7u7u7u7u7u9zL3e5l7uVu5W7lbuVu5W7lbuVu5W7lbuVu5O7mUAAABIAAA8L07PT/I/2B9Svp6+9X01eXm/eb1+ub1unm7er1unm5unm5unm5unm5unm6ubq5urm6ubq9vL28vb28vb29vb0AAAAAAJRU5ErkJggg==";

const container = document.getElementById('three-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f9fa);
scene.fog = new THREE.Fog(0xf8f9fa, 10, 60);

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(16, 6, -4); // Slightly further back and more offset
camera.lookAt(0, 2, -4); // Offset target in -Z to move player to the left

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
container.appendChild(renderer.domElement);

// Lights - CLEAN & BRIGHT
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 1.2);
spotLight.position.set(20, 40, 20);
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.5;
spotLight.decay = 1.5;
spotLight.distance = 200;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
scene.add(spotLight);

const rimLight = new THREE.PointLight(0xffffff, 0.5);
rimLight.position.set(-10, 10, -10);
scene.add(rimLight);

const textureLoader = new THREE.TextureLoader();
const poopTexture = textureLoader.load(POOP_DATA_URI);

// --- Game Constants ---
const GROUND_SPEED = 0.2;
const GRAVITY = -0.015;
const JUMP_FORCE = 0.35;
const FINISH_BASE_Z = -100;
const STAGE_INCREMENT_Z = -100;
const MAX_STAGES = 9;

// --- State ---
let gameState = 'START';
let player, floor, finishLine, skybox;
let obstacles = [];
let particles = [];
let trail = []; // New trail effect (small continuous)
let poopMarks = []; // New mechanic: poop on Space jump
let distance = 0;
let currentStage = 1;
let mathProblem = null;

// Story Data
const STORY_LINES = [
    "당신은 수학 학원에 앉아있다…",
    "그런데 갑자기, ",
    "당신은 똥이 마려웠다!!!!!!!!!!!!!!",
    "그래서 당신은 쌤한테 “똥마려워요” 라고 말했다.",
    "그래서 허락을 받고 똥을 싸러 나섰다. ",
    "그런데, 복도가 점프맵이 되어있었다(?)",
    "당신은 모든 스테이지를 깨야 똥을 쌀수 있다고 한다.",
    "당신이 똥을 쌀 수 있기를 기원합니다…"
];
let currentStoryIndex = 0;
let spawnTimer = 0;
let trailTimer = 0;
let clearTimer = 0;
let cameraShake = 0;

// UI elements
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over');
const clearScreen = document.getElementById('clear-screen');
const mathUI = document.getElementById('math-ui');
const mathProblemText = document.getElementById('math-problem');
const mathInput = document.getElementById('math-input');
const timerBar = document.getElementById('timer-bar');
const progressBar = document.getElementById('progress-bar');
const clearText = document.getElementById('clear-text');
const stageDisplay = document.getElementById('stage-display');
const stageSelectScreen = document.getElementById('stage-select-screen');
const stageSelectBtn = document.getElementById('stage-select-btn');
const backToMenuBtn = document.getElementById('back-to-menu');
const stageButtons = document.querySelectorAll('.stage-btn');
const storyScreen = document.getElementById('story-screen');
const storyLineText = document.getElementById('story-line');
const storyNextBtn = document.getElementById('story-next-btn');


// --- Classes ---

class Player {
    constructor() {
        this.group = new THREE.Group();

        // Premium Material (Light Mode)
        const avatarMat = new THREE.MeshPhysicalMaterial({
            color: 0x222222,
            metalness: 0.1,
            roughness: 0.2,
            clearcoat: 1,
            clearcoatRoughness: 0.1
        });

        // Head (Simplified refined shape)
        const headGeo = new THREE.SphereGeometry(0.4, 32, 32);
        this.head = new THREE.Mesh(headGeo, avatarMat);
        this.head.position.y = 3.5;
        this.group.add(this.head);

        // Torso
        const bodyGeo = new THREE.CapsuleGeometry(0.15, 0.8, 4, 8);
        this.body = new THREE.Mesh(bodyGeo, avatarMat);
        this.body.position.y = 2.8;
        this.group.add(this.body);

        // Limbs (Refined)
        this.leftLeg = this.createLimb(avatarMat);
        this.rightLeg = this.createLimb(avatarMat);
        this.leftLeg.position.set(-0.25, 2.2, 0);
        this.rightLeg.position.set(0.25, 2.2, 0);
        this.group.add(this.leftLeg, this.rightLeg);

        this.leftArm = this.createLimb(avatarMat);
        this.rightArm = this.createLimb(avatarMat);
        this.leftArm.position.set(-0.4, 3.2, 0);
        this.rightArm.position.set(0.4, 3.2, 0);
        this.group.add(this.leftArm, this.rightArm);

        this.group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
        scene.add(this.group);

        this.y = 0;
        this.vy = 0;
        this.isJumping = false;
        this.isSitting = false;
        this.animTime = 0;
    }

    createLimb(mat) {
        const geo = new THREE.CylinderGeometry(0.08, 0.08, 1.2);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.geometry.translate(0, -0.6, 0);
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
        const shapeType = Math.floor(Math.random() * 4); // Increased variety
        let geo;
        if (shapeType === 0) geo = new THREE.BoxGeometry(1.5, Math.random() * 2 + 1, 1);
        else if (shapeType === 1) geo = new THREE.CylinderGeometry(0.5, 0.5, Math.random() * 3 + 1, 16);
        else if (shapeType === 2) geo = new THREE.TorusGeometry(0.8, 0.2, 8, 16);
        else geo = new THREE.DodecahedronGeometry(0.8); // New shape: Dodecahedron

        const mat = new THREE.MeshPhysicalMaterial({
            color: 0xeeeeee,
            metalness: 0.5,
            roughness: 0.2,
            emissive: 0x000000
        });
        this.mesh = new THREE.Mesh(geo, mat);
        const yPos = shapeType === 0 ? geo.parameters.height / 2 : (shapeType === 1 ? geo.parameters.height / 2 : (shapeType === 3 ? 0.8 : 1));
        this.mesh.position.set((Math.random() - 0.5) * 4, yPos, z);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        scene.add(this.mesh);

        // Store dimensions for collision
        this.width = shapeType === 0 ? 1.5 : (shapeType === 1 ? 1 : 1.6);
        this.height = shapeType === 0 ? geo.parameters.height : (shapeType === 1 ? geo.parameters.height : (shapeType === 2 ? 1.6 : 1.6));

        // Define Y boundaries for precise vertical collision
        this.minY = yPos - this.height / 2;
        this.maxY = yPos + this.height / 2;
        // Special case: Boxes and Cylinders are grounded by their yPos calculation
        if (shapeType === 0 || shapeType === 1) {
            this.minY = 0;
            this.maxY = this.height;
        }
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

// Texture loading already handled at top

class TrailNode {
    constructor(pos) {
        const material = new THREE.SpriteMaterial({ map: poopTexture, transparent: true, opacity: 0.8 });
        this.sprite = new THREE.Sprite(material);
        this.sprite.scale.set(0.1, 0.1, 1); // Smaller continuous trail
        this.sprite.position.copy(pos);
        this.sprite.position.y = 0.5;
        this.life = 60;
        scene.add(this.sprite);
    }
    update() {
        this.life--;
        this.sprite.material.opacity = this.life / 60;
        this.sprite.position.z += GROUND_SPEED;
    }
    destroy() {
        scene.remove(this.sprite);
    }
}

class PoopMark {
    constructor(pos) {
        const material = new THREE.SpriteMaterial({ map: poopTexture, transparent: true });
        this.sprite = new THREE.Sprite(material);
        this.sprite.scale.set(0.8, 0.8, 1); // Larger specific mark
        this.sprite.position.copy(pos);
        this.sprite.position.y = 0.4; // On ground
        scene.add(this.sprite);
    }
    update() {
        this.sprite.position.z += GROUND_SPEED; // Stay on moving ground
    }
    destroy() {
        scene.remove(this.sprite);
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
        this.a = Math.floor(Math.random() * 10) + 3; // a: 3 to 12
        this.x = Math.floor(Math.random() * 11) + 2; // x: 2 to 12 (answer)
        this.b = Math.floor(Math.random() * 36) + 5; // b: 5 to 40
        this.c = this.a * this.x + this.b;
        this.answer = this.x;
    }
    getProblem() { 
        return `${this.a}x + ${this.b} = ${this.c}`; 
    }
}

// --- Initialization ---

function initWorld() {
    // Sun effect - Glowing sphere
    const sunGeo = new THREE.SphereGeometry(3, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
        color: 0xffffcc
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(20, 30, -60);
    scene.add(sun);

    // Strong Sun Glow
    const sunLight = new THREE.DirectionalLight(0xffffdd, 1.5);
    sunLight.position.copy(sun.position);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const sunPoint = new THREE.PointLight(0xffffaa, 3, 150);
    sunPoint.position.copy(sun.position);
    scene.add(sunPoint);

    // Environment - LIGHT CLEAN
    const floorGeo = new THREE.PlaneGeometry(30, 1000);
    const floorMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8,
        metalness: 0.1
    });
    floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(1000, 100, 0xdddddd, 0xeeeeee);
    grid.position.y = 0.05;
    scene.add(grid);

    // Toilet - High Quality Model
    const toiletGroup = new THREE.Group();
    const porcelainMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        metalness: 0.2
    });

    // Base/Pedestal
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 0.8, 16), porcelainMat);
    base.position.y = -0.3;

    // Bowl
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.5, 0.8, 16), porcelainMat);
    bowl.position.y = 0.5;

    // Seat Rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.1, 16, 32), porcelainMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.9;

    // Tank
    const tank = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 0.5), porcelainMat);
    tank.position.set(0, 1.2, -0.6);

    // Flush Handle
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.1), new THREE.MeshStandardMaterial({ color: 0xcccccc }));
    handle.position.set(0.5, 1.6, -0.4);

    // Seat Lid (open)
    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 0.1), porcelainMat);
    lid.position.set(0, 1.4, -0.4);
    lid.rotation.x = -0.2;

    const toiletLight = new THREE.PointLight(0xffffff, 2, 10);
    toiletLight.position.set(0, 3, 0);

    toiletGroup.add(base, bowl, rim, tank, handle, lid, toiletLight);
    toiletGroup.position.set(0, 0.6, FINISH_BASE_Z);
    scene.add(toiletGroup);
    finishLine = toiletGroup;

    // Add some random background pillars for depth
    for (let i = 0; i < 20; i++) {
        const pillarGeo = new THREE.CylinderGeometry(0.5, 0.5, 20, 8);
        const pillarMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
        const pillar = new THREE.Mesh(pillarGeo, pillarMat);
        pillar.position.set(i % 2 === 0 ? -10 : 10, 10, -i * 50);
        scene.add(pillar);
    }

    player = new Player();
}

function resetGame() {
    obstacles.forEach(o => o.destroy());
    obstacles = [];
    particles.forEach(p => scene.remove(p));
    particles = [];
    trail.forEach(t => t.destroy());
    trail = [];
    poopMarks.forEach(m => m.destroy());
    poopMarks = [];
    distance = 0;
    const finishZ = FINISH_BASE_Z + (currentStage - 1) * STAGE_INCREMENT_Z;
    finishLine.position.z = finishZ;

    if (stageDisplay) stageDisplay.textContent = `STAGE ${currentStage} / ${MAX_STAGES}`;

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

    const overlays = [startScreen, gameOverScreen, clearScreen, mathUI, clearText, stageSelectScreen, storyScreen];
    overlays.forEach(el => { if (el) el.classList.add('hidden'); });

    if (state === 'START' && startScreen) startScreen.classList.remove('hidden');
    if (state === 'STAGE_SELECT' && stageSelectScreen) stageSelectScreen.classList.remove('hidden');
    if (state === 'PLAYING') {
        resetGame();
    }
    if (state === 'GAME_OVER' && gameOverScreen) gameOverScreen.classList.remove('hidden');
    if (state === 'CLEAR' && clearScreen) clearScreen.classList.remove('hidden');
    if (state === 'STORY' && storyScreen) {
        storyScreen.classList.remove('hidden');
        showNextStoryLine();
    }
}

function showNextStoryLine() {
    if (currentStoryIndex < STORY_LINES.length) {
        storyLineText.textContent = STORY_LINES[currentStoryIndex];
        // Trigger animation re-play
        storyLineText.style.animation = 'none';
        storyLineText.offsetHeight; // trigger reflow
        storyLineText.style.animation = null;
        currentStoryIndex++;
    } else {
        switchState('PLAYING');
    }
}

// --- Interaction ---

const startBtn = document.getElementById('start-btn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        console.log("Start button clicked");
        currentStoryIndex = 0;
        switchState('STORY');
    });
}
const restartBtn = document.getElementById('restart-btn');
if (restartBtn) {
    restartBtn.addEventListener('click', () => switchState('PLAYING'));
}

if (stageSelectBtn) {
    stageSelectBtn.addEventListener('click', () => switchState('STAGE_SELECT'));
}

if (backToMenuBtn) {
    backToMenuBtn.addEventListener('click', () => switchState('START'));
}

stageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentStage = parseInt(btn.dataset.stage);
        currentStoryIndex = 0;
        switchState('STORY');
    });
});

if (storyNextBtn) {
    storyNextBtn.addEventListener('click', () => {
        showNextStoryLine();
    });
}

window.addEventListener('keydown', (e) => {
    if (gameState === 'PLAYING' && !mathProblem && e.code === 'Space') {
        // Leave poop on jump start
        poopMarks.push(new PoopMark(player.group.position));

        mathProblem = new MathHandler();
        const problemElement = document.getElementById('math-problem');
        if (problemElement) problemElement.textContent = mathProblem.getProblem();

        mathUI.classList.remove('hidden');
        mathInput.value = "";
        setTimeout(() => mathInput.focus(), 10);
        e.preventDefault();
    } else if (mathProblem && e.key === 'Enter') {
        const val = parseInt(mathInput.value);
        if (val === mathProblem.answer) {
            player.jump();
            mathProblem = null;
            mathUI.classList.add('hidden');
            // Success flash/shake
            cameraShake = 5;
        } else {
            mathInput.value = "";
            // Error shake
            cameraShake = 15;
            mathUI.classList.add('error-shake');
            setTimeout(() => mathUI.classList.remove('error-shake'), 400);
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

        // Poop Trail
        trailTimer++;
        if (trailTimer > 10) {
            trail.push(new TrailNode(player.group.position));
            trailTimer = 0;
        }
        trail.forEach((node, idx) => {
            node.update();
            if (node.life <= 0) {
                node.destroy();
                trail.splice(idx, 1);
            }
        });

        // Update Poop Marks
        poopMarks.forEach((mark, idx) => {
            mark.update();
            if (mark.sprite.position.z > 20) {
                mark.destroy();
                poopMarks.splice(idx, 1);
            }
        });

        // Spawn obstacles
        spawnTimer++;
        const finishZ = Math.abs(FINISH_BASE_Z + (currentStage - 1) * STAGE_INCREMENT_Z);
        if (spawnTimer > 80 && distance < finishZ * 5 - 20) {
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
            // Refined collision detection
            const pX = 0; // Player is always at X=0 in world space (camera follows)
            const pZ = 0; // Player is always at Z=0 in world space
            const oX = obs.mesh.position.x;
            const oZ = obs.mesh.position.z;

            // X-axis check (player width ~0.8)
            const dx = Math.abs(pX - oX);
            const dz = Math.abs(pZ - oZ);

            if (dz < 0.7 && dx < (obs.width / 2 + 0.4)) {
                // Precise vertical overlap check
                // Player height is ~3.9 (Feet at player.y, Head at player.y + 3.9)
                const playerTop = player.y + 3.9;
                const playerBottom = player.y;

                if (playerBottom < obs.maxY && playerTop > obs.minY) {
                    switchState('GAME_OVER');
                    new ParticleSystem(player.group.position);
                    cameraShake = 20;
                }
            }
        });

        // Removed progress bar logic

        // World movement
        finishLine.position.z += GROUND_SPEED;
        if (finishLine.position.z >= 0) {
            switchState('CLEAR');
            player.setToThinker();
        }
    }

    // Timer logic removed

    if (gameState === 'CLEAR') {
        clearTimer++;
        player.group.position.z = finishLine.position.z;
        if (clearTimer > 180) clearText.classList.remove('hidden');
        if (clearTimer > 450) {
            if (currentStage < MAX_STAGES) {
                currentStage++;
                switchState('PLAYING');
            } else {
                switchState('START');
                currentStage = 1; // Reset for next game
            }
        }
    }

    // Camera follow and smooth movement
    if (gameState === 'PLAYING') {
        const shakeOffset = Math.sin(Date.now() * 0.001) * 0.5;
        camera.position.z = -4 + shakeOffset;
        camera.lookAt(0, 2, -5); // Keep target offset to maintain left-side framing
    }

    // Camera shake
    if (cameraShake > 0) {
        camera.position.x += (Math.random() - 0.5) * cameraShake * 0.1;
        camera.position.y += (Math.random() - 0.5) * cameraShake * 0.1;
        cameraShake *= 0.9;
    }

    renderer.render(scene, camera);
}

initWorld();
animate();

// Explicitly set START state and ensure overlays are visible
switchState('START');
