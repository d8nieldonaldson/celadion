console.log('utils js loaded');
const startTimerBtn = document.querySelector('.js-start-timer-btn');
const stopTimerBtn = document.querySelector('.js-stop-timer-btn');
const skipRestBtn = document.querySelector('.js-skip-rest-btn');

  
//https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

const formatTime = (s) => {return(s-(s%=60))/60+(9<s?':':':0')+s};

const clearText = (el) => {
    el.textContent = '';
}

const populateText = (el, msg) => {
    el.textContent = msg;
}
  
