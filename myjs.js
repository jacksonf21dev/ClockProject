/* Function that obtains and prints the current time while constantly updating. */
function showTime (){
  /* var d uses the "new Date()" method to store the current time to the millisecond. */
  var d = new Date();
  /* Define variables that get the current time and date. */
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  hours = timeData(hours);
  mins = getTime(mins);
  secs = getTime(secs);

  document.getElementById("clock").innerHTML = hours+": "+mins+": "+secs;

  var timeInterval = setInterval(showTime,1000);
}

function getTime (i) {
  if (i < 10) {i = "0" + i};
  return i;
} 
function timeData(n) {
  if (n == 0) {n = "12"};
  return n;
}



