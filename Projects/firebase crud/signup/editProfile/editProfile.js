var userName = document.getElementById("userName");
var userFatherName = document.getElementById("userFatherName");
var userPhoneNumber = document.getElementById("userPhoneNumber");
var userCNIC = document.getElementById("userCNIC");
var userFatherCNIC = document.getElementById("userFatherCNIC");
var userAddress = document.getElementById("userAddress");
var sherrr = document.getElementById("sherrr")
console.log(sherrr)



var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
let userEmail = JSON.parse(localStorage.getItem("email"))
console.log(userEmail);

for(var v  of userData){
    if(userEmail == v.email){
        userName.value = v.firstName
userFatherName.value = v.fatherName
userPhoneNumber.value = v.number
userCNIC.value =  v.nic
userFatherCNIC.value = v.fatherNic
userAddress.value = v.address

    }

}

// console.log(myName);

let form = document.querySelector("form");

function updateProfile(){
    for(var v  of userData){
        if(userEmail == v.email){
            v.firstName = userName.value 
            v.fatherName = userFatherName.value 
            v.number = userPhoneNumber.value 
            v.nic = userCNIC.value
            v.fatherNic = userFatherCNIC.value
            v.address = userAddress.value 
    
        }
                    localStorage.setItem("userDetails",JSON.stringify(userData));
                    alert("profile has been updated successfully")
                    window.location.replace('../userprofile/profile.html');

    
    }



//     userName.value = uName
// userFatherName.value = uFatherName
// userPhoneNumber.value = uPhoneNumber
// userCNIC.value = uCNIC
// userFatherCNIC.value = uFatherCNIC
// userAddress.value = uAddress
//     for(let v of userData){
//         if(userEmail ==  v.email){
//             uName = v.firstName
//            var uFatherName = ;
//            var uPhoneNumber = ;
//            var uCNIC =  ;
//            var uFatherCNIC = ;
//            var uAddress = ;
     
//             localStorage.setItem("userDetails",JSON.stringify(userData));
//         //    v.preventDefault()
//     }
//     window.location.reload()
//     }
}




// userFatherName.innerHTML = `<b>Father Name:</b><i> <b>${uFatherName}</b> </i>`;
// userPhoneNumber.innerHTML = `<b>Phone Number:</b><i> <b>${uPhoneNumber}</b> </i>`;
// userCNIC.innerHTML = `<b>CNIC:</b><i> <b>${uCNIC}</b> </i>`;
// userFatherCNIC.innerHTML = `<b>Father CNIC:</b><i> <b>${uFatherCNIC}</b> </i>`;
// userAddress.innerHTML = `<b>Address:</b><i> <b>${uAddress}</b> </i>`



// modal



var createModal = document.getElementById("createModal");
var modall = document.getElementById("modal")

createModal.addEventListener("click" , () =>{
    console.log(this.name)
})

modall.style.display = "none";
var nameChange =  document.getElementById("nameChange");

// function userNameHandler(){
//     newName = prompt("Enter Your name")
//     // createModal.style.display = "none";
//     // modall.style.display = "block";
//     // nameChange.value = this.uName;
//     // changeValue = nameChange.value
//     // console.log(this)
// }

// function userFatherNameHandler(){
//     createModal.style.display = "none";
//     modall.style.display = "block";
//     nameChange.value =  this.uFatherName;
// }
// function userPhoneNumberHandler(){
//     createModal.style.display = "none";
//     modall.style.display = "block";
//     nameChange.value =  this.uPhoneNumber;
// // }
// console.log(this)
// console.log(newName)
// var checkStatus = 0;
// for(var v of userData){
//     // nameChange.value = v.fatherName
//     console.log(nameChange.value)
//     if(userEmail ==  v.email){
//         if(nameChange.value == this.uName){
//             checkStatus = 1;
        
//         //  nameChange.value === v.firstName
//         }else if (nameChange.value !== v.fatherName ){
//             checkStatus = 2;
//         }
//     }
// // }
// console.log(checkStatus)
// function clos(){

//         // let nameChange_value = localStorage.setItem("nameChangeValue",JSON.stringify(nameChange.value));
//     // let checkStatus = 0;
//     if(createModal.style.display == "none"){
//         createModal.style.display = "block";
//         modall.style.display = "none"; 
//     }
//     console.log(checkStatus)
    // let checkStatus = 1;
    // for(var v of userData){
    //     if(this.uName == v.firstName){
    //         v.firstName = nameChange.value;
    //         // v.firstName = nameChange.value
    //     }
    //     else if(this.uFatherName == v.fatherName){
    //         v.fatherName = nameChange.value;
    //     } 
    //     if(userEmail ==  v.email){
    //         if(nameChange.value !== v.firstName){
    //             console
    //         //  v.firstName = nameChange.value;
    //         }
    //          else if(v.fatherName !== nameChange.value){
    //             v.fatherName = nameChange.value
    //     }
    //     else if(v.number == nameChange.value){
    //         v.uPhoneNumber = v.number
    // //     }
    //     localStorage.setItem("userDetails",JSON.stringify(userData));
    //     // window.location.reload()
    // }

