const year = document.querySelector('#year').innerHTML = new Date().getFullYear();
var menubutton = document.getElementById('menubutton');
var menu = document.querySelector('.navbarelements');
var viewer = document.querySelector('.viewer');

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        const img = event.target;
        const alt = img.getAttribute('alt');
        const pic = 'norris-full.jpeg'; // Full-sized image source
        viewer.innerHTML = viewerTemplate(pic, alt);
        viewer.style.display = 'grid';

        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}
function closeViewer() {
    viewer.style.display = 'none';
}
function handleResize() {
    if (window.innerWidth >= 700) {
        menu.style.display = '';
    } else {
        if (menu.style.display === '') {
            menu.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    menubutton.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

window.addEventListener('resize', handleResize);
handleResize();
});

document.querySelector('.gallery').addEventListener('click', viewHandler);