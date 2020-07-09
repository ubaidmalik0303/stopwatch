var min = 00;
var sec = 0;
var milisec = 0;
var minmeter = document.getElementById('minute');
var secmeter = document.getElementById('second');
var milisecmeter = document.getElementById('milisecond');
var interval;

function timer(){
    milisec++;
    milisecmeter.innerHTML = milisec;
    if(milisec >= 100){
        sec++;
        secmeter.innerHTML = sec;
        milisec = 0
    } else if(sec >= 60){
        min++;
        sec = 0;
        minmeter.innerHTML = min;
    }
}

function start(){
    interval = setInterval(timer , 10);
    document.getElementById('start-btn').disabled = true;
}

function stop(){
    clearInterval(interval);
    document.getElementById('start-btn').disabled = false;
}

function reset(){
    min = 0;
    sec = 0;
    milisec = 0;
    minmeter.innerHTML = 00;
    secmeter.innerHTML = 00;
    milisecmeter.innerHTML = 00;
    stop();
}

function record(){
    var a = document.getElementById('record-box');
    var b = "<ul><li>";
    var c = "<li></ul>";
    var d = "<h2>" + b + min + " : " + sec + " : " + milisec + c + "</h2>";
    a.innerHTML += d;
}