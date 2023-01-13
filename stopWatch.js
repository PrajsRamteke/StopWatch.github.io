var displayMin = document.getElementById("min");
var displaySec = document.getElementById("sec");
var displayTens = document.getElementById("tens");

var startbtn = document.getElementById("Start");
var stopbtn = document.getElementById("Stop");
var resetbtn = document.getElementById("Reset");

var seconds = 00;
var tens = 00;
var minutes = 00;
var interval;

function startTimer(){
    tens++;

    if(tens<9){
      displayTens.innerHTML = "0" + tens;
    }
    if(tens>9){
      displayTens.innerHTML = tens;
    }

    if(tens>99){
      seconds++;
      displaySec.innerHTML = "0"+ seconds;
      tens = 0;
      displaySec.innerHTML = "0" + 0;
    }
    if(seconds>0){
      displaySec.innerHTML = seconds;
    }

    if(seconds>59){
        seconds = 0;
        minutes++;
        displayMin.innerHTML = "0"+ minutes;    
      }
}

startbtn.onclick = function() {
  interval = setInterval(startTimer,10); // 1000ms = 1s
}

stopbtn.onclick = function(){
  clearInterval(interval);
}
resetbtn.onclick = function(){
  clearInterval(interval);
  minutes = 00;
  seconds = "00";
  tens = "00";
  displayTens.innerHTML = minutes;
  displaySec.innerHTML = seconds;
  displayTens.innerHTML = tens;
}
