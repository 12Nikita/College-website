/* Q15.Create a clock: */

function displayTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  console.log(hours + ':' + minutes + ':' + seconds);
}

setInterval(displayTime, 1000);

/* Output:
14:37:42
14:37:43
14:37:44
... */