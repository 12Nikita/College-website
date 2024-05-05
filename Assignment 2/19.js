/* Q19.Convert minutes to hours and minutes: */

function timeConvert(minutes) {
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;
  return minutes + ' minutes = ' + hours + ' hour(s) and ' + remainingMinutes + ' minute(s).';
}

console.log(timeConvert(200));

/* Output:
200 minutes = 3 hour(s) and 20 minute(s). */

