let targetRotationX = 0.05;
let targetRotationY = 0.02;
let mouseX = 0, mouseXOnMouseDown = 0, mouseY = 0, mouseYOnMouseDown = 0;
let isMouseDown = false;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;
const slowingFactor = 0.98;
const dragFactor = 0.00005;

function onDocumentMouseDown(event) {
    event.preventDefault();
    isMouseDown = true; // La souris est enfoncée
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    mouseXOnMouseDown = event.clientX - windowHalfX;
    mouseYOnMouseDown = event.clientY - windowHalfY;
}

function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    targetRotationX = (mouseX - mouseXOnMouseDown) * dragFactor;
    mouseY = event.clientY - windowHalfY;
    targetRotationY = (mouseY - mouseYOnMouseDown) * dragFactor;
}

function onDocumentMouseUp(event) {
    isMouseDown = false; // La souris n'est plus enfoncée
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('mouseup', onDocumentMouseUp, false);
}

function main() {
    // Sélectionne le canvas
    const canvas = document.querySelector('#globe');

    // Crée la scène
    const scene = new THREE.Scene();

    // Crée le renderer avec fond transparent
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true, // Permet de rendre le fond transparent
    });

    // Définir une taille fixe correspondant à celle du style inline
    const width = canvas.offsetWidth;
    const height = 400;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Crée le globe avec la texture en utilisant MeshStandardMaterial
    const earthGeometry = new THREE.SphereGeometry(2.0, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('./img/mappemonde.png'),
        roughness: 0.8,
        metalness: 0.0,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Lumière ambiante forte (plus diffuse)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Lumière directionnelle douce
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Caméra adaptée à la taille
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4;

    // Fonction de rendu
    const render = () => {
        // Si la souris est enfoncée, ne pas appliquer la rotation automatique
        if (!isMouseDown) {
            // Rotation automatique (plus lente)
            earthMesh.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.0025);
            earthMesh.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), 0.001);
        }

        // Rotation basée sur la souris
        earthMesh.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), targetRotationX);
        earthMesh.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), targetRotationY);
        targetRotationY *= slowingFactor;
        targetRotationX *= slowingFactor;

        renderer.render(scene, camera);
    };

    // Animation
    const animate = () => {
        requestAnimationFrame(animate);
        render();
    };

    animate();

    // Gestion des événements de la souris
    document.addEventListener('mousedown', onDocumentMouseDown, false);

    // Gère le redimensionnement si nécessaire
    window.addEventListener('resize', () => {
        const newWidth = canvas.offsetWidth;
        const newHeight = canvas.offsetHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
    });
}

window.onload = main;
