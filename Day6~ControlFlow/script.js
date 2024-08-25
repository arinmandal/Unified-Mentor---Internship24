// if else
function checkEligibility() {
  let input = document.getElementById('inputValue').value;
  let age = parseInt(input);
  if (age > 18) {
    alert('Eligible for vote');
  } else {
    alert(`You're elegible for vote after ${18 - age} years.`);
  }
}

// check date with switch case
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("day").innerHTML = "Today is " + day;

// Loops
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("car").innerHTML = text;