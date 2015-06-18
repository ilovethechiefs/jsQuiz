var main = function() {
  var src = "images/clock/emptyClock.png";
  $("#newQuestion").animate({opacity: "1"},0);
  $("#newQuestion").animate({ left: '+=38.75%', top: '+=37.25%', height: '0%', width: '0%'}, 0);
  $("#clock img").hide().prop("src", src).fadeIn(1000);


  $("#next").click(removeCurrentQuestion);

  function removeCurrentQuestion() {
    $("#answerList li:nth-child(1)").animate({left: '-110%'}, 800);
    $("#answerList li:nth-child(2)").animate({left: '-110%'}, 1000);
    $("#answerList li:nth-child(3)").animate({left: '-110%'}, 1200);
    $("#answerList li:nth-child(4)").animate({left: '-110%'}, 1000);
    $("#answerList li:nth-child(5)").animate({left: '-110%'}, 800);
    $("#questionDiv").animate({opacity: "0"}, 1000);
    $("#answerList").animate({opacity: "0"}, 1000);
    nextQuestion();
  }

  function addNewQuestion() {
    $("#answerList li:nth-child(1)").animate({left: '0%'}, 0);
    $("#answerList li:nth-child(2)").animate({left: '0%'}, 0);
    $("#answerList li:nth-child(3)").animate({left: '0%'}, 0);
    $("#answerList li:nth-child(4)").animate({left: '0%'}, 0);
    $("#answerList li:nth-child(5)").animate({left: '0%'}, 0);
    $("#questionDiv").animate({opacity: "1"}, 0);
    $("#answerList").animate({opacity: "1"}, 0);
  }

  function nextQuestion() {
    var callback = function(){};
    var delayTime = 1000;

    for (var i = 0; i < 10; i++) {
      if (i == 9) {
        callback = shrinkQuestionDelay();
      }
      $("#newQuestion").delay(delayTime).animate({left: '-=3.875%', top: '-=3.725%', height: '+=8.5%', width: '+=7.5%'}, 50, callback);
      delayTime = 0;
    };
  };

  function shrinkQuestionDelay() {
    setTimeout(shrinkQuestion, 4000);
  }

  function shrinkQuestion() {
    addNewQuestion();

    var questionPos = $("#questionDiv").offset();
    questionPos.left += 3;
    questionPos.top += 3;
    var questionWidth = $("#questionDiv").css("width");
    var questionHeight = $("#questionDiv").css("height");

    $("#newQuestion").animate({
      width: questionWidth,
      height: questionHeight,
      left: questionPos.left,
      top: questionPos.top
    }, 1000, newQuestionReset);
  }

  function newQuestionReset() {
    $("#newQuestion").animate({width: "0%", height: "0%"}, 0, function() {
      $("#newQuestion").animate({top: "51.25%", left: "39.25%"}, 0);
    });
  }
}



$(document).ready(main);
