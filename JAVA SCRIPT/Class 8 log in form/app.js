var sname = document.getElementById("name");
var sroll = document.getElementById("roll");
var database = document.getElementById("database")
function data(){
    var sdata = {
        name:sname.value,
        roll:sroll.value
    }
    database.innerHTML += sdata.name;
    database.innerHTML += sdata.roll;

}