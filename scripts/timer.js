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
      countdownFull(fullDuration);
    }
  },1000)
};


const countdownFull = (fullDur) => {
  let fullInterval = setInterval(() => {
    timerContainer.classList.remove('hidden');
    buttonsContainer.classList.add('hidden');
    clearText(messageContainer);
    fullDur--;
    timer.textContent = `${formatTime(fullDur)}`;
    if(fullDur === 0){
      clearInterval(fullInterval);
      timerContainer.classList.add('hidden');
      clearText(timer);
      buttonsContainer.classList.remove('hidden');
      messageContainer.textContent = messageText;
      countdownRest(restDuration);
    }
  }, 1000)
}

// populate timer
timer.textContent = `${formatTime(fullDuration)}`;
countdownFull(fullDuration);