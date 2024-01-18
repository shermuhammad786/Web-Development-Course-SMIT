var input = document.getElementById("input");
var ul = document.getElementById("ul");
input.value = ""
let addToDoHandler = (event) => {
    // event.preventDefault()
    // create li
    var localLi = document.createElement("li")
    li = localLi;
    li.setAttribute("class", "createlias")
    // create paragraph Element
    var para = document.createElement("p")
    var paraText = document.createTextNode(input.value);
    para.appendChild(paraText);
    // create delete button
    var dltbtn = document.createElement("button");   
    li.appendChild(dltbtn)
    dltbtn.setAttribute("onclick", "delt(this)");
    dltbtn.setAttribute("class", "dltbtn");
    dltbtn.innerHTML = "Delete"
    // create edit button
    var edtbtn = document.createElement("button");
    edtbtn.setAttribute("onclick", "edit(this)");
    edtbtn.setAttribute("class", "edtbtn");
    edtbtn.innerHTML = "Edit";
    // create check box
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    // merging of created elements;
    ul.appendChild(li);
    li.appendChild(para);
    li.appendChild(checkbox)
    li.appendChild(edtbtn)
    li.appendChild(dltbtn)
    input.value = "";
    // console.log(ul.children.reverse())
}
// delete all items of to do list 
let deleteAllToDoHandler = () => {
    ul.replaceChildren()
}
// delete  item of to do list 
let delt = e => {
    e.parentNode.remove()
};
var modaldiv = document.getElementById("modalDiv");
modaldiv.style.display = "none";
// edit item of to do list 
function edit(e) {
    if(modaldiv.style.display == "none"){
        modaldiv.style.display = "block"
    }
     modalInput = document.getElementById("modalInput");
    val = e;
    modalInput.value = val.parentNode.children[0].innerHTML
}
// set item of to do list 
function ok(){
    console.log(val.parentNode.children[0].innerHTML = modalInput.value)
    modaldiv.style.display = "none";
}
function clos(){
    modaldiv.style.display = "none"
}