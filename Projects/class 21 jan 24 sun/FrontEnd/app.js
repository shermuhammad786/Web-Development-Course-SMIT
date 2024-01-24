const users = document.querySelector("#users");


const fatchingApiHandler = async () => {


    // const fetchApi = await fetch("http://127.0.0.1:5000/auth/users")
    const fetchApi = await fetch("https://average-tuna-dress.cyclic.app/auth/users")
    try {
        const resInJson = await fetchApi.json()
        console.log(resInJson , '===>>>res in json');
        resInJson.users.forEach(element => {
            console.log(element , "===>>>v") 
            let usersHtml =
            `<div id="users">
            <h1>${element._id}</h1>
            <h1>${element.userName}</h1>
            <h1>${element.email}</h1>
            <h1>${element.password}</h1>
            </div>`
            users.innerHTML += usersHtml
            
        })
        
    } catch (error) {
        
    }
    // const usersFound = await resInJson.users.find(v => {
    //     console.log(v , "===>>> v")
    // })
    // console.log(usersFound , "===>>>users found")
    //     let usersHtml =
    //         `<div id="users">
    //         <h1>${resInJson.users._id}</h1>
    //         <h1>${resInJson.users.userName}</h1>
    //         <h1>${resInJson.users.email}</h1>
    //         <h1>${resInJson.users.password}</h1>
    //         </div>`
    //         users.innerHTML += usersHtml
   


}

fatchingApiHandler()

// // Replace this URL with the actual API endpoint you want to fetch data from
// const apiUrl = 'http://127.0.0.1:5000/auth/users';

// // Using the fetch function
// fetch(apiUrl)
//   .then(response => {
//     // Check if the response status is OK (status code 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parse the response JSON
//     return response.json();
//   })
//   .then(data => {
//     // Do something with the parsed data
//     console.log('Data:', data);
//   })
//   .catch(error => {
//     // Handle errors that occurred during the fetch
//     console.error('Fetch error:', error);
//   });
