const year = document.querySelector('#year').innerHTML = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', function() {
    var menubutton = document.getElementById('menubutton');
    var menu = document.querySelector('.navbarelements');

    menubutton.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
}); 