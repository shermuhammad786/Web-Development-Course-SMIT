var mianDiv = document.getElementById("mainDiv");
var createDiv = document.createElement("div");
var createh2 = document.createElement("h2");
var text = document.createTextNode("this is from js h2")
var newreplaceChild = document.createElement("div");
var newreplaceChild_heading = document.createElement("h3");
var h3text = document.createTextNode("this is the replace text");
newreplaceChild.appendChild(newreplaceChild_heading);

createh2.appendChild(text)
createDiv.appendChild(createh2);
// mianDiv.appendChild(createDiv);
document.body.appendChild(createDiv)
document.body.appendChild(newreplaceChild);

document.body.insertBefore( createDiv ,mianDiv );
// document.body.replaceChild()
