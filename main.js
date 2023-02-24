'use strict';

//VARIABLES

const speedBar = document.querySelector('.speed-bar');
const speedBarValue = document.querySelector('.speed-bar-value');
const videoEl = document.querySelector('.video');

//FUNCTIONS

function handleMouseMove(ev) {
    //Mouse position
    const y = ev.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    //Update CSS height attribute in %
    const height = Math.round(percent * 100) + '%';
    speedBarValue.style.height = height;
    //Update video rate
    const playbackRate = percent * (max - min) + min;
    speedBarValue.textContent = playbackRate.toFixed(2) + 'x';
    videoEl.playbackRate = playbackRate;
}


//EVENT LISTENERS
speedBar.addEventListener('mousemove', handleMouseMove);