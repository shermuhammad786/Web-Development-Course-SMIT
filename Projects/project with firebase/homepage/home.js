

logOut.addEventListener("click", () => {
    let LogedInUser = JSON.parse(localStorage.getItem("logInUser"))
    localStorage.removeItem("logInUser");
    window.location.replace("../index.html")
})


// displaying profile Picture 
let LogedInUser = JSON.parse(localStorage.getItem("logInUser"))

let userdata = JSON.parse(localStorage.getItem("userDetail"))
let loginEmail = JSON.parse(localStorage.getItem("userEmail"))
const image = document.querySelector("#image");
var uploadImage = "";
image.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadImage = reader.result;
        console.log(loginEmail)

        userdata.find(v => {
            if (LogedInUser.id == v.id) {
                v.image = uploadImage
                localStorage.setItem("userDetail", JSON.stringify(userdata));
                // window.location.reload()
            }
        })
    })
    reader.readAsDataURL(this.files[0])
})
var profileName = document.querySelector("#profileName")
let navbar_profile_pic = document.querySelector("#navbar-profile-pic")

//post profile and name

function displayImageFun() {
    let userdata = JSON.parse(localStorage.getItem("userDetail"))
    userdata.find(v => {
        if (LogedInUser.id == v.id) {
            // display pic
            navbar_profile_pic.style.background = `url(${v.image})`
            // post_profile_pic.style.background = `url(${v.image})`

            // no repeat image
            navbar_profile_pic.style.backgroundRepeat = "no-repeat"
            // post_profile_pic.style.backgroundRepeat = "no-repeat"

            // conver image
            navbar_profile_pic.style.backgroundSize = "cover"
            // post_profile_pic.style.backgroundSize = "cover"

            profileName.innerText = v.name
            // post_profile_name.innerText = v.name
        }
    })
}
displayImageFun()
// create Post by user;
// set Image

const create_Post = document.querySelector("#create_Post");
let uploadPost = "";
create_Post.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadPost = reader.result;
        localStorage.setItem("newPosts", JSON.stringify(reader.result)) || ""
        // console.log(loginEmail)


        //     userdata.find(v =>{ 
        //         if(LogedInUser.id == v.id){
        //             v.userPost
        //             // v.image = uploadPost
        //              localStorage.setItem("userDetail",JSON.stringify(userdata));
        //             window.location.reload()
        //         }
        //     })    
    })
    reader.readAsDataURL(this.files[0])
})


let create_text = document.querySelector("#create_text");
let post = document.querySelector("#post");
post.addEventListener("click", () => {
    let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];
    let userdata = JSON.parse(localStorage.getItem("userDetail"));
    // let newPosts = JSON.parse(localStorage.getItem("newPosts"))
    let postCreate;
    console.log(uploadPost)
    userdata.find(v => {
        if (LogedInUser.id == v.id) {
            if (!create_text.value && !uploadPost) return alert("plase write something");
            if (!uploadPost) {
                postCreate = `<div class="card-bod">
    <img style="background-image: url(${v.image});" class="navbar-profile-pic avatar" id="post-profile-pic">         
    <span id="post-profile-name">${v.name}</span>
    <p class="card-text">${create_text.value}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p></div>`
            } else if (!create_text.value) {
                postCreate = `<div class="card-bod">
    <img style="background-image: url(${v.image});" class="navbar-profile-pic avatar" id="post-profile-pic">
    <span id="post-profile-name">${v.name}</span>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    <img src="${uploadPost}" width="100%" class="img-rounded">
    </div>`
            }
            else {
                postCreate = `<div class="card-bod">
    <img style="background-image: url(${v.image});" class="navbar-profile-pic avatar" id="post-profile-pic">
    <span id="post-profile-name">${v.name}</span>
    <p class="card-text">${create_text.value}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    <img src="${uploadPost}" width="100%" class="img-rounded">
    </div>`
            }
            usersPosts.push({
                posts: postCreate,
            })
            localStorage.setItem("usersPosts", JSON.stringify(usersPosts))

        }
    })
    window.location.reload()
})
let users_posts = document.querySelector("#users_posts");
let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];
// console.log(users_posts)

// let usersPosts = JSON.parse(localStorage.getItem("usersPosts")) || [];

let post_profile_pic = document.querySelector("#post-profile-pic")
// post_profile_pic.src = ""

let post_profile_name = document.querySelector("#post-profile-name")
let displayPosts = () => {
    let userdata = JSON.parse(localStorage.getItem("userDetail"))

    usersPosts.reverse().find(up => {
        users_posts.innerHTML += up.posts
    })

}
displayPosts()


