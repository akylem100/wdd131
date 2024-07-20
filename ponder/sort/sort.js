// const years = [2022, 2000, 1997, 2010, 2014]

// years
// .sort()
// .reverse()
// .forEach((year) => {
//     const p = document.createElement('p');
//     p.textContent = year;
//     section.appendChild(p);
// })

const students = [
    {
        firstName: 'Kyle',
        lastName: 'Amerjan',
        iNumber: '12345',
        age: 22
    },

    {
        firstName: 'Jace',
        lastName: 'Firenza',
        iNumber: '54321',
        age: 23
    },
]

const section = document.querySelector('section');

students
.sort((a, b) => b.age - a.age)
.forEach((student) => {
    const p = document.createElement('p');
    p.textContent = `${student.firstName} ${student.lastName} ${student.age} ${student.iNumber}`;
    section.appendChild(p);
})