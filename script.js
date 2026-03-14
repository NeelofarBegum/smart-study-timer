let time = 1500;
let timer;

function updateDisplay(){
let minutes = Math.floor(time / 60);
let seconds = time % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

document.getElementById("timer").innerText =
minutes + ":" + seconds;
}

function startTimer(){
timer = setInterval(function(){
time--;
updateDisplay();

if(time <= 0){
clearInterval(timer);
alert("Study session finished!");
}
},1000);
}

function pauseTimer(){
clearInterval(timer);
}

function resetTimer(){
clearInterval(timer);
time = 1500;
updateDisplay();
}

updateDisplay();
