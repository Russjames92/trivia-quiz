/* eslint-disable no-console */


/* global store,$ */

'use strict';



/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

function main() {
  renderPage();
  buttonHandler();
}

function buttonHandler() {

  $('.quiz-container').on('click', '.btn-start', function (event) {
    console.log('start button ran');
    store.quizStarted = true;
    console.log(store.quizStarted);
    console.log('buttonHandler ran');
    renderPage();
  });

  $('.quiz-container').on('click', '.btn-correct', function (event) {
    console.log('answer button ran');
    alert('correct');
    console.log(`${store.questions[store.questionNumber - 1].correctAnswer}`);
   
    store.score ++;
    console.log(store.score);
    renderPage();
  });

  $('.quiz-container').on('click', '.btn-ans', function(event) {
    alert('wrong');
    renderPage();
  });

  $('.quiz-container').on('click', '.restart', function(event) {
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
  console.log('ran generateQuizCont');
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
                        <div class="btn-container">`;

  store.questions[store.questionNumber].answers.forEach(function(answer) { 
    if(answer === store.questions[store.questionNumber].correctAnswer){
      questionString += `<button class="btn-correct">
                            <span>${answer}</span>
                        </button>`;
      console.log('btn-correct added to correct answer');
    } else {
      questionString += `<button class="btn-ans">
                            <span>${answer}</span>
                        </button>`;
    }
  });
  questionString += `</div>
  <div class="score">
    <span>Your score is ${store.score} correct, out of a possible ${store.questions.length}</span>
  </div>`;
  store.questionNumber ++;
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
  console.log('ran generate welcome')
  return `<div class="text-container">
   <h2>Are You Ready To Test Your Knowledge?</h2>
 </div>
 <div class="btn-container">
   <button class="btn-start">
     <span>Begin</span>
   </button>
 </div>`;
}

//function generateShoppingItemsString(shoppingList) {
// console.log("Generating shopping list element");
// const items = shoppingList.map((item) => generateItemElement(item));
// return items.join("");
//}

$(main());

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)