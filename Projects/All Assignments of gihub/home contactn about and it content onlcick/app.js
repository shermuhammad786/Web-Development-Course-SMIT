var textDetails = {
    history: [
        "History \n I'm baby wolf pic   kled schlitz try-hand normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hand, woke fixie banjo man un. Small batch tumeric mustache kbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    ],
    vision: [
        "helow this is the vision text"
    ],
    goal: [
        "hellow this is the goal text"
    ]
}
var hstry = document.getElementById("hstry");
var vsn = document.getElementById("vsn");
var gols = document.getElementById("gols")
var details = document.getElementById("detilas");
hstry.style.border = "4px solid lightBlue"
hstry.style.borderRight = "none"
details.innerText = textDetails.history
let history = () => {
    details.innerText = textDetails.history
    hstry.style.border = "4px solid lightBlue"
    hstry.style.borderRight = "none"
    vsn.style.border = "none"
    gols.style.border = "none"
}
let vision = () => {
    details.innerText = textDetails.vision
    vsn.style.border = "4px solid lightBlue"
    vsn.style.borderRight = "none"
    gols.style.border = "none"
    hstry.style.border = "none"
}
let goals = () => {
    details.innerText = textDetails.goal
    gols.style.border = "4px solid lightBlue"
    gols.style.borderRight = "none"
    vsn.style.border = "none"
    hstry.style.border = "none"
}