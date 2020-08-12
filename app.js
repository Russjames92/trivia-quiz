/**
 * Example store structure
 */

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
  $('.btn-start').on('click', function () {store['quizStarted'] = true});
  console.log(store.quizStarted);
  console.log('handler ran');
  renderPage();
}

function renderPage() {
  const quizContent = generateQuizCont(store);
  console.log('render page ran');
  $('.quiz-container').html(quizContent);
}

function generateQuizCont(quiz) {
  console.log('ran generateQuizCont');
  if (quiz.quizStarted === false) {
    return generateWelcome();
  } else if (quiz.questionNumber < 5) {
    return generateQuestion();
  } else {
    return generateEndPage();
  }
}

function generateQuestion() {
  const questionText = store.questions.question
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