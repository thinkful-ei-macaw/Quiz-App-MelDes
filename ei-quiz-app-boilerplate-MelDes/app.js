
const store = {
  // 5 or more questions are required
  questions: [
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
      question: 'Sansa\'s favorite food is: '
      answers: [
        'pork pie',
        'lemon cake',
        'pigeon pie',
        'direwolf bread'
      ],
      correctAnswer: 'lemon cake'
    }
  ],
  questionNumber: 0,
  score: 0
};

//$(document).ready(function(){
 // $('.start-screen start game').click(function(event){
    //event.preventDefault();
    //$('.start-screen').hide();
    //$('.question-container'.showQuestion();
  //});
//});

//function beginQuiz(){
 // $(document).ready(function)
 function handleStartClick() {

  $('main').on('click' , '#start' , function (event) {
  
  STORE.quizStarted = true;
  
  render();
$('.question-container ul').on('click','li', function(){
  $('.selceted').removeClass('selected');
  $(this).addClass('selected');
});
};

//}
//function render(){

//}

fuction showQuestion(){
let question=questions[currentQuestion];
$('.quiz h2').text(question);
$('.quiz ul').html('');{
for(var i=0; i<question.answers.length; i++){
  $('quiz ul').append("<li id='"+i+"'+question>");
}
}





//}
function checkAnswer(choice)


fuction showCorrectAnswer(){

}
function showResults(){

}


.//Render landing page, question page, results with css
//Create a render function to  "start quiz"

//function to Generate questions 1 at a time
// function render(){

//create a function to check the selected answer

// if else statement to determine if answer
//is correct and if not display correct answer

//create a function to render the next question

//create a function for user's score and question number

//create a "no-skip" function

//make responsive to keyboard

//create a function to show overall ending score





/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */