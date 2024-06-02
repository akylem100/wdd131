const articles1 = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****"
  },
];

const articles2 = [
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  }
];

const articles3 = [
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
    "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
    "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
    }
]

const articlesContainer = document.querySelector('.articles-container');

const createArticleElement = (article) => {
  const articleElement = document.createElement('article');
  articleElement.classList.add('article');

  articleElement.innerHTML = `
    <h2>${article.title}</h2>
    <img src="${article.imgSrc}" alt="${article.imgAlt}">
    <p>${article.description}</p>
  `;

  return articleElement;
};

articles1.forEach(article => {
  const articleElement = createArticleElement(article);
  articlesContainer.appendChild(articleElement);
});

articles2.forEach(article => {
  const articleElement = createArticleElement(article);
  articlesContainer.appendChild(articleElement);
});

articles3.forEach(article => {
  const articleElement = createArticleElement(article);
  articlesContainer.appendChild(articleElement);
});

const createElement = (article) => {
  const category1element = document.createElement('section');
  category1element.classList.add('category1');

  category1element.innerHTML = `
    <div class="info">
      <p class="date">${articles1[0].date}</p>
      <p>${articles1[0].ages}</p>
      <p>${articles1[0].genre}</p>
      <p>${articles1[0].stars}</p>
    </div>

    <div class="info2">
      <p class="date">${article.date}</p>
      <p>${article.ages}</p>
      <p>${article.genre}</p>
      <p>${article.stars}</p>
    </div>
    <div class="info3">
      <p class="date">${articles3[0].date}</p>
      <p>${articles3[0].ages}</p>
      <p>${articles3[0].genre}</p>
      <p>${articles3[0].stars}</p>
    </div>
  `;

  return category1element;
};

// Usage (passing article2 data)
const category1Container = document.querySelector('.category1');
const category1Element = createElement(articles2[0]); // Access the second article in articles2
category1Container.appendChild(category1Element);



const createCategory3Element = () => {
  const category3element = document.createElement('section');
  category3element.classList.add('category30');

  category3element.innerHTML = `
    <p class="category3text">Filters will go here.</p>
  `;

  return category3element;
};

const category3Container = document.querySelector('.category3');
const category3Element = createCategory3Element();
category3Container.appendChild(category3Element);
