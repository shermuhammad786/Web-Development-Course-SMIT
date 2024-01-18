var ul = document.getElementById("ul");
var names = document.getElementById("name");
var fname = document.getElementById("fname");
var sname = document.getElementById("sname");
var rlno = document.getElementById("rlno");
var submit = document.getElementById("submit");

// var student = {
//     name:names.value,
//     fatherName:fname.value,
//     sname:sname.value,
//     rollno:rlno.value,
// };
submit.addEventListener("click", ()=>{
    // console.log(names.value)
     var data = `Name : ${names.value} <br> Father Name : ${fname.value} <br> Surname : ${sname.value} <br> Roll Number : ${rlno.value}`
     ul.innerHTML += "<br>"
     ul.innerHTML += data

})
