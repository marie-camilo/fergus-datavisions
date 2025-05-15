let targetRotationX = 0.05;
let targetRotationY = 0.02;
let mouseX = 0, mouseXOnMouseDown = 0, mouseY = 0, mouseYOnMouseDown = 0;
let isMouseDown = false;
const slowingFactor = 0.98;
const dragFactor = 0.00005;

function onDocumentMouseDown(event) {
    event.preventDefault();
    isMouseDown = true;
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    mouseXOnMouseDown = event.clientX - window.innerWidth / 2;
    mouseYOnMouseDown = event.clientY - window.innerHeight / 2;
}

function onDocumentMouseMove(event) {
    mouseX = event.clientX - window.innerWidth / 2;
    targetRotationX = (mouseX - mouseXOnMouseDown) * dragFactor;
    mouseY = event.clientY - window.innerHeight / 2;
    targetRotationY = (mouseY - mouseYOnMouseDown) * dragFactor;
}

function onDocumentMouseUp(event) {
    isMouseDown = false;
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('mouseup', onDocumentMouseUp, false);
}

function main() {
    const canvas = document.querySelector('#globe');

    // Scène et renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    // Globe
    const earthGeometry = new THREE.SphereGeometry(2.0, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('./img/mappemonde.png'),
        roughness: 0.8,
        metalness: 0.0,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Caméra
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 4;

    // Fonction pour ajuster la taille du renderer et caméra selon le canvas affiché
    function resizeRendererToDisplaySize() {
        // On prend la taille affichée du canvas
        const width = canvas.clientWidth;
        // Fixe une hauteur égale à la largeur (ratio 1:1)
        const height = width;

        if (canvas.width !== width || canvas.height !== height) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            return true;
        }
        return false;
    }

    // Rendu
    const render = () => {
        // Ajuste la taille avant chaque rendu
        resizeRendererToDisplaySize();

        if (!isMouseDown) {
            earthMesh.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.0025);
            earthMesh.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), 0.001);
        }
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

    // Évènements souris
    document.addEventListener('mousedown', onDocumentMouseDown, false);

    // Aussi gestion du resize de la fenêtre (optionnel ici vu que c’est fait à chaque frame)
    window.addEventListener('resize', () => {
        resizeRendererToDisplaySize();
    });
}

window.onload = main;
