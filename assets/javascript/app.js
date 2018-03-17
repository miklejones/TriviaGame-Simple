var questionsGuessed = 0;
var questionsCorrect = 0;
var questionsWrong = 0;
var unansweredQuestions = 0;
var questionCounter = 0;
var theClock;
var counter = 30;

var triviaQuestions = [{
  question: 'What color is Ms.Lippys Car?',
  answerList: ['red', 'blue', 'white', 'green'],
  answerIndex: 'D. green'
}, {
  question: 'Who rules?',
  answerList: ['McGuire', 'O-Doyle', 'King', 'Billy'],
  answerIndex: 'B. O-Doyle'
}, {
  question: 'What is the questions?',
  answerList: ['a', 'b', 'c', 'd'],
  answerIndex: 1
}, {
  question: 'What is the questions?',
  answerList: ['a', 'b', 'c', 'd'],
  answerIndex: 1
}, {
  question: 'What is the questions?',
  answerList: ['a', 'b', 'c', 'd'],
  answerIndex: 1
}];

$(document).ready(function () {

  //Show start screen w/button that hides
  function startScreen() {
    $('.main-content').html('<div class="start">Start</div>');
  };

  startScreen();

  //Timer function
  function {
    theClock = setInterval(timerCount, 1000);
    function timerCount() {
      if (counter < 1) {
        clearInterval(theClock);
        generateLossDueToTimeOut();
      }
      if (counter > 0) {
        counter--;
      }
      $(".html(counter);
    }
  }

  //Show question and answers function
  function showQuestions() {
    $('.main-content').html("<p class='text-center'>Time Remaining: <span class=30</span></p> <p class='text-center'>" + triviaQuestions[questionCounter].question + "</p> <p class='answer'>A. " + triviaQuestions[questionCounter].answerList[0] + "</p><p class='answer'>B. " + triviaQuestions[questionCounter].answerList[1] + "</p><p class='answer'>C. " + triviaQuestions[questionCounter].answerList[2] + "</p><p class='answer'>D. " + triviaQuestions[questionCounter].answerList[3] + "</p>");
  };

  //What to do after each round
  function next() {
    if (questionCounter < 4) {
      questionCounter++;
      showQuestions();
      counter = 30;
    ;
    }
    else {
      generateFinalScreen();
    }
  }

  //Win when correct answer is clicked
  function generateWin() {
    questionsCorrect++;
    $(".main-content").html("<p class='text-center'>Time Remaining: <span class=" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + triviaQuestions[questionCounter].answerIndex + "</p>");
    setTimeout(next, 4000);  //  change to 4000 or other amount
  }

  function generateLoss() {
    questionsWrong++;
    $(".main-content").html("<p class='text-center'>Time Remaining: <span class=" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + triviaQuestions[questionCounter].answerIndex + "</p>");
    setTimeout(next, 4000); //  change to 4000 or other amount
  }


  //Loss when clock times out
  function generateLossDueToTimeOut() {
    unansweredQuestions++;
    $(".main-content").html("<p class='text-center'>Time Remaining: <span class=" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + questionsCorrect[questionCounter] + "</p>");
    setTimeout(next, 4000);  //  change to 4000 or other amount
  };

  function generateFinalScreen() {
    $(".main-content").html("<p class='text-center'>Time Remaining: <span class=" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + questionsCorrect + "</p>" + "<p>Wrong Answers: " + questionsWrong + "</p>" + "<p>Unanswered: " + unansweredQuestions + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>");
  }

  //On start button click display questions
  $('.start').click(function () {
    $('.start').hide();
    showQuestions();
  ;
  });


  //When clicking answer either right or wrong
  $("body").on("click", ".answer", function (event) {
    selectedAnswer = $(this).text();
    console.log(selectedAnswer);

    if (selectedAnswer === triviaQuestions[questionCounter].answerIndex) {
      clearInterval(theClock);
      generateWin();
    }
    else {
      clearInterval(theClock);
      generateLoss();
    }
  });

});
