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

//style

/* document.body.style.background = "#bbbbbb";
wrap.style.background = "white";
logo.style.fill = "black"; */

function modalFunction1() {
    modalTitle.innerHTML = "Space Invaders";
    modalText.innerHTML = "En re-creation av det populära arcad spelet Space Invaders.";
    modalLink.innerHTML = "Länk till GitHub repot.";
    image.src = "images/spaceinvaders.webp"
    image.alt = "Space Invaders"
    modalLink.href = "https://github.com/Agman10/Space-InvadersFinal"
    
}
function modalFunction2() {
    modalTitle.innerHTML = "VG Currency Clicker";
    modalText.innerHTML = "Ett clicker spel som använder spel valuta klicka på frågetecken blocket för att få coins och köp andra spel valutor för att öka antalet coins som du känar.";
    modalLink.innerHTML = "Testa spelet här!";
    image.src = "images/clicker.webp"
    image.alt = "VG Currency Clicker"
    modalLink.href = "https://agman10.github.io/clicker/"
}

//When you click the logo dark mode turns on and off, changes the colors to dark and bright
logo.addEventListener("click", function(){
    darkMode = !darkMode //darkmode switches from false to true
    console.log("darkMode: " + darkMode);

    document.body.style.background = darkMode ? "#111111" : "#bbbbbb"; //When darkmode is true background get dark, when it's false it gets bright
    document.body.style.color = darkMode ? "white" : "#232323";
    document.getElementsByTagName('a')[0].style.color = darkMode ? "#7dafff" : "#007bff";
    wrap.style.background = darkMode ? "#232323" : "white";
    logo.style.fill = darkMode ? "white" : "black";
    modalBackground.style.background = darkMode ? "#232323" : "white";
    modalClose.style.color  = darkMode ? "rgb(240, 80, 80)" : "rgb(210, 50, 50)";
    
    
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