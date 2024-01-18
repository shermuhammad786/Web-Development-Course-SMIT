var email = document.getElementById("email");
var password = document.getElementById("password");
var firstName = document.getElementById("firstName");
var fatherName = document.getElementById("fatherName");
var number = document.getElementById("number");
var addrss = document.getElementById("address");
var cnic = document.getElementById("cnic")
var fatherCNIC = document.getElementById("fatherCNIC");


let loginn = document.querySelector("#loginn")
loginn.addEventListener("click", () => {
    window.location.replace("./login.html")
})
// let userdata = JSON.parse(localStorage.getItem("userDetails")) ?? [];
//         userdata.find(v =>{

//             if(v.email == email.value){
//                     return alert("==> email already exists")
//                 }else if (v.number == number.value){
//                         return alert ("Phone Numnber Already Exists")
//                     }else if(v.nic == ucnic){
//                             return alert("nic already exists")
// //                         }
// //                     })

let form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    let fname = this.firstName.value;
    let uemail = this.email.value;
    let upassword = this.password.value;
    let ufName = this.fatherName.value;
    let uphoneNumber = this.number.value
    let uaddress = this.addrss.value;
    let userCnic = this.cnic.value;
    let ufatherCnic = this.fatherCNIC.value;
    let checkStatus = 0;



    let userdata = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for (let v of userdata) {

        if (email.value === v.email) {
            checkStatus = 1;
            break;
        }
        else if(uphoneNumber === v.number){
            checkStatus = 2;

        }else if(userCnic == v.nic){
            checkStatus = 3
        }else if(ufatherCnic == v.fatherNic){
            checkStatus = 4
        }

    }
    if(!ufName || !uemail || !upassword || !ufName || !uphoneNumber || !uaddress || !userCnic || !ufatherCnic) {
        alert("Please Fill The Full Form")
    }
    else if (checkStatus == 1) {
        alert("Email is already exists")
    }else if (checkStatus == 2){
        alert("Phone Number is already exists")
    }else if(checkStatus == 3){
        alert("CNIC is already exists")
    }else if (checkStatus == 4){
        alert("Father CNIC is already exists")
    }

    else {
        userdata.push({
            'firstName': fname,
            'email': uemail,
            'password': upassword,
            'fatherName': ufName,
            'number': uphoneNumber,
            'address': uaddress,
            'nic': userCnic,
            'fatherNic': ufatherCnic,
            'image': "src"
        })
        localStorage.setItem("userDetails", JSON.stringify(userdata))
        alert("Successfully SingUp Now Log In")
        // event.target.reset()
        window.location.replace("./login.html");
    }
    console.log(userdata)

});