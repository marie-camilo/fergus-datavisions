// Fonction à executer lors du scroll
window.onscroll = function () { scrollFunction() };

// Apparition du bouton lorsque l'utilisateur scroll à 20px
function scrollFunction() {
    // Get the button
    let mybutton = document.getElementById("scrollToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

console.log("ok !");

// Retour au début de la page lors du clic
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}