var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";
menu.style.width = "25px"
sideNav.style.height == "60px"

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        sideNav.style.height == "70px"

    }
    else{
        sideNav.style.right = "-250px";
    }
}


let vw = document.getElementById("vw");
let opel = document.getElementById("opel");
let kia = document.getElementById("kia");
let pegueot = document.getElementById("pegueot");
let fiat = document.getElementById("fiat");
let benz = document.getElementById("benz");
let bmw = document.getElementById("bmw");
let maserati = document.getElementById("maserati");
let porsche = document.getElementById("porsche");
let audi = document.getElementById("audi");
let ferrari = document.getElementById("ferrari");
let lambo = document.getElementById("lambo");
let bentley = document.getElementById("betley");
let rolls = document.getElementById("rr");


vw.addEventListener("click", () => {
    window.open("vw.html", "_blank");; 
});

opel.addEventListener("click", () => {
    window.open("opel.html", "_blank");; 
});

kia.addEventListener("click", () => {
    window.open("kia.html", "_blank");; 
});

pegueot.addEventListener("click", () => {
    window.open("pegueot.html", "_blank");; 
});

fiat.addEventListener("click", () => {
    window.open("fiat.html", "_blank");; 
});
benz.addEventListener("click", () => {
    window.open("mercedes.html", "_blank");; 
});
bmw.addEventListener("click", () => {
    window.open("bmw.html", "_blank");; 
});
maserati.addEventListener("click", () => {
    window.open("maserati.html", "_blank");; 
});
porsche.addEventListener("click", () => {
    window.open("porsche.html", "_blank");; 
});

audi.addEventListener("click", () => {
    window.open("audi.html", "_blank");; 
});
ferrari.addEventListener("click", () => {
    window.open("ferrari.html", "_blank");; 
});
lambo.addEventListener("click", () => {
    window.open("lambo.html", "_blank");; 
});
bentley.addEventListener("click", () => {
    window.open("bentley.html", "_blank");; 
});
rr.addEventListener("click", () => {
    window.open("rollsroice.html", "_blank");; 
});



