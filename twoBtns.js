var myInterval = -1;
var theTime = document.getElementById("clock");

function startBtn () {
  if (myInterval == -1) {
    myInterval = setInterval(function () {
      var d = new Date();
      /* Define variables that get the current time and date. */
      var hours = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds();

      if (hours > 12) {
      hours = hours - 12;
      }

      hours = timeData(hours);
      mins = getTime(mins);
      secs = getTime(secs); 

      function getTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
      }

      function timeData(n) {
      if (n == 0) {
        n = "12";
      }
      return n;
      } 
      theTime.innerHTML = hours + ":" + mins + ":" + secs;
    }, 1000);
  }
}

function stopBtn () {
  if (myInterval != -1) {
    clearInterval(myInterval);
    myInterval = -1;
  }
}

startBtn();

document.getElementById("start-btn").onclick = function() {
  startBtn();
}
document.getElementById("stop-btn").onclick = function () {
  stopBtn();
}