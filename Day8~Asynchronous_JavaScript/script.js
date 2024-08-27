// Create a promise that resolves with a message after a 2 second timeout and logs the message to the console.

const message = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('Hello, Promise!');
  },2000);
})

message.then(msg => {
  console.log(msg);
})


// Call API using async await 

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();