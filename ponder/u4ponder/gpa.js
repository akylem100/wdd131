document.querySelector('button').addEventListener('click', () => {
    // 1. Get the strings of grades from the input
    const grades = document.querySelector('input').value;
    // 2. Convert the string to an array (String.split(',')), clean up any extra spaces, and make the grades all uppercase.
    const gradesArray = grades.split(',');
    console.log(gradesArray);
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    
    console.log('calculating gpa...');
    });