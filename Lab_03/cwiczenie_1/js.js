let timer = document.querySelector('.timerContent');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

let sec = 0;
let min = 0;
let timerId = null;

start.addEventListener('click', function(){
    if (timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,1000);
});

stop.addEventListener('click', function(){
    clearInterval(timerId);
});

reset.addEventListener('click', function(){
    clearInterval(timerId);
    sec = 0;
    min = 0;
    timer.innerHTML = '0s';
});


function startTimer(){
    sec++;
    if (sec==60){
        sec = 0;
        min++;
    }
    if (min==0){
        timer.innerHTML = sec + "s";
    }
    else {
        timer.innerHTML = min + "min" + sec + "s";
    }
    
}