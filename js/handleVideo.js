const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');

play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);

function handlePlay() {
    video.play();
    play.hidden = true;
    pause.hidden = false;
}

function handlePause() {
    video.pause();
    pause.hidden = true;
    play.hidden = false;
}