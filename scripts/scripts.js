const timer = document.querySelector('.js-timer');
const messageContainer = document.querySelector('.js-message');
const goFullscreenBtn = document.querySelector('.js-go-fullscreen-btn');
const exitFullscreenBtn = document.querySelector('.js-exit-fullscreen-btn');
const fullscreenContainer = document.querySelector('.js-fullscreen-container');



const messageText = `Would you like to take a break?`;


const fullDuration = 12;
const restDuration = 2;


// utilities
  //function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

  //https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds

const formatTime = (s) => {return(s-(s%=60))/60+(9<s?':':':0')+s};


const launchIntoFullscreen = (element) => {
  if(element.requestFullscreen) {
    element.requestFullscreen();
    console.log('no prefix');
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
    console.log('webkit');
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// apply to document, not the element
const exitFullscreen = () => {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

const clearText = (el) => {
  el.textContent = '';
}

const populateText = (el, msg) => {
  el.textContent = msg;
}

// end Utilities

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


goFullscreenBtn.addEventListener('click', (e) => {
  fullscreenContainer.classList.remove('hidden');
  launchIntoFullscreen(fullscreenContainer);
}, false)

exitFullscreenBtn.addEventListener('click', () => {
  fullscreenContainer.classList.add('hidden');
  exitFullscreen();
}, false)

if(document.webkitCurrentFullScreenElement == fullscreenContainer){
  console.log('fullscreen');
}


//https://stackoverflow.com/questions/14549547/fullscreenchange-event-not-work

// Note that the API is still vendor-prefixed in browsers implementing it
document.addEventListener("webkitfullscreenchange mozfullscreenchange fullscreenchange", function( event ) {
  let isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
      // The event object doesn't carry information about the fullscreen state of the browser,
      // but it is possible to retrieve it through the fullscreen API
      if ( isFullScreen ) {
          
          // The target of the event is always the document,
          // but it is possible to retrieve the fullscreen element through the API
          console.log('document.fullscreenElement');
      }
  
  });


  document.addEventListener('webkitfullscreenchange', function(e){
    console.log('ksjf;asfjk;afj' + document.webkitCurrentFullScreenElement);
    if(document.webkitCurrentFullScreenElement == fullscreenContainer){
      console.log('right el');
    }
  });