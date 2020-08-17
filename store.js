/* eslint-disable no-unused-vars */
'use strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Coffee is derived from a fruit.',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True'
    },
    {
      question: 'Which bear is best?',
      answers: [
        'Black Bear',
        'Polar Bear',
        'Grizzlie Bear',
        'Panda Bear'
      ],
      correctAnswer: 'Panda Bear'
    },
    {
      question: 'Inflammable means that an object is _______ .',
      answers: [
        'easily set on fire',
        'unable to be set on fire',
        'trendy',
        'totally safe to smoke in close proximity'
      ],
      correctAnswer: 'easily set on fire'
    },
    {
      question: 'Why does one drive on a Parkway and park on a Driveway?',
      answers: [
        'The english language is weird and dumb sometimes',
        'Because parking on a parkway would make no sense at all',
        'Because driving on a parkway makes people happy',
        'Goku'
      ],
      correctAnswer: 'The english language is weird and dumb sometimes'
    },
    {
      question: 'Which is superior; Mac or PC?',
      answers: [
        'PC',
        'Mac',
        'Neither, I use Linux',
        'I don\'t even code bro'
      ],
      correctAnswer: 'Mac'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};