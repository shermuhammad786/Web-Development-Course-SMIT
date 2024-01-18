import { signOut } from "../app.js";

// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(uid)
//       location.href("./home/home.html")
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// // let logOut = document.querySelector("#logOut")
// // logOut.addEventListener("click" , ()=>{
// ..
// //     console.log("hfytf")
// // })\




// let logOutHandler = () => {
//     // const auth = getAuth();
//     // signOut(auth).then(() => {
//     //     // Sign-out successful.
//     // }).catch((error) => {
//     //     console.log(error)
//     //     // An error happened.
//     // });
// }
// logOut.addEventListener("click", logOutHandler)
// let LogedInUser = JSON.parse(localStorage.getItem("logInUser"))
// localStorage.removeItem("logInUser");
// window.location.replace("../../index.html")



// displaying profile Picture 
// let LogedInUser = JSON.parse(localStorage.getItem("logInUser"))
// if (!LogedInUser) {
//     window.location.replace("../index.html")
// }

// let userdata = JSON.parse(localStorage.getItem("userDetail"))
// let loginEmail = JSON.parse(localStorage.getItem("userEmail"))
// const image = document.querySelector("#image");
// var uploadImage = "";
// image.addEventListener("change", function (e) {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploadImage = reader.result;
//         console.log(loginEmail)

//         userdata.find(v => {
//             if (LogedInUser.id == v.id) {
//                 v.image = uploadImage
//                 localStorage.setItem("userDetail", JSON.stringify(userdata));
//                 // window.location.reload()
//             }
//         })
//     })
//     reader.readAsDataURL(this.files[0])
// })
// var profileName = document.querySelector("#profileName")
// let navbar_profile_pic = document.querySelector("#navbar-profile-pic")

// //post profile and name

// function displayImageFun() {
//     let userdata = JSON.parse(localStorage.getItem("userDetail"))
//     userdata.find(v => {
//         if (LogedInUser.id == v.id) {
//             navbar_profile_pic.style.background = `url(${v.image})`
//             navbar_profile_pic.style.backgroundRepeat = "no-repeat"
//             navbar_profile_pic.style.backgroundSize = "cover"
//             profileName.innerText = v.name
//         }
//     })
// }
// displayImageFun()
// create Post by user;
// set Image

const create_Post = document.querySelector("#create_Post");
let uploadPost = "";
create_Post.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadPost = reader.result;
    })
    reader.readAsDataURL(this.files[0])
})


let create_text = document.querySelector("#create_text");
let post = document.querySelector("#post");
// post.addEventListener("click", (event) => {
const postHandler = (event) => {
    let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];
    if (!uploadPost) {

        postObject = {
            postID: Date.now(),
            puttedText: create_text.value,
            // puttedImage : uploadPost,
            userDetails: JSON.parse(localStorage.getItem("logInUser"))
        }
    } else {
        postObject = {
            postID: Date.now(),
            puttedText: create_text.value,
            puttedImage: uploadPost,
            userDetails: JSON.parse(localStorage.getItem("logInUser"))

        }
    }
    usersPosts.push(postObject)
    localStorage.setItem("usersPosts", JSON.stringify(usersPosts))

    // }

    // event.preventDefault()
    // let maindivv = document.getElementById("animationBlock");
    // maindivv.style.display = "none"



    // let userdata = JSON.parse(localStorage.getItem("userDetail"));
    // let postCreate;
    // userdata.reverse().find(v => {
    //     if (LogedInUser.id == v.id) {
    //         if (!create_text.value && !uploadPost) return alert("plase write something");
    //         if (!uploadPost) {
    //             postCreate = `<div class="card-bod">
    // <img style="background-image: url(${v.image});" class="navbar-profile-pic avatar" id="post-profile-pic">         
    // <span id="post-profile-name">${v.name}</span>
    // <p class="card-text">${create_text.value}</p>
    // <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    // <button onclick="deletePost(this)">Delete</button>
    // </div>`
    //             // displayPosts()
    //         } else if (!create_text.value) {
    //             postCreate = `<div class="card-bod">
    // <img style="background-image: url(${v.image});" class="navbar-profile-pic avatar" id="post-profile-pic">
    // <span id="post-profile-name">${v.name}</span>
    // <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    // <img src="${uploadPost}" width="100%" class="img-rounded">
    // <button onclick="deletePost(this)">Delete</button>
    // </div>`
    //             // displayPosts()
    //         }
    //         else {
    //             postCreate = `<div class="card-bod">
    // <img style="background-image: url(${v.image});" class="navbar-profile-pic avatar" id="post-profile-pic">
    // <span id="post-profile-name">${v.name}</span>
    // <p class="card-text">${create_text.value}</p>
    // <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    // <img src="${uploadPost}" width="100%" class="img-rounded">
    // <button onclick="deletePost(this)">Delete</button>
    // </div>`
    //         }
    //         usersPosts.push({
    //             posts: postCreate,
    //             posterId: LogedInUser.id,
    //             postId: Date.now()
    //         })
    //         create_text.value = ""
    //         localStorage.setItem("usersPosts", JSON.stringify(usersPosts))
    //         displayPosts()
    //         uploadPost = ""
    //     }
    // })
}
let users_posts = document.querySelector("#users_posts");

let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];


let post_profile_pic = document.querySelector("#post-profile-pic")

let post_profile_name = document.querySelector("#post-profile-name")


function displayPosts() {
    let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];
    users_posts.innerHTML = ""
    let userdata = JSON.parse(localStorage.getItem("userDetail"))
    usersPosts.reverse().find(v => {
        users_posts.innerHTML += v.posts
        // console.log(v)
    })
    // console.log(users_posts)
}
displayPosts()

function deletePost(postId) {
    // if(usersPosts.postId == postId)[
    console.log('working    ')
    console.log(postId.parentNode)
    // ]
}
//     // console.log(indexOf(e))
//     console.log(usersPosts)
// }
// let postHeadlerUpdate = ()=>{
//     // let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];
//     // console.log(userdata , "===>");
//     usersPosts.find(v =>{
//         // console.log(v.posterId)
//         if(LogedInUser.id == v.posterId){
//             console.log(v.posts[0])
//             // console.log(LogedInUser , "-======> log user")
//         }
//     })

// }
// postHeadlerUpdate()


// const updated_Post_Profile_Pic = () => {
//     // console.log(usersPosts)
//     let postprofilepic = document.querySelectorAll("#post-profile-pic")
//     // console.log(postprofilepic.style.background = "")
//     // postprofilepic.removeAttribute("style")
//     // postprofilepic.setAttribute("class" , "sher")

//     // // // // // // // // // // /// //  console.log(postprofilepic.attributes[0].value = `background-image: url("data:image/jpeg;base64,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");`)
//     usersPosts.find(v => {



//         if (LogedInUser.id == v.posterId) {
//             //     // console.log(v.posts.indexOf("img"))
//             //     for(var i = 0;i <= 9;i++){
//             //         // console.log(postprofilepic[i].attributes[0].nodeValue)

//             //         postprofilepic[i].attributes[0].value = `background-image: url("data:image/jpeg;base64,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")`
//             //         postprofilepic[i]
//             // console.log(v.posts)
//             //     }
//         }
//     })
// }
// updated_Post_Profile_Pic()