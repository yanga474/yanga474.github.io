$("body").css("background-color","black");

var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");
var theThing2 = document.querySelector("#thing2");
var theThing3 = document.querySelector("#thing3");

container.addEventListener("click", function(event) {
  var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
  var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
  // in case of a wide border, the boarder-width needs to be considered in the formula above
  theThing.style.left = xPosition + "px";
  theThing.style.top = yPosition + "px";
  theThing2.style.left = xPosition + "px";
  theThing2.style.top = yPosition + "px";
  theThing3.style.left = xPosition + "px";
  theThing.style.top = yPosition + "px";
  
  

});

  