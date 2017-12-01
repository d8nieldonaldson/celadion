console.log('user actions js loaded');


goFullscreenBtn.addEventListener('click', (e) => {
    fullscreenContainer.classList.remove('hidden');
    countdownRest(restDuration);
    goFullscreen(fullscreenContainer);
}, false);
  
exitFullscreenBtn.addEventListener('click', (e) => {
    fullscreenContainer.classList.add('hidden');
    exitFullscreen();
}, false);

resetTimerBtn.addEventListener('click', (e) => {
    console.log('reset button clicked');
    countdownFull(fullDuration);
});




