import { auth, db, doc, getDoc, onAuthStateChanged } from "../utility/firebaseconfig.js"

const uFName = document.querySelector("#uFName")
const uLName = document.querySelector("#uLName")
const uEmail = document.querySelector("#uEmail")
const uPh = document.querySelector("#uPh")
const uUsername = document.querySelector("#uUsername")
const uPass = document.querySelector("#uPass")
const uId = document.querySelector("#uId")
const imageHtml = document.querySelector("#imageHtml");

window.imageHandler = () => {
    let imageUrl = prompt("Enter Image Address")
    
}


imageHtml.addEventListener("click", imageHandler)
let uid;
let userDetails;
onAuthStateChanged(auth, async (user) => {
    if (user) {
        uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            userDetails = docSnap.data()
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }


        // ...
    } else {
    }
    console.log(userDetails)
    displayData()
});
const displayData = () => {
    console.log(userDetails)
    uFName.innerHTML = userDetails.fname + " " + userDetails.lname;
    // uLName.innerHTML = userDetails.lname; 
    uEmail.innerHTML = userDetails.email;
    // uPh.innerHTML = `# ${userDetails.phNo}`;
    uUsername.innerHTML = userDetails.uName;
    uPass.innerHTML = userDetails.password;
    uId.innerHTML = userDetails.uid;
}
