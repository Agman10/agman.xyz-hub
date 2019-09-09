var darkMode = false;

var button = document.getElementById("themeButton");

var randomcolor = document.getElementById("navbartext");

var colors = ["Red", "Blue", "Green"]

/*document.getElementById("colors").addEventListener("click", function(){

  colors = colors[1]

  document.getElementById("navbar").style.background = darkMode ? "blue" : "red";


});*/
button.addEventListener("click", function(){
  
  darkMode = !darkMode

  document.body.style.color = darkMode ? "white" : "black"; //change the text color on the body, if darkmode is one the text turns white
  document.body.style.background = darkMode ? "#111111" : "#e5e5e5"; //change background color to black if darkmode
  document.getElementById("wrap").style.background = darkMode ? "#232323" : "white";
  document.getElementById("navbar").style.background = darkMode ? "#139913" : "#41c641";
  document.getElementById("navbartext").style.color = darkMode ? "#e1ffe1" : "#001400";
  button.innerHTML = darkMode ? "LightMode" : "DarkMode";
  button.style.background = darkMode ? "#191919" : "#dbdbdb";
  button.style.borderColor = darkMode ? "white" : "black";
  button.style.color = darkMode ? "white" : "black";
  console.log(darkMode ? "LightMode" : "DarkMode");

});

function getRandomColor(){
  var color = "#";
  for(i = 0; i < 6; i++){
      color+=getRandom();
  }
  function getRandom(){
      if(Math.random()>.5) return "ABCDEF"[Math.floor(Math.random()*6)];
          else return Math.floor(Math.random()*10);
  } 
  return color;
}

randomcolor.addEventListener("click", function(){
  document.getElementById("navbar").style.background = getRandomColor();
  document.getElementById("navbartext").style.color = getRandomColor();
  console.log("click");
});