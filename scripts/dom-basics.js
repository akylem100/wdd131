let fullName = 'Kyle Amerjan';
console.log(fullName);
//THISISHOWYOUCOMMENT, FYI
const h1 = document.querySelector('h1');
h1.innerHTML += '<em>' + fullName + '</em>';

const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.textContent = 'Section 3';
const p = document.createElement('p');
p.textContent = 'This is a paragraph in section 3';


section.appendChild(h2);
section.appendChild(p);
document.body.appendChild(section);
