var questionsGuessed = 0;
var questionsCorrect = 0;
var questionsWrong = 0;
var unansweredQuestions = 0;
var questionCounter = 0;
var theClock;
var counter = 30;

var triviaQuestions = [{
  question: 'What color is Ms.Lippys Car?',
  answerList: ['Red', 'Blue', 'White', 'Green'],
  answerIndex: 'D. Green',
  pic: 'assets/images/ms-lippy.gif'
}, {
  question: 'Who rules?',
  answerList: ['McGuire', "O'Doyle", 'King', 'Billy'],
  answerIndex: "B. O'Doyle",
  pic: 'assets/images/odoyle-rules.gif'

}, {
  question: 'Clorophyll? More like...',
  answerList: ['Doraville', 'Snorophyll', 'Borophyll', 'Chlorophyllum Molybdites'],
  answerIndex: 'C. Borophyll',
  pic: 'assets/images/borophyll.gif'

}, {
  question: "You ain't cool unless you what?",
  answerList: ['Graduate school', 'Catch the penguin', 'Pee your pants', 'Date your teacher'],
  answerIndex: 'C. Pee your pants',
  pic: 'assets/images/miles-davis.gif'

}, {
  question: 'What did Ed call the shit?',
  answerList: ['Turd', 'Crap', 'Doo doo', 'Poop'],
  answerIndex: 'D. Poop',
  pic: 'assets/images/shit-poop.gif'
}];

$(document).ready(function () {

  //Show start screen w/button that hides
  function startScreen() {
    $('.main-content').html('<div class="start">Start</div>');
  };

  startScreen();

  //Timer function
  function timer() {
    theClock = setInterval(timerCount, 1000);
    function timerCount() {
      if (counter < 1) {
        clearInterval(theClock);
        generateLossDueToTimeOut();
      }
      if (counter > 0) {
        counter--;
      }
      $(".timer").html(counter);
    }
  }

  //Show question and answers function
  function showQuestions() {
    $('.main-content').html("<p class='text-center'>Time Remaining: <span class='timer'>30</span></p> <p class='text-center'>" + triviaQuestions[questionCounter].question + "</p> <p class='answer'>A. " + triviaQuestions[questionCounter].answerList[0] + "</p><p class='answer'>B. " + triviaQuestions[questionCounter].answerList[1] + "</p><p class='answer'>C. " + triviaQuestions[questionCounter].answerList[2] + "</p><p class='answer'>D. " + triviaQuestions[questionCounter].answerList[3] + "</p>");
  };

  //What to do after each round
  function next() {
    if (questionCounter < 4) {
      questionCounter++;
      showQuestions();
      counter = 30;
      timer();
    }
    else {
      generateFinalScreen();NB
    }
  }

  //Win when correct answer is clicked
  function generateWin() {
    questionsCorrect++;
    $(".main-content").html("<p class='text-center '>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + triviaQuestions[questionCounter].answerIndex + "</p>"+'<img src="' + triviaQuestions[questionCounter].pic + '" class="text-center answer-gifs" alt="">' );
    setTimeout(next, 6000);  //  change to 4000 or other amount
  }

  function generateLoss() {
    questionsWrong++;
    $(".main-content").html("<p class='text-center '>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + triviaQuestions[questionCounter].answerIndex + "</p>");
    setTimeout(next, 4000); //  change to 4000 or other amount
  }

  //Loss when clock times out
  function generateLossDueToTimeOut() {
    unansweredQuestions++;
    $(".main-content").html("<p class='text-center '>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + triviaQuestions[questionCounter].answerIndex + "</p>");
    setTimeout(next, 4000);  //  change to 4000 or other amount
  };

  function generateFinalScreen() {
    $(".main-content").html("<p class='text-center '>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Did you graduate this time?!" + "</p>" + "<p class='summary-correct text-center'>Correct Answers: " + questionsCorrect + "</p>" + "<p class='text-center'>Wrong Answers: " + questionsWrong + "</p>" + "<p class='text-center'>Unanswered: " + unansweredQuestions + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-block reset-button btn-fin' href='#' role='button'>Reset The Quiz!</a></p>");
  }

  //On start button click display questions
  $('.start').click(function () {
    $('.start').hide();
    showQuestions();
    timer();
  });


  //When clicking answer either right or wrong
  $("body").on("click", ".answer", function (event) {
    selectedAnswer = $(this).text();
    if (selectedAnswer === triviaQuestions[questionCounter].answerIndex) {
      clearInterval(theClock);
      generateWin();
    }
    else {
      clearInterval(theClock);
      generateLoss();
    }
  });

  $("body").on("click", ".reset-button", function (event) {
		resetGame();
	});

  function resetGame() {
    questionCounter = 0;
    questionsCorrect = 0;
    questionsWrong = 0;
    unansweredQuestions = 0;
    counter = 30;
    showQuestions();
    timer();
  }
});
