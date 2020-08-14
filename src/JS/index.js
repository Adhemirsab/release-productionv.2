import '../css/index.css'
import '../css/style.scss'
import '../icons/assets/memphis-mini-dark.png'
// function text() {
//     document.write('bb')
// }
// text()
const topDate = new Date('August 31, 2020 00:00:00 GMT+09:00');

const updateClock = (date) => {
  if(!date) return;
  let end = date.getTime();
  let now = Date.now();
  let diff = end - now;
  let days = Math.floor(diff / 86400000);
  diff = diff % 86400000
  let hours = Math.floor(diff / 3600000);
  diff = diff % 3600000;
  let minutes = Math.floor(diff / 60000);
  diff = diff % 60000;
  let seconds = Math.floor(diff / 1000);
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

// se llama a la función una vez para que pinte el resultado inmediatamente
updateClock(topDate);
// se hace uso de setInterval para cambiar el contador cada 1 segundo
setInterval(updateClock, 1000, topDate)