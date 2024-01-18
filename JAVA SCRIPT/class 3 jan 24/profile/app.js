import { doc } from "../utils/firebaseConfig.js";
import { getData, getLoggedInUser, logout, updateData, uploadFile } from "../utils/functions.mjs";

let user_Name = document.querySelector("#user_Name")
let PostText = document.querySelector("#PostText");
let postEmail = document.querySelector("#postEmail")
let ProfilePic = document.getElementById("ProfilePic")
let phoneNumberHtml = document.querySelector("#phoneNumber");
let navProfilePic = document.getElementById("navProfilePic")
let LogoutBtn = document.querySelector("#LogoutBtn");


// modal Input 
let firstNameEdit = document.querySelector("#firstNameEdit")
let lastNameEdit = document.querySelector("#lastNameEdit")
let emailEdit = document.querySelector("#emailEdit")
let phoneNumberEdit = document.querySelector("#phoneNumberEdit")
let descrEdit = document.querySelector("#descrEdit")
let profileEdit = document.querySelector("#profileEdit")







let userId;
const getLoggedUser = async () => {
    const gettingLogUser = await getLoggedInUser()
    console.log(gettingLogUser)
    if(!gettingLogUser) return window.location.href = "../login.html"
    userId = gettingLogUser.uid;
    console.log(userId)
    const gettingData = await getData(userId, "users");
    console.log(gettingData);
    user_Name.innerHTML = gettingData.data.name;
    postEmail.innerHTML = gettingData.data.email;
    ProfilePic.style.backgroundImage = `url("${gettingData.data.profilePicture}")`
    navProfilePic.style.backgroundImage = `url("${gettingData.data.profilePicture}")`
    PostText.innerHTML = gettingData?.data?.descr || "About Your Self";
    phoneNumberHtml.innerHTML = gettingData?.data?.phoneNumber || "Upated Your NUmber"

}
getLoggedUser();



// modal
let editBtn = document.querySelector("#editBtn");
let saveChanges = document.querySelector("#saveChanges");
let closeEditProfileModal = document.querySelector("#closeEditProfileModal");
const editBtnHandler = async () => {
    document.getElementById('editProfileModal').style.display = 'block';
}
editBtn.addEventListener("click", editBtnHandler)

const closeEditProfileModalHandler = () => {
    document.getElementById('editProfileModal').style.display = 'none';

}
closeEditProfileModal.addEventListener("click", closeEditProfileModalHandler)

const saveChangesHandler = async () => {
   
    const data = {
        name: `${firstNameEdit.value}  ${lastNameEdit.value}`,
        email: emailEdit.value,
        phoneNumber: phoneNumberEdit.value,
        descr: descrEdit.value,
        // profilePic: uploadingFileUrl
    }
    // let uploadingFileUrl;
    // const uploadfileHandler = async () => {
        if(profileEdit.files[0]){

            const profilePictureName = `${new Date().getTime()}-${profileEdit.files[0].name}`
            const uploadingFile = await uploadFile(profileEdit.files[0], profilePictureName)
            console.log(uploadingFile.status)
            if (uploadingFile.status) {
                data.profilePicture = uploadingFile.downloadURL;
            }
        }
    console.log(userId)
    const updatingData = await updateData(data, userId, "users");
    // console.log(updatingData)


    alert('Changes saved!');
    document.getElementById('editProfileModal').style.display = 'none';
        window.location.reload()
}
saveChanges.addEventListener("click", saveChangesHandler)


// const updatingDataHandler = async ()=>{
// }
// updatingDataHandler()

const LogoutBtnHandler = async ()=>{
const loggingOut = await logout();
if(loggingOut.status){
    window.location.href("../login.html")
}
}
LogoutBtn.addEventListener("click",LogoutBtnHandler); 