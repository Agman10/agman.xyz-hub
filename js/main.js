var modalButton = document.getElementById("hello");
var modalTitle = document.getElementById("exampleModalLongTitle");
var modalText = document.getElementById("modal-text")
var modalLink = document.getElementById("modal-link");
var modalLink2 = document.getElementById("modal-link2");
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
    modalText.innerHTML = "Snake but you play as a pumpkin who collects candy to grow. This was a halloween school assignment";
    modalLink.innerHTML = "Play the game here!";
    modalLink2.innerHTML = "Link to the github repo.";
    image.src = "images/pumpkinsnake.png"
    image.alt = "Space Invaders"
    modalLink.href = "https://snake.agman.xyz"
    modalLink2.href = "https://github.com/Agman10/Pumpkin-Snake"
}

function modalFunction2() {
    modalTitle.innerHTML = "Space Invaders JS";
    modalText.innerHTML = "A re-creation of the popular arcade game Space Invaders made in javascript.";
    modalLink.innerHTML = "Play the game here!";
    modalLink2.innerHTML = "Link to the github repo.";
    image.src = "images/spaceinvadersJS.png"
    image.alt = "Space Invaders JS"
    modalLink.href = "https://agman10.github.io/SpaceInvadersJS/index.html"
    modalLink2.href = "https://github.com/Agman10/SpaceInvadersJS"
}
function modalFunction3() {
    modalTitle.innerHTML = "Litterary War";
    modalText.innerHTML = "A space shooter that uses text as graphich. This was a school assignemnt.";
    modalLink.innerHTML = "Play the game here!";
    modalLink2.innerHTML = "Link to the github repo.";
    image.src = "images/litterarywarBeta.png"
    image.alt = "Litterary War"
    modalLink.href = "https://agman10.github.io/LitteraryWar/"
    modalLink2.href = "https://github.com/Agman10/LitteraryWar"
}

function modalFunction4() {
    modalTitle.innerHTML = "Space Invaders Java";
    modalText.innerHTML = "A re-creation of the popular arcade game Space Invaders made in java, not finished.";
    modalLink.innerHTML = "Link to the github repo.";
    modalLink2.innerHTML = "";
    image.src = "images/spaceinvadersjava.png"
    image.alt = "Space Invaders Java"
    modalLink.href = "https://github.com/Agman10/Space-InvadersFinal"
    modalLink2.href = ""

}

function modalFunction5() {
    modalTitle.innerHTML = "VG Currency Clicker";
    modalText.innerHTML = "A clicker game that uses video game currencies klick on the question-mark block to get coins and buy other game currencies to increase the ammount of coins you earn.";
    modalLink.innerHTML = "Play the game here!";
    modalLink2.innerHTML = "Link to the github repo.";
    image.src = "images/clicker.png"
    image.alt = "VG Currency Clicker"
    modalLink.href = "https://agman10.github.io/clicker/"
    modalLink2.href = "https://github.com/Agman10/clicker"
}

function modalFunction6() {
    modalTitle.innerHTML = "Unity platformer";
    modalText.innerHTML = "A work in progress platformer game made in unity. Sprites made by me" + "<br /> <br />" + "this was one of my first unity projects so the code on the github is very spaghetti but i have a newer version that i haven't added to github yet where i rewrote the code and using a newer version of unity.";
    modalLink.innerHTML = "Link to the old github repo.";
    modalLink2.innerHTML = "Donwload the prototype";
    image.src = "images/unityplatformer.png"
    image.alt = "Unity platformer"
    modalLink.href = "https://github.com/Agman10/unity-platformer"
    modalLink2.href = "https://drive.google.com/file/d/1mx1vbJKXoV8k-gUI4bxV-CjR6Q6w5MXY/view?usp=sharing"
}

function modalFunction7() {
    modalTitle.innerHTML = "Ball Game";
    modalText.innerHTML = "A platformer where you play as a ball and you can't jump, you unlock levels by collecting the star en enter the exit portal. If you destroy all boxes in a level you get a gem. The game is based on the ball levels in Crash the Wrath of Cortex." + "<br /> <br />" + "you can play the game in the GameBuild folder in github";
    modalLink.innerHTML = "Link to the github repo + download.";
    modalLink2.innerHTML = "";
    image.src = "images/BallGame2.png"
    image.alt = "Ball Game"
    modalLink.href = "https://github.com/Agman10/BallGamePlatformer"
    modalLink2.href = ""
}

function modalFunction8() {
    modalTitle.innerHTML = "Iron Evil";
    modalText.innerHTML = "A Rougelike game where you choose powerups and the boss get the ones you didn't pick." + "<br /> <br />" + "I work mainly on the enemies, traps and abilities and other...";
    modalLink.innerHTML = "Playtest the game on Steam!";
    modalLink2.innerHTML = "";
    image.src = "images/IronEvil.jpg"
    image.alt = "IronEvil"
    modalLink.href = "https://store.steampowered.com/app/1795100/IRON_EVIL/"
    modalLink2.href = ""
}
function modalFunction9() {
    modalTitle.innerHTML = "Quantum Arena";
    modalText.innerHTML = "An online multiplayer game where you play as a tank. The goal of the game is to have the most points by damaging or killing enemies, killing your teammates will reduce your points.In some maps, holding the control point in the middle of the map also awards points. There is also a FFA gamemode" + "<br /> <br />" + "This is a group project that i was assigned to I did the Tank AI, UI programming, score systemn the controls and some online stuff, and other stuff";
    modalLink.innerHTML = "Download the Game";
    modalLink2.innerHTML = "";
    image.src = "images/QuantumArena_2.png"
    image.alt = "Quantum Arena"
    modalLink.href = "https://drive.google.com/file/d/1lP-EXODsm34D7w7LCjQnq5EVwldezLl2/view?usp=sharing"
    modalLink2.href = ""
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