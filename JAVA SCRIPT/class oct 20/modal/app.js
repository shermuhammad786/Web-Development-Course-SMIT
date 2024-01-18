

var createModal = document.getElementById("createModal");
var modall = document.getElementById("modal")


modall.style.display = "none";
function modal(){
    createModal.style.display = "none";
    modall.style.display = "block";
}
function clos(){
    if(createModal.style.display == "none"){
        createModal.style.display = "block";
        modall.style.display = "none"; 

    }
    // alert("faiz is animation")
}