var theTime = document.getElementById("clock");
var button = document.getElementById("action-btn"); 
var myInterval = -1;

button.addEventListener("click", function(event) {
if (myInterval == -1) {
  button.innerHTML="Pause";
  myInterval = setInterval(function () {
  
  var d = new Date();
  /* Define variables that get the current time and date. */
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();

  if (hours > 11) {
    document.getElementById("am-pm").innerHTML = " P.M.";
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  hours = timeData(hours);
  mins = getTime(mins);
  secs = getTime(secs);

  theTime.innerHTML = hours + ":" + mins + ":" + secs; 

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
  
  }, 1000); 
  
  } else {
    clearInterval(myInterval);
    myInterval = -1;
    button.innerHTML ="Start";
  }
})


  
