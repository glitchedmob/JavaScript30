// Chache DOM elements
var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");


function updateClock() {
  var time = new Date;
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours();

  var secondPercentage = ((seconds / 60) * 360) + 90;
  var minutePercentage = ((minutes / 60) * 360) + 90;
  var hourPercentage = ((hours / 12) * 360) + 90;

  
  secondHand.style.transform = "rotate(" + secondPercentage + "deg)";
  minuteHand.style.transform = "rotate(" + minutePercentage + "deg)";
  hourHand.style.transform = "rotate(" + hourPercentage + "deg)";

}

setInterval(updateClock, 1000);