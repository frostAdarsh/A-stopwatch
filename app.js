let [seccond, minutes, hours] = [0, 0, 0];

let dispalyTime = document.getElementById("dispalyTime");

let timer = null;
function stopwatch() {
  seccond++;
  if (seccond == 60) {
    seccond = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let  h = hours < 10 ? '0' + hours : hours
  let  m = minutes < 10 ? '0' +  minutes: minutes
  let  s = seccond < 10 ? '0' + seccond : seccond
  dispalyTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(stopwatch, 1000);
}

function watchStop(){
    clearInterval(timer)
}
function watchReset(){
    clearInterval(timer);
    [seccond,minutes,hours] = [0,0,0]
    dispalyTime.innerHTML = '00:00:00'
}