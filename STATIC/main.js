document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('isActive');
        document.body.classList.toggle('no-scroll');
    });

    // Cierra el menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.Cabecera-a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('isActive');
            document.body.classList.remove('no-scroll');
        });
    });
});
