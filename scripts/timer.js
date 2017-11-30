console.log('timer js loaded');

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
    buttonsContainer.classList.add('hidden');
    clearText(messageContainer);
    fullDur--;
    timer.textContent = `Time remaining until next break ${formatTime(fullDur)}`;
    if(fullDur === 0){
      clearInterval(fullInterval);
      clearText(timer);
      buttonsContainer.classList.remove('hidden');
      messageContainer.textContent = messageText;
      countdownRest(restDuration);
    }
  }, 1000)
}

// populate timer
timer.textContent = `Time remaining until next break ${formatTime(fullDuration)}`;
countdownFull(fullDuration);