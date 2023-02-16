const millisecondsEl = document.querySelector("#milliseconds")
const secondsEl = document.querySelector("#seconds")
const minutesEl = document.querySelector("#minutes")

const btnStart = document.querySelector("#btnStart")
const btnPause = document.querySelector("#btnPause")
const btnRestat = document.querySelector("#btnRestat")

btnStart.addEventListener("click", startTimer)
btnPause.addEventListener("click", pauseTimer)

let interval, milliseconds, seconds, minutes, isPaused

clearValues()

millisecondsEl.style.color = getRandomColor()
secondsEl.style.color = getRandomColor()
minutesEl.style.color = getRandomColor()

function startTimer(){
    interval = setInterval(() =>{
        if(!isPaused) {
            milliseconds += 10;

            if(milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
                millisecondsEl.style.color = getRandomColor();
                secondsEl.style.color = getRandomColor();
            }
    
            if(seconds === 60) {
                seconds = 0;
                minutes++;
                minutesEl.style.color = getRandomColor();                      
            }
    
            millisecondsEl.textContent = format(milliseconds,3);
            secondsEl.textContent = format(seconds,2);
            minutesEl.textContent = format(minutes,2);

            btnStart.style.display = "none";
            btnPause.style.display = "block";
        }
    },10) 
}

function pauseTimer(){

}

function format(time,sizeFmt){
    return time < 100 ? `${time}`.padStart(sizeFmt,"0"): time;
}

function getRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function clearValues(){
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    isPaused = false;
}