<script>

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output=[];
    myQuestions.forEach(
        (currentQuestion, QuestionNumber) =>{
            cconst answers = [];
            
        }
    )
}

function showResults(){
    submitButton.addEventListener('click', showResults)
}

const myQuestions = [
  {
    question1: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question2: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question3: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question4: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question5: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question6: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question7: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question8: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer9: "c"
  },
  {
    question10: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },

function showResults(){

// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

  // find selected answer
  const answerContainer = answerContainers[questionNumber];
  const selector = 'input[name=question'+questionNumber+']:checked';
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  // if answer is correct
  if(userAnswer===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
});

// show number of correct answers out of total
resultsContainer.innerHTML = numCorrect + ' out 

function timesUp()
{
  score = calculateScore()
  location = "results.html?score=" + score
}
setTimeout("timesUp()",60000)


</script>