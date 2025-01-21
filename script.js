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
let bentley = document.getElementById("bentley");
let rolls = document.getElementById("rr");


vw.addEventListener("click", () => {
    window.open("vw.html");; 
});

opel.addEventListener("click", () => {
    window.open("opel.html");; 
});

kia.addEventListener("click", () => {
    window.open("kia.html");; 
});

pegueot.addEventListener("click", () => {
    window.open("pegueot.html");; 
});

fiat.addEventListener("click", () => {
    window.open("fiat.html");; 
});
benz.addEventListener("click", () => {
    window.open("mercedes.html");; 
});
bmw.addEventListener("click", () => {
    window.open("bmw.html");; 
});
maserati.addEventListener("click", () => {
    window.open("maserati.html");; 
});
porsche.addEventListener("click", () => {
    window.open("porsche.html");; 
});
audi.addEventListener("click", () => {
    window.open("audi.html");; 
});
ferrari.addEventListener("click", () => {
    window.open("ferrari.html");; 
});
lambo.addEventListener("click", () => {
    window.open("lambo.html");; 
});
bentley.addEventListener("click", () => {
    window.open("bentley.html");; 
});
rr.addEventListener("click", () => {
    window.open("rollsroice.html");; 
});



