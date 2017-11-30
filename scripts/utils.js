console.log('utils js loaded');

  
//https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

const formatTime = (s) => {return(s-(s%=60))/60+(9<s?':':':0')+s};

const clearText = (el) => {
    el.textContent = '';
}

const populateText = (el, msg) => {
    el.textContent = msg;
}
  
