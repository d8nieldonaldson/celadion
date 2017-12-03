console.log('fullscreen js loaded');

const startRestBtn = document.querySelector('.js-start-rest-btn');
const exitFullscreenBtn = document.querySelector('.js-exit-fullscreen-btn');
const fullscreenContainer = document.querySelector('.js-fullscreen-container');

let setBrowser;

if(document.webkitCurrentFullScreenElement == fullscreenContainer){
    console.log('fullscreen');
  }


const goFullscreen = (element) => {
    if(element.requestFullscreen) {
      element.requestFullscreen();
      console.log('no prefix fullscreen');
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
      console.log('moz fullscreen')
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
      console.log('webkit fullscreen');
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
      console.log('ms fullscreen');
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
    } else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    countdownFull(fullDuration);
  }
  
 
document.addEventListener('fullscreenchange', (e) => {
    if(!document.fullscreenElement){
      console.log('escaping fullscreen no prefix');
      fullscreenContainer.classList.add('hidden');
      countdownFull(fullDuration);
      
    }
}, false);
  
document.addEventListener('webkitfullscreenchange', (e) =>{
      if(!document.webkitCurrentFullScreenElement){
      console.log('escaping fullscreen webkit');
      fullscreenContainer.classList.add('hidden');
      countdownFull(fullDuration);
    }
}, false);
  
document.addEventListener('mozfullscreenchange', (e) => {
    if(!document.mozFullScreenElement){
      console.log('escaping fullscreen moz');
      fullscreenContainer.classList.add('hidden');
      countdownFull(fullDuration);
    }
}, false);


  //https://stackoverflow.com/questions/14549547/fullscreenchange-event-not-work
  
  /*
  
  
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
  

    ['mousemove', 'touchmove'].map(function(e) {
      window.addEventListener(e, mouseMoveHandler);
    });

  

  ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange'].map(function(e) {
    document.addEventListener(e, fullscreenChangeEvent);
  });

  

  ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange'].forEach(function(e){
    document.addEventListener(e,fullscreenChangeEvent,false);
  });
  
  
  */