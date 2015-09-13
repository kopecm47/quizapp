$(document).ready(function() {
  var questions = [{
    question: "What year is considered the year snowboarding was invented?",
    choices: ["1999", "1969", "1965", "1972"],
    qNum: 1,
    correct: 2
  }, {
    question: "What year was the first year that snowboarding was included in the winter Olympics?",
    choices: ["1998", "1980", "1987", "1990"],
    qNum: 2,
    correct: 0
  }, {
    question: "Which company is considered to be the first snowboarding company?",
    choices: ["Burton", "Winterstick", "Arbor", "K2"],
    qNum: 3,
    correct: 1
  }, {
    question: "What is it called when a snowboarder changes from one stance to another while riding down the hill?",
    choices: ["Regular", "Goofy", "Backward", "Switch"],
    qNum: 4,
    correct: 3
  }, {
    question: "How is one's board size measured",
    choices: ["Inches", "Feet", "Centimeters", "Meters"],
    qNum: 5,
    correct: 2
  }]

  var numCorrect = 0;
  var currentQuestion = 0;
  var userGuess = $("input:focus").val();
  var correctAnswer = questions[currentQuestion].correct;

  function checkAnswer() {
    if (userGuess = questions[currentQuestion].choices[correctAnswer]) {
      numCorrect = numCorrect++;

    }
  }

  function nextQuestion() {
    if (currentQuestion < 5) {
 document.getElementById("question").innerHTML = '<p>' + questions[currentQuestion].question + '</p>';
      document.getElementById("choices").innerHTML = '<input id="choice1" type="button" value=' + questions[currentQuestion].choices[0] + '></input><input id="choice2" type="button" value=' + questions[currentQuestion].choices[1] + '></input><input id="choice3" type="button" value=' + questions[currentQuestion].choices[2] + '></input><input id="choice4" type="button" value=' + questions[currentQuestion].choices[3] + '></input>';
      document.getElementById("questionNum").innerHTML = '<p>Question:  ' + questions[currentQuestion].qNum + ' out of 5</p>';
      document.getElementById("correctAnswers").innerHTML = '<p>Number of Correct Answers:  ' + numCorrect + ' out of 5</p>';
    }
  }
  
$(document).on("click", "#submit", function() {
    checkAnswer();
    currentQuestion = currentQuestion++;
    nextQuestion();
  });
});