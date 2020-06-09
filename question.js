const startButton = document.getElementById('startbtn')
const questionCElement = document.getElementById('container-question')
const questionBlock = document.getElementById('question');
const answerBlock = document.getElementById('answer-btn');
const nextButton = document.getElementById('nextbtn');
const button = document.getElementById('button');
const answer = document.getElementById('answer');


let shuffleQuestions, questionIndex;



startButton.addEventListener('click', startQuiz);


function startQuiz()

  {

    console.log('The quiz has begun!')
    startButton.classList.add('hide')
    nextButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .2)
    questionIndex = 0
    questionCElement.classList.remove('hide')
    nextUp()
 }
    answerBlock.addEventListener('click', () => {
    question.innerHTML = 'Answer Selected, NEXT!'

})
    answerBlock.addEventListener('click', selectAnswer);
    nextButton.addEventListener('click',() => {
    questionIndex++
    nextUp()
})


  function nextUp()
{
    restart() 
    revealQuestion(shuffleQuestions[questionIndex])  
    questionCElement.classList.remove('hide')
}

function restart()
 {  
    clearup(document.body)
    nextButton.classList.add('hide')
    while (answerBlock.firstChild){
  answerBlock.removeChild(answerBlock.firstChild)
   }
}

function revealQuestion(question){
 questionBlock.innerHTML = question.question
  question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerHTML = answer.text
  button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBlock.appendChild(button)
    }     );
}

function selectAnswer(event){
const buttonSelected = event.target
const correct = buttonSelected.dataset.correct
resetit(document.body, correct)
Array.from(answerBlock.children).forEach(button => {   
resetit(button, button.dataset.correct)
})
if (shuffleQuestions.length > questionIndex + 1){
nextButton.classList.remove('hide')
console.log('Answer Selected')
} else {
    startButton.innerHTML = "Play Again!"
    startButton.classList.remove('hide')
}
}
function resetit (element, correct){
        clearup(element)
    if (correct){
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearup(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}






var questions = [
    {question: 'What is Javascript used for?', answer: [
        {text: 'To style Web Page', correct: false},
        {text: 'frontend development framework for creting responsive web design', correct: false},
        {text: 'to create interactive effects within web browser', correct: true},
        {text: 'A shape produced by a curve', correct: false}
    ]},  
        {question: 'What does HTML stand for', answer: [
        {text: 'HyperTxt Makeup Language', correct: false},
        {text: 'Hypertext Markup Language', correct: true},
        {text: 'hypertext Makeup Language', correct: false},
        {text: 'HyperStyled Markup Language', correct: false}
    ]},  
    {question: 'What is CSS?', answer: [
        {text: 'Code Styling Sheet', correct: false},
        {text: 'Codesending Styler Sheet', correct: false},
        {text: 'Condesending Style Sheet', correct: false},
        {text: 'Cascading Style Sheet', correct: true}
    ]},  
    {question: 'Which one is NOT a comparison operator?', answer: [
        {text: '==', correct: false},
        {text: '>', correct: false},
        {text: '<', correct: false},
        {text: '$', correct: true}
    ]}, 
        ]