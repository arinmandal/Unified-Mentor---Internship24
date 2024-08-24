// Creating new variables and adding them to the web page
let div = document.createElement('div');
let heading = document.createElement('h2');
heading.innerHTML = 'Unified Mentor Internship Program 2024';
let paragraph = document.createElement('p');
paragraph.innerHTML = 'The Unified Mentor Internship Program (UMP) is a five-month, 12-week program designed to enhance the mentor-mentee relationship and promote a positive, supportive, and inclusive environment for interns. The program is designed to foster a stronger sense of community, improve communication skills, and equip interns with the skills and knowledge they need to succeed in their careers.'
div.appendChild(heading);
div.appendChild(paragraph);

let body = document.querySelector('body');
body.appendChild(div);

// create a function that show current time inside html body.
function showTime() {
  const timeElement = document.getElementById('time');
  setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      timeElement.innerHTML = timeString;
  }, 1000);
}