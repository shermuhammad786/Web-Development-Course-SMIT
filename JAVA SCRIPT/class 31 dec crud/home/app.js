import { auth, db, doc, getDoc, getDocs, onAuthStateChanged, setDoc, signOut } from "../utility/firebaseconfig.js";
const logoutbtn = document.querySelector("#logoutbtn")
const logoutbtnHandler = () => {
  signOut(auth).then(() => {
    setTimeout(function () {
      location.replace("../logIn/index.html")
    }, 800)
  }).catch((error) => {
    // An error happened.
  });
}
let uid;
onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
    } catch (e) {
      console.error("Error adding document: ", e);
    }
     uid = user.uid;
  } else {
    location.replace("../logIn/index.html")
    console.log("user not found!")
  }
});


logoutbtn.addEventListener("click", logoutbtnHandler)
const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


let textarea = document.querySelector("#textarea");
let createPostBtn = document.querySelector("#createPostBtn");
let imageBtn = document.querySelector("#imageBtn")
let imageUrl;

 imageBtn.addEventListener("click" , ()=>{
  console.log("working...")
  let imageUrl = prompt("Enter Image Url")
   console.log(imageUrl)
 });
//  console.log(imageUrl)
const createPostHandler = async() => {
  const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
  // console.log(imageUrl)
  // await setDoc(doc(db, "users", uid), {
  // //  console.log(uid)
  // imageurl:imageUrl,
  // createdPost:textarea
  // });
}
createPostBtn.addEventListener("click", createPostHandler)