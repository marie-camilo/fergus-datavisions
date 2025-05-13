// Création de la barre de progression dans le DOM
const corpsDocument = document.body;
const barreContainer = document.createElement('div');
const barreProgression = document.createElement('div');

// Styles pour la barre de progression
barreContainer.style.position = 'fixed';
barreContainer.style.top = '0';
barreContainer.style.left = '0';
barreContainer.style.width = '100%';
barreContainer.style.height = '5px';
barreContainer.style.backgroundColor = '#e0e0e0';
barreContainer.style.zIndex = '1000';

barreProgression.style.height = '100%';
barreProgression.style.width = '0';
barreProgression.style.backgroundColor = '#6571e0';
barreProgression.style.transition = 'width 0.2s ease';

// Ajout des éléments au DOM
barreContainer.appendChild(barreProgression);
corpsDocument.appendChild(barreContainer);

// Fonction pour mettre à jour la barre de progression lors du scroll
function mettreAJourProgression() {
    const hauteurTotale = corpsDocument.scrollHeight - window.innerHeight;
    const positionActuelle = window.scrollY;
    const pourcentage = (positionActuelle / hauteurTotale) * 100;
    barreProgression.style.width = pourcentage + '%';
}

// Ajout d'un événement d'écoute pour le scroll
window.addEventListener('scroll', mettreAJourProgression);
