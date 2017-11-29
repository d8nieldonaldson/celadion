const timer = document.querySelector('.js-timer');
const messageContainer = document.querySelector('.js-message');
const messageText = `Would you like to take a break?`;
const fullDuration = 12;
const restDuration = 2;

//function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

//https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

const formatTime = (s) => {return(s-(s%=60))/60+(9<s?':':':0')+s};

const clearText = (el) => {
  el.textContent = '';
}

const populateText = (el, msg) => {
  el.textContent = msg;
}


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
    clearText(messageContainer);
    fullDur--;
    timer.textContent = `Time remaining until next break ${formatTime(fullDur)}`;
    if(fullDur === 0){
      clearInterval(fullInterval);
      clearText(timer);
      messageContainer.textContent = messageText;
      countdownRest(restDuration);
    }
  }, 1000)
}

// populate timer
timer.textContent = `Time remaining until next break ${formatTime(fullDuration)}`;
countdownFull(fullDuration);


const fullscreenEl = document.querySelector('.js-fullscreen');

const goFullscreen = (el) => {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  }
}

goFullscreen(fullscreenEl);