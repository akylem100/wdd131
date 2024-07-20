// const firstName = 'Jim';
// const lastName = 'Halpert';
// const iNumber= '123-45-6789';
// const age = 30;

const student1 = {
    firstName: 'Jim',
    lastName: 'Halpert',
    iNumber: '123-45-6789',
    age: 30,
    image: 'https://miro.medium.com/v2/resize:fit:1358/0*Xz-_cHSO6txphvHt.png'
};

const student2 = {
    firstName: 'Pam',
    lastName: 'Beesly',
    iNumber: '994-56-7890',
    age: 30,
    image: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/ORP/jenna-2017020710462386.jpg'
};

const student3 = {
    firstName: 'Dwight',
    lastName: 'Schrute',
    iNumber: '987-65-4321',
    age: 35
};

function addStudent(firstName, lastName, iNumber, age, image) {
    const student = {
        firstName,
        lastName,
        iNumber,
        age,
        image
    };
    students.push(newStudent);
}

const students = [student1, student2, student3];

function displayStudents() {
    const section = document.querySelector('section');
    section.innerHTML - '';

    students.forEach((student) => {

        const article = document.createElement('article');

        const firstName = document.createElement('p');
        firstName.textContent = student.firstName;

        const lastName = document.createElement('p');
        lastName.textContent = student.lastName;

        const iNumber = document.createElement('p');
        iNumber.textContent = student.iNumber;

        const age = document.createElement('p');
        age.textContent = student.age;

        const image = document.createElement('img');
        image.setAttribute('src', student.image);
        image.setAttribute('alt', `${student.firstName} ${student.lastName}`);

        article.append(firstName, lastName, iNumber, age, image);
        document.querySelector('section').append(article);

    });
}

document.querySelector('#firstName').focus();

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const iNumber = document.querySelector('#iNumber').value;
    const age = document.querySelector('#age').value;
    const image = document.querySelector('#image').value;
    addStudent(firstName, lastName, iNumber, age, image);
});

displayStudents();
