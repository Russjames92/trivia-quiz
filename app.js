/* eslint-disable no-console */
/**
 * Example store structure
 */

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
  $('.quiz-container').on('click', '.btn-ans', function (event) {
    console.log('answer button ran');
    console.log(event.currentTarget);
    console.log(`${store.questions[store.questionNumber - 1].correctAnswer}`);
    if(event.currentTarget.toString() === `<button class="btn-ans">
    <span>${store.questions[store.questionNumber - 1].correctAnswer}</span>
  </button>`) {
    store.score ++;
    console.log(store.score);
  }
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
  
  const questionString = `<div class="text-container">
  <h2>${store.questions[store.questionNumber].question}</h2>
</div>
<div class="btn-container">
  <button class="btn-ans">
    <span>${store.questions[store.questionNumber].answers[0]}</span>
  </button>
  <button class="btn-ans">
    <span>${store.questions[store.questionNumber].answers[1]}</span>
  </button>
  <button class="btn-ans">
    <span>${store.questions[store.questionNumber].answers[2]}</span>
  </button>
  <button class="btn-ans">
    <span>${store.questions[store.questionNumber].answers[3]}</span>
  </button>
</div>`;

  store.questionNumber ++;
  return questionString;
}

function generateEndPage() {

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