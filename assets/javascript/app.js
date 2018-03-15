var questionsGuessed = 0;
var questionsCorrect = 0;
var questionsWrong = 0;


var triviaQuestions = [{
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}, {
    question: 'What is the questions?',
    answerList: ['a', 'b', 'c', 'd'],
    questionNumber: 1
}];

$(document).ready(function () {
    $('#start-button').html('<div class="start">Start</div>');
    $('#start-button').click(function () {
        $('#start-button').hide();

    })
});

function newGame() {
    questionsGuessed = 0;
    questionsCorrect = 0;
    questionsWrong = 0;
    $('#time-remaining').html('<p>Time Remaining</p>')

};