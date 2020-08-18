'use strict';

function main() {
  renderPage();
  buttonHandler();
}

function buttonHandler() {

  let selectedAnswer = "";

  $('.quiz-container').on('click', '.btn-start', function (event) {
    store.quizStarted = true;
    renderPage();
  });

  $('.quiz-container').on('click', '.btn-correct', function (event) {
    event.preventDefault();
    selectedAnswer = `${store.questions[store.questionNumber - 1].correctAnswer}`;
  });

  $('.quiz-container').on('click', '.btn-ans', function (event) {
    event.preventDefault();
    selectedAnswer = `${store.questions[store.questionNumber - 1].answers}`;
  });

  $('.quiz-container').on('click', '.submit', function (event) {
    event.preventDefault();
    if (selectedAnswer === `${store.questions[store.questionNumber - 1].correctAnswer}`) {
      alert('Correct');
      store.score++;
      renderPage();
    } if (selectedAnswer === `${store.questions[store.questionNumber - 1].answers}`) {
      alert(`Incorrect! The correct answer is "${store.questions[store.questionNumber - 1].correctAnswer}"`);
      renderPage();
    } if (selectedAnswer === "") {
      alert(`Sorry, you must select one of the answers before moving on.`);
    }
    selectedAnswer = "";
  });

  $('.quiz-container').on('click', '.restart', function (event) {
    store.score = 0;
    store.questionNumber = 0;
    renderPage();
  });

}

function renderPage() {
  const quizContent = generateQuizCont(store);
  console.log('render page ran');
  $('.quiz-container').html(quizContent);
}

function generateQuizCont(quiz) {
  if (store.quizStarted === false) {
    return generateWelcome();
  } else if (store.questionNumber < store.questions.length) {
    return generateQuestion();
  } else {
    return generateEndPage();
  }
}

function generateQuestion() {
  let questionString = `<div class="text-container">
                          <h2>Question ${store.questionNumber + 1} out of ${store.questions.length}.</br> ${store.questions[store.questionNumber].question}</h2>
                        </div>
                        <form>
                        <div class="btn-container">`;

  store.questions[store.questionNumber].answers.forEach(function (answer) {
    if (answer === store.questions[store.questionNumber].correctAnswer) {
      questionString += `<button class="btn-correct">
                            <span>${answer}</span>
                        </button>`;
    } else {
      questionString += `<button class="btn-ans">
                            <span>${answer}</span>
                        </button>`;
    }
  });

      questionString += `<hr>
                          <button class="submit">
                            <span>SUBMIT</span>
                          </button>`;

  questionString += `</div></form>
  <div class="score">
    <span>Your score is ${store.score} correct, out of a possible ${store.questions.length}</span>
  </div>`;
  store.questionNumber++;
  return questionString;
}

function generateEndPage() {
  let endPageString = `<div class="end-container">
  <h2>END PAGE<h2>
  <p>Congratulations! You've completed the quiz<p>
  <p>Your score was ${store.score} out of ${store.questions.length}</p>
  </div>
  <div class="btn-container">
    <button class="restart">
      <span>Try Again!</span>
    </button>
  </div>`;

  return endPageString;
}

function generateWelcome() {
  return `<div class="text-container">
   <h2>Are You Ready To Test Your Knowledge?</h2>
 </div>
 <div class="text-container">
  <p>To navigate quiz via keyboard, press TAB to scroll between answers and ENTER to make your selection.</p>
 </div>
 <div class="btn-container">
   <button class="btn-start">
     <span>Begin</span>
   </button>
 </div>`;
}

$(main);