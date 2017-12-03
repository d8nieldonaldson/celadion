console.log('timer js loaded');

const timerContainer = document.querySelector('.js-timer-container');
const timer = document.querySelector('.js-timer');
const messageContainer = document.querySelector('.js-message');
const buttonsContainer = document.querySelector('.js-buttons-container');
const messageText = `Would you like to take a break?`;
const fullDuration = 6;
const restDuration = 3;

// app

const countdownRest = (dur) => {
  let interval = setInterval(() =>{
    dur--;
    console.log(formatTime(dur));
    if(dur === 0){
      clearInterval(interval);
      console.log('done');
      exitFullscreen();
      countdownFull(fullDuration);
    }
  },1000)
};

var fullInterval;

const countdownFull = (fullDur) => {
  fullInterval = setInterval(() => {
    buttonsContainer.classList.add('hidden');
    timerContainer.classList.remove('hidden');
    fullDur--;
    timer.classList.remove('hidden');
    timer.textContent = `${formatTime(fullDur)}`;
    if(fullDur === 0){
      clearInterval(fullInterval);
      timerContainer.classList.add('hidden');
      buttonsContainer.classList.remove('hidden');
      messageContainer.textContent = messageText;
      //countdownRest(restDuration);
    }
  }, 1000)
}
/*
const config = {
  dur: 6
};

const countdownObj = {
  countdown: setInterval((dur) =>{
    if(dur){dur--;}else{dur = 0}   
    return console.log(dur);
    }, 1000)
};

const testObj = {
  method1: (msg) => {
    console.log(msg);
  }
};

const newObj = {};
newObj.method = setInterval(;
  },1000)
  
  return console.log(dur);
}
*/

// populate timer
timer.textContent = `${formatTime(fullDuration)}`;
countdownFull(fullDuration);