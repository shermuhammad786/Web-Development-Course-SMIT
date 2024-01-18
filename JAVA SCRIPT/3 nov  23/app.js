// set and more and less content of text 
// show more and show less 
// Manipulating means change of image and text;
// swapping images 
// link.href
// setting styles 
// spreat operate [...name of array] to get the all items of an Array

var fontFamily = ["sans-serif" , "Courier", "monospace","Franklin Gothic Medium","Arial Narrow" ]


var text = document.getElementById("fontChange");
increase = 20;
count = 0;
let plus = () => {
    text.style.fontSize = ++increase +"px"
    if(count == fontFamily.length-1){
        count = 0;
    }
        text.style.fontFamily = fontFamily[count++]
}

let minus = ()=> {
    text.style.fontSize = --increase +"px"
    if(count == fontFamily.length-1){
        count = 0;
    }
        text.style.fontFamily = fontFamily[count++]
}