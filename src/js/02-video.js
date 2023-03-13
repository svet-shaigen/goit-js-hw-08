
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const CURRENT_TIME_KEY = "videoplayer-current-time";

    player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(event) {
  let seconds = event.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}

const currentVideoTime = localStorage.getItem(CURRENT_TIME_KEY);
if (currentVideoTime) {
  player.setCurrentTime(currentVideoTime);
}


