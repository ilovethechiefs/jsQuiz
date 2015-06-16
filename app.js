var main = function() {
  var src = "images/clock/emptyClock.png";
  $("#clock img").hide().prop("src", src).fadeIn(3000);
}

$(document).ready(main);
