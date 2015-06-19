var sampleQuestion = [

  {question: "Who is Prime Minister of the United Kingdom?",
  choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair", "Nicki Minaj"],
  correctAnswer:0},

  {question: "What is the capital of Missouri?",
  choices: ["Springfield", "Saint Louis", "Jefferson City", "Joplin", "Chicago"],
  correctAnswer:2},

  {question: "Who let the dogs out?",
  choices: ["Woof woof woof", "Bark bark bark", "Arf arf arf", "The Baja Men", "Rous"],
  correctAnswer: 4}

  ];

var clockSrc = "images/clock/emptyClock.png";

var questionNumber = -1;

var main = function() {

  $("#clock img").prop("src", clockSrc).animate({opacity: "1"}, 1000);
  nextQuestion();
  $("#next").click(removeCurrentQuestion);
  $(".answers").click(function() {
    for (var i = 0; i < 5; i++){
      if (i == sampleQuestion[questionNumber].correctAnswer) {
        $("#answerList li:nth-child("+(i+1)+")").css("background", "green");
      }
      else {
        $("#answerList li:nth-child("+(i+1)+")").css("background", "red");
      }
    }
  })
}

$(document).ready(main);

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

function newQuestionReset() {
  $("#newQuestion").html("")
  $("#newQuestion").animate({width: "0%", height: "0%"}, 0, function() {
    $("#newQuestion").animate({top: "51.25%", left: "39.25%"}, 0);
  });
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
  setTimeout(function(){
    questionNumber++;
    $("#newQuestion").html("<p>" + sampleQuestion[questionNumber].question + "</p>");
  }, 2000);
  setTimeout(shrinkQuestion, 4000);
}

function shrinkQuestion() {
  returnAnswers();
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

  $("#newQuestion p").animate({
    top: "0%"
  }, 1000)

}

function returnAnswers() {
  $(".answers").css("background", "white");
  $("#answerList li:nth-child(1)").animate({left: '0%'}, 0);
  $("#answerList li:nth-child(2)").animate({left: '0%'}, 0);
  $("#answerList li:nth-child(3)").animate({left: '0%'}, 0);
  $("#answerList li:nth-child(4)").animate({left: '0%'}, 0);
  $("#answerList li:nth-child(5)").animate({left: '0%'}, 0);

}

function addNewQuestion() {
  $("#questionDiv").html("<p>" + sampleQuestion[questionNumber].question + "</p>");
  for (var i = 0; i < 5; i++) {
    $("#answerList li:nth-child("+ (i+1) +")").html("<p>" + sampleQuestion[questionNumber].choices[i] + "</p>");
  }
  $("#questionDiv").animate({opacity: "1"}, 0);
  $("#answerList").animate({opacity: "1"}, 0);
}
