import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const player = new Player("vimeo-player");


function playerTime(event) {
    const eventTime = event.seconds;
    localStorage.setItem("videoplayer-current-time", eventTime);
    setTime();
};

player.on('timeupdate', throttle(playerTime,1000));
window.addEventListener('DOMContentLoaded', setTime);

function setTime() {
    const getStorage = localStorage.getItem("videoplayer-current-time");
    if (getStorage) {
    player.setCurrentTime(getStorage);
  }
} 

