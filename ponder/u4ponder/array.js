const steps = ["one", "two", "three"];


steps.forEach((step_ => {
    document.querySelector("#myList").innerHTML += `<li>${step_}</li>`
}))

// steps.map((step) => {
//     document.querySelector("#myList").innerHTML += `<li>${step}</li>`
// });

// for (let i=0; i<steps.length; i++) {
//     document.querySelector("#myList").innerHTML += `<li>${steps[i]}</li>`
// }

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

console.log(gpaPoints)