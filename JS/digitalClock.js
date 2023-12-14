function elementById(id) {
  const element = document.getElementById(id);

  if (element) {
    return element;
  } else {
    throw Error(" Please Double check  element id ");
  }
}

const HOUR_EL = elementById("hour");
const MINUTE_EL = elementById("minute");
const SECOND_EL = elementById("second");
const AMPM_EL = elementById("ampm");

function el_Text(el, text) {
  el.textContent = text;
}

function updateClock() {
  let time = new Date();
  let clock = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
    ampm: "AM",
  };

  if (clock.hour > 12) {
    clock.hour = (clock.hour - 12);
    clock.ampm = "PM";
  }

  //   add zero to times
  clock.hour = clock.hour < 10 ? "0" + clock.hour : clock.hour;
  clock.minute = clock.minute < 10 ? "0" + clock.minute : clock.minute;
  clock.second = clock.second < 10 ? "0" + clock.second : clock.second;
 

  //   time updates
  el_Text(HOUR_EL, clock.hour);
  el_Text(MINUTE_EL, clock.minute);
  el_Text(SECOND_EL, clock.second);
  el_Text(AMPM_EL, clock.ampm);
}
// set interval
setInterval(updateClock, 1000);
