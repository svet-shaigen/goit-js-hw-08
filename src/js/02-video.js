
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

/////////////////////////////////////////////////////////////////////////////////////////
// const input = document.querySelector('#volume');
// const span = document.querySelector('.output');

// const VOLUME_KEY = 'volume-key';

// // console.log(input.value)


// input.addEventListener('input', onChangeVolume);

// function onChangeVolume() {
//   // console.log(input.value)
//   span.textContent = input.value
//   localStorage.setItem(VOLUME_KEY, input.value);
// }
//  const volume = localStorage.getItem(VOLUME_KEY)
// console.log(volume)


// if(volume) {
//   span.textContent = volume
//   input.value = volume
// }else {
//   span.textContent = input.value
// }

