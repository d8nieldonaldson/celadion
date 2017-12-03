console.log('user actions js loaded');

startTimerBtn.addEventListener('click', (e) => {
    startTimerBtn.classList.add('hidden');
    stopTimerBtn.classList.remove('hidden');
    countdownFull(fullDuration);
});

stopTimerBtn.addEventListener('click',  (e) => {
    stopTimerBtn.classList.add('hidden');
    startTimerBtn.classList.remove('hidden');
    clearInterval(fullInterval);
    timer.classList.add('hidden');
    timer.textContent = '';
})


startRestBtn.addEventListener('click', (e) => {
    fullscreenContainer.classList.remove('hidden');
    countdownRest(restDuration);
    goFullscreen(fullscreenContainer);
}, false);
  
exitFullscreenBtn.addEventListener('click', (e) => {
    fullscreenContainer.classList.add('hidden');
    exitFullscreen();
}, false);

skipRestBtn.addEventListener('click', (e) => {
    console.log('skip rest clicked');
    countdownFull(fullDuration);
});






