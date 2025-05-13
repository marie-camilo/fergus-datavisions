window.addEventListener('scroll', function () {
    const progressBar = document.getElementById('barre-progression');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});
