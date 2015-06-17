var main = function() {
  var src = "images/clock/emptyClock.png";
  $("#newQuestion").animate({ left: '+=38.75%', top: '+=37.25%', height: '0%', width: '0%'}, 0);
  $("#clock img").hide().prop("src", src).fadeIn(3000);


  $("#next").click(function() {
    nextQuestion();
  });

  $("#clock").click(function() {
    shrinkQuestion();
  })

  function nextQuestion() {
    $("#quiz").animate({left: '-100%'}, 1500, function() {
      $("#quiz").animate({height: '0%', width: '0%'}, 0, function() {
        for (var i = 0; i < 10; i++) {
          $("#newQuestion").animate({left: '-=3.875%', top: '-=3.725%', height: '+=8.5%', width: '+=7.5%'}, 50);
        }
      });
    });
  }

  function shrinkQuestion() {
    $("#quiz").animate({left: '0px'}, 0, function() {
      $("#quiz").animate({height: '75%', width: '70%'}, 0, function() {
        $("#newQuestion").animate({ left: '+=38.75%', top: '+=37.25%', height: '0%', width: '0%'}, 0);
      });
    });
  }

}



$(document).ready(main);
