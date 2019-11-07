var modalButton = document.getElementById("hello");
var modalTitle = document.getElementById("exampleModalLongTitle");
var modalText = document.getElementById("modal-text")
var modalLink = document.getElementById("modal-link");
var image = document.getElementById("modal-image");


var darkMode = false;
console.log("darkMode: " + darkMode);
var wrap = document.getElementById("wrap");
var logo = document.getElementById("logo");
var modalBackground = document.getElementById("modalContent");
var modalClose = document.getElementById("modalClose");
var logoX = document.getElementById("X");
var logoY = document.getElementById("Y");
var logoZ = document.getElementById("Z");

//style

/* document.body.style.background = "#bbbbbb";
wrap.style.background = "white";
logo.style.fill = "black"; */

function modalFunction1() {
    modalTitle.innerHTML = "Pumpkin snake";
    modalText.innerHTML = "Snake but you play as a pumpkin who collects candy to grow.";
    modalLink.innerHTML = "Play the game here!";
    image.src = "images/pumpkinsnake.png"
    image.alt = "Space Invaders"
    modalLink.href = "https://snake.agman.xyz"

}

function modalFunction2() {
    modalTitle.innerHTML = "Space Invaders";
    modalText.innerHTML = "A re-creation of the popular arcade game Space Invaders.";
    modalLink.innerHTML = "Link to the github repo.";
    image.src = "images/spaceinvaders.png"
    image.alt = "Space Invaders"
    modalLink.href = "https://github.com/Agman10/Space-InvadersFinal"

}

function modalFunction3() {
    modalTitle.innerHTML = "VG Currency Clicker";
    modalText.innerHTML = "A clicker game that uses video game currencies klick on the question-mark block to get coins and buy other game currencies to increase the ammount of coins you earn.";
    modalLink.innerHTML = "Play the game here!";
    image.src = "images/clicker.png"
    image.alt = "VG Currency Clicker"
    modalLink.href = "https://agman10.github.io/clicker/"
}

//When you click the logo dark mode turns on and off, changes the colors to dark and bright
logo.addEventListener("click", function () {
    darkMode = !darkMode //darkmode switches from false to true
    console.log("darkMode: " + darkMode);

    document.body.style.background = darkMode ? "#111111" : "#bbbbbb"; //When darkmode is true background get dark, when it's false it gets bright
    document.body.style.color = darkMode ? "white" : "#232323";
    document.getElementsByTagName('a')[0].style.color = darkMode ? "#7dafff" : "#007bff";
    wrap.style.background = darkMode ? "#232323" : "white";
    logo.style.fill = darkMode ? "white" : "black";
    modalBackground.style.background = darkMode ? "#232323" : "white";
    modalClose.style.color = darkMode ? "rgb(240, 80, 80)" : "rgb(210, 50, 50)";
    logoX.style.fill = darkMode ? "lightcoral" : "red";
    logoY.style.fill = darkMode ? "lightgreen" : "green";
    logoZ.style.fill = darkMode ? "lightblue" : "blue";


});
/* function Theme() {

    wrap.style.background = "white" ? "black" : "white"; */

/* if (document.body.style.background === "#bbbbbb") {
    document.body.style.background = "#111111";
} else {
    document.body.style.background = "#bbbbbb";
}

if (wrap.style.background === "white") {
    wrap.style.background = "#232323";
} else {
    wrap.style.background = "white";
}

if (logo.style.fill === "black") {
    logo.style.fill = "white";
} else {
    logo.style.fill = "black";
} */



//console.log("hello")

//console.log(darkMode ? "LightMode" : "DarkMode");

/* logo.style.color = "black" ? "white" : "white"; */
/* document.body.style.background = darkMode ? "white" : "black";
document.body.style.background ="#000000";
document.getElementById("wrap").style.background = "#232323"; */

/* } */



/*var portfolie = document.getElementById("image")
portfolie.addEventListener("click", function(){
console.log("image")
})
var textblock = document.getElementById("text-block")
textblock.addEventListener("click", function(){
console.log("text")
})*/