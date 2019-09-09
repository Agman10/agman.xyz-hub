var modalButton = document.getElementById("hello");
var modalTitle = document.getElementById("exampleModalLongTitle");
var modalText = document.getElementById("modal-text")
var modalLink = document.getElementById("modal-link");
var image = document.getElementById("modal-image");
var logo = document.getElementById("logo");
document.getElementById("wrap").style.background = "white";

function modalFunction1() {
    modalTitle.innerHTML = "Title";
    modalText.innerHTML = "Lorem ipsum dolor sit amet, eu nam alii vocibus, eu nec omittam splendide moderatius. Veri volumus adipisci ne sit. Regione aliquando mediocritatem cum at, usu te principes accommodare complectitur, paulo doming cum te. Blandit voluptaria eum id, ne prima feugiat verterem has. Graece semper mel no, atqui movet equidem qui et.";
    modalLink.innerHTML = "Link: ";
    image.src = "images/placeholder2.png"
    
}
function modalFunction2() {
    modalTitle.innerHTML = "Title2";
    modalText.innerHTML = "Eu impedit laboramus his, sea assum voluptua scripserit ne, sea zril labore constituto ex. Eu vis dicta fastidii argumentum, nominati eleifend repudiandae has eu. Vim omnis dictas electram ei, vel persius dissentiet disputationi ad, soleat molestie eu sit. Eu stet conclusionemque eum, et eos erat dicam corrumpit. Eu usu forensibus concludaturque, eu illum praesent duo. Nemore verterem oportere nec ea, quo ne lobortis platonem incorrupte.";
    modalLink.innerHTML = "Link: 2";
    image.src = "images/placeholder3.png"
    
}

function Theme() {
    


    if (document.getElementById("wrap").style.background === "white") {
        document.getElementById("wrap").style.background = "#232323";
    } else {
        document.getElementById("wrap").style.background = "white";
    }
    
    console.log("hello")

    console.log(darkMode ? "LightMode" : "DarkMode");

    document.body.style.background = darkMode ? "white" : "black";
    document.body.style.background ="#000000";
    document.getElementById("wrap").style.background = "#232323";
    
}



/*var portfolie = document.getElementById("image")
portfolie.addEventListener("click", function(){
console.log("image")
})
var textblock = document.getElementById("text-block")
textblock.addEventListener("click", function(){
console.log("text")
})*/