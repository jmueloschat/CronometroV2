const millisecondsEl = document.querySelector("#milliseconds")
const secondsEl = document.querySelector("#seconds")
const minutesEl = document.querySelector("#minutes")

const btnStart   = document.querySelector("#btnStart")
const btnPause   = document.querySelector("#btnPause")
const btnResume  = document.querySelector("#btnResume")
const btnRestart = document.querySelector("#btnRestart")

let interval, milliseconds, seconds, minutes, isPaused

clearValues()

btnStart.addEventListener("click", startTimer)
btnPause.addEventListener("click", pauseTimer)
btnResume.addEventListener("click", resumeTimer)
btnRestart.addEventListener("click", restartTimer)

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
    
            updateElements();
        }
    },10) 
    btnStart.style.display = "none";
    btnPause.style.display = "block";    
}

function pauseTimer(option){
    isPaused = true;
    btnResume.style.display = "block";
    btnPause.style.display = "none";    
}

function resumeTimer(option){
    isPaused = false;
    btnResume.style.display = "none";
    btnPause.style.display = "block";    
}

function restartTimer(){
    clearValues(); 
    btnStart.style.display = "block";   
    btnPause.style.display = "none";   
    btnResume.style.display = "none";   
}

function format(time,sizeFmt){
    return time < 100 ? `${time}`.padStart(sizeFmt,"0"): time;
}

function getRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function updateElements(){
    millisecondsEl.textContent = format(milliseconds,3);
    secondsEl.textContent = format(seconds,2);
    minutesEl.textContent = format(minutes,2);
}

function clearValues(){
    isPaused = false;

    clearInterval(interval);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    updateElements();
    
    millisecondsEl.style.color = getRandomColor();
    secondsEl.style.color = getRandomColor();
    minutesEl.style.color = getRandomColor();
}