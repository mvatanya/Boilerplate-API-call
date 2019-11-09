const fetch = require('node-fetch');


//1)
const resp = await fetch('https://jsonplaceholder.typicode.com/albums', {
  method: 'get',
  headers: { 'Accept': 'text/plain' },
});
const content = await resp.text();
console.log(content);


//2)
const resp = await fetch('https://jsonplaceholder.typicode.com/albums', {
  method: 'get',
  headers: { 'Accept': 'application/json' },
});
const content = await resp.json();
console.log(content);


//GET
const resp = await fetch("https://jsonplaceholder.typicode.com/albums");
const albums = await resp.json();


// Example POST method implementation:

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

try {
  const data = await postData('http://example.com/answer', { answer: 42 });
  console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
} catch (error) {
  console.error(error);
}
