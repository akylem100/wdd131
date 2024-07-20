import { movies } from './movies.js';

movies.forEach((movie) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const img = document.createElement('img');
    img.setAttribute('src', movie.image);
    img.setAttribute('alt', movie.title);
    

    h2.textContent = movie.title;
    p.textContent = `Released in ${movie.year}`;
    movie.actors.forEach((actor) => {
        const li = document.createElement('li');
        li.textContent = actor;
        ul.appendChild(li);
    });
    if (movie.image) {
        img.setAttribute('src', movie.image);
    }
    
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(ul);
    article.appendChild(img);
    document.querySelector('#movies').appendChild(article);
})