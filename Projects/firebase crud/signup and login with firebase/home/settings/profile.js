var setName = document.getElementById("setName");
var setEmail = document.getElementById("setEmail")
var setNumber = document.getElementById("setNumber");
var setGender = document.getElementById("setGender");
var setDate = document.getElementById("setDate");
let logOut = document.querySelector("#logOut");
let updateProfileHandler = () => {
    let userData = JSON.parse(localStorage.getItem("userDetail")) || [];
    // let userEmail = JSON.parse(localStorage.getItem("userEmail"))

    userData.find(ele => {
        if (userEmail == ele.email) {
            ele.number = setNumber.value;
            ele.gender = setGender.value;
            ele.dob = setDate.value
            ele.name = setName.value;
            ele.email = setEmail.value;
        }
    })
    localStorage.setItem("userDetail", JSON.stringify(userData));
    // window.location.reload()
}
logOut.addEventListener("click", () => {
    let LogedInUser = JSON.parse(localStorage.getItem("logInUser"))
    localStorage.removeItem("logInUser");
    window.location.replace("../../index.html")
})


// displaying profile Picture 
let userdata = JSON.parse(localStorage.getItem("userDetail"))
let LogedInUser = JSON.parse(localStorage.getItem("logInUser"))
if (!LogedInUser) window.location.replace("../../index.html")

const image = document.querySelector("#image");
var uploadImage = "";
image.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadImage = reader.result;
        userdata.find(v => {
            if (LogedInUser.id == v.id) {
                v.image = uploadImage
                localStorage.setItem("userDetail", JSON.stringify(userdata));
                displayImageFun()
                console.log(v.image)
            }
        })
    })
    reader.readAsDataURL(this.files[0])
})
var displayProfile = document.getElementById("photo");
let navbar_profile_pic = document.querySelector("#navbar-profile-pic");
let post_profile_name = document.querySelector("#post-profile-name");
function displayImageFun() {
    let userdata = JSON.parse(localStorage.getItem("userDetail"))
    userdata.find(v => {
        if (LogedInUser.id == v.id) {
            displayProfile.style.background = `url(${v.image})`
            navbar_profile_pic.style.background = `url(${v.image})`

            displayProfile.style.backgroundRepeat = "no-repeat"
            navbar_profile_pic.style.backgroundRepeat = "no-repeat"

            displayProfile.style.backgroundSize = "cover"
            navbar_profile_pic.style.backgroundSize = "cover"

            post_profile_name.innerText = v.name
        }
    })
}
displayImageFun()


// edit Profile details
var fullName = document.querySelector("#fname");
var description = document.querySelector("#description");
var locations = document.querySelector("#location");
let country = document.querySelector("#country");
let email = document.querySelector("#email");
let qualification = document.querySelector("#qualification");
let school = document.querySelector("#school");


// let userdata = JSON.parse(localStorage.getItem("userDetail"))
// let LogedInUser = JSON.parse(localStorage.getItem("logInUser"));
let updateProfileDetails = document.querySelector("#updateProfileDetails");
updateProfileDetails.addEventListener("click", updated => {
    updated.preventDefault()
    // let LogedInUser = JSON.parse(localstorage.getItem("logInUser"))
    // if (!fullName.value, !description.value, !locations.value, !country.value, !email.value, !qualification.value, !school.value) {
    //     alert("Please fill the all fields")
    // }

    userdata.find(setPrf => {
        // if(!fullName.value || !email.value || !description.value || !country.value || !qualification.value || !school.value || !locations.value) 
        if (LogedInUser.id == setPrf.id) {
            setPrf.name = fullName.value;
            setPrf.email = email.value;
            setPrf.descr = description.value;
            setPrf.contry = country.value;
            setPrf.qualf = qualification.value;
            setPrf.skol = school.value;
            setPrf.locat = locations.value;
            // console.log(LogedInUser, " loged i =n user")
            LogedInUser.name = setPrf.name
            LogedInUser.email = setPrf.email
            LogedInUser.descr = setPrf.descr
            LogedInUser.contry = setPrf.contry
            LogedInUser.qualf = setPrf.qualf
            LogedInUser.skol = setPrf.skol
            LogedInUser.locat = setPrf.locat
        }
    })
    alert("Profile has been updated")
    localStorage.setItem("userDetail", JSON.stringify(userdata));
    localStorage.setItem("logInUser" , JSON.stringify(LogedInUser))
    // console.log(userdata ,  " users data====>")
})
userdata.find(v => {
    if (LogedInUser.id == v.id) {
        fullName.value = v.name;
        email.value = v.email
        qualification.value = v.qualf;
        description.value = v.descr;
        school.value = v.skol;
        country.value = v.contry;
        locations.value = v.locat
    }
})