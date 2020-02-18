'use strict';

const store = {
  // 5 or more questions are required
  questions:[
    {
      question: 'How does Daenerys Targaryen command her dragons to breathe fire?',
      answers: [
        'Valor Morghulis',
        'Khaleesi',
        'Drogo',
        'Dracarys'
      ],
      correctAnswer: 'Dracarys'
    },
    {
      question: 'Who is the Three-eyed Raven',
      answers: [
        'Bran',
        'Hodor',
        'Sansa',
        'Jon'
      ],
      correctAnswer: 'Bran'
    },
    {
      question: 'Jaime Lannister lost his: ',
      answers: [
        'hand',
        'head',
        'arm',
        'leg'
      ],
      correctAnswer: 'hand'
    },
    {
      question: 'Cersei Lannister was romantically in love with her: ',
      answers: [
        'twin brother',
        'father',
        'cousin',
        'son'
      ],
      correctAnswer: 'twin brother'
    },
    {
      question: 'Sansa\'s favorite food is: ',
      answers: [
        'pork pie',
        'lemon cake',
        'pigeon pie',
        'direwolf bread'
      ],
      correctAnswer: 'lemon cake'
    }
    
  ],
    
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
  

  


  

//   $('main').on('click' , '#start-game' , function () {
//     store.quizStarted = true;
//     $('.start-screen').hide();
//     $('questions').showQuestionHtml();
//     render();
// });
// } 

// console.log('beginQuizHtml');
// $('.question-container ul').on('click','li', function(){
//   $('.selected').removeClass('selected');
//   $(this).addClass('selected');
//function render(){
//}

// function showQuestionHtml() {
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;

  
//   showSlide(currentSlide);
//   const output = [];

//     store.forEach(
//       (currentQuestion, questionNumber) => {
//         const answers = [];
//         for('' in currentQuestion.answers){  
//


function beginQuizHtml() {
  return`<form id="start-screen">
    <h1>Test Your Game of Thrones Knowledge</h1> 
    <button id="start-game" class="start-game btn">Start Game</button>
    </form>`;
}

function generateQuestions() {
  return`<form id= "question-container" class="remove">
    <section id="question">${store.questions[store.questionNumber].question}</section>
    <div id="answer-btn" class="btn-grid">
      <button class="btn" id="0" value="${store.questions[store.questionNumber].answers[0]}">${store.questions[store.questionNumber].answers[0]}</button>
      <button class="btn" id="1" value="${store.questions[store.questionNumber].answers[1]}">${store.questions[store.questionNumber].answers[1]}</button>
      <button class="btn" id="2" value="${store.questions[store.questionNumber].answers[2]}">${store.questions[store.questionNumber].answers[2]}</button>
      <button class="btn" id="3" value="${store.questions[store.questionNumber].answers[3]}">${store.questions[store.questionNumber].answers[3]}</button>
    </div>
    
  </form>`;
}

function showQuestionHtml(){ 
  $('main').on('submit', '#start-game', function(event) {
    event.preventDefault();
    render();
  });
}
//   let question=questions[currentQuestion]; 
//   $('.quiz h2').text(question); 
//   $('.quiz ul').html('');
//    for(var i=0; i<question.answers.length; i++){
//       $('quiz ul').append("<li id='"+i+"'+question>"); 
//     } 
//   }

//create a function to check the selected answer
//create a function for user's score and question number
// function checkAnswerHtml() {
//   $('main').on("submit", function(event) {
//     event.preventDefault();   
//     for(i=0; i<store.questions[store.questionNumber].length; i++); {
//         let response=window.prompt(questions.question[i].answers);
//         if(response === store.questions[store.questionNumber].correctAnswer){
//           score++;
//           alert('Correct!');
//         } else {
//           alert('Sorry!' + 'the correct answer is' + correctAnswer);
//         }
//     };
  

//statement to determine if answer
//is correct and if not display correct answer
// function showCorrectAnswerHtml()

//create a function to show overall ending score
//  function showResultsHtml(){
//   const answerContainers = quizContainer.querySelectorAll('.answers');
//     store.forEach( (currentQuestion, questionNumber) => {

//     // find selected answer
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector)).value;

//     // if answer is correct
//     if(userAnswer === currentQuestion.correctAnswer){
//       // add to the number of correct answers
//       score++;
  
//       resultsContainer.innerHTML = `${score} out of ${store.length}`;

 
//Render landing page, question page, results with css
function render() {

  
  if(store.quizStarted===false) {
    $('main').html(beginQuizHtml());
    
  }
  else if(store.questionNumber<store.questions.length) {
    // html = checkAnswerHtml();
    // html += showQuestionHtml();
    $('main').html(generateQuestions());
    console.log('it works');
  }
  // else {
  //   $('main').html(showResultsHtml());
  // }
}

// /
function handleStartClick() {
  $('main').on('submit', '#start-game', function (event) {
    event.preventDefault();
    store.quizStarted = true;
      render();
    });
  }
    
//   });
// }
// //function to Generate questions 1 at a time
// // create a function to render the next question
// function handleNextQuestionClick() {
//   $('body').on('click', '#submit', (event) => {
//     render();
//   });
// }

// function handleQuestionFormSubmission() {
//   $('body').on('submit', '#question-container', function(event){
//     event.preventDefault();
//     render();
//   });
// }

// function handleRestartButtonClick() {
//   $('body').on('click', '#restart-quiz', (event) => {
//     restartQuiz();
//     render();
//   });
// }

function handleQuizApp() {
  render();
  handleStartClick();
//   handleNextQuestionClick();
//   handleQuestionFormSubmission();
//   handleRestartButtonClick();
}



function restartQuiz() {
  store.quizStarted = false;
  store.currentQuestion = 0;
  store.score = 0;
  
// }

$(handleQuizApp);
















// // // //create a "no-skip" function

// // // //make responsive to keyboard







// // // //  *
// // // //  *
// // // //  * Your app should include a render() function, that regenerates
// // // //  * the view each time the store is updated. See your course
// // // //  * material, consult your instructor, and reference the slides
// // //  * for more details.
// // //  *
// // //  * NO additional HTML elements should be added to the index.html file.
// // //  *
// // //  * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary