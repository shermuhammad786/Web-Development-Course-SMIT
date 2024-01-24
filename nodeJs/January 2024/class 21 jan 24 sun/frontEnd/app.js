// const username = document.querySelector("#username");
// const userEmail = document.querySelector("#userEmail");
// const userPassword = document.querySelector("#userPassword");

// // import axios from "axios"


// const fetchingApi = fetch("http://localhost:5000/auth/signup").then(()=>{

//     console.log(fetchingApi)
// })

fetch("http://localhost:5000/auth/signup")
  .then(response => {
    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the response JSON
    return response.json();
  })
  .then(data => {
    // Do something with the parsed data
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
