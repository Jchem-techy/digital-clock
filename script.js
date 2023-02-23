const body = document.querySelector(`#clock`);
const clock = function showTime() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let mins = newDate.getMinutes();
  let secs = newDate.getSeconds();

  mins = addZero(mins);
  secs = addZero(secs);
  let after = when(hours);
  hours = timeZone(hours);

  // console.log(hours);
  body.innerText = `${hours}:${mins}:${secs}:${after}`;
};
function addZero(time) {
  if (time < 10) {
    time = `0` + time;
  }
  return time;
}
function when(time) {
  let after = `AM`;
  if (time <= 12) {
    after = after;
  } else if (time > 12) {
    after = `PM`;
  }
  return after;
}
function timeZone(time) {
  if (time > 12) {
    time = time - 12;
  } else if (time < 12) {
    time = time + 12;
  }
  return time;
}
setInterval(clock, 1000);
