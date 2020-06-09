const startButton = document.getElementById('startbtn')
const questionCElement = document.getElementById('container-question')
const questionBlock = document.getElementById('question');
const answerBlock = document.getElementById('answer-btn');
const nextButton = document.getElementById('nextbtn');
const button = document.getElementById('button')
const answer = document.getElementById('answer')
let score = 0;
let shuffleQuestions, questionIndex;

startButton.addEventListener('click', startQuiz);
answerBlock.addEventListener('click', endOfQuiz)



function startQuiz()
  {
    console.log('The quiz has begun!')
    startButton.classList.add('hide')
    nextButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .3)
    questionIndex = 0
    questionCElement.classList.remove('hide')
    nextUp()
    endOfQuiz()
 }
    answerBlock.addEventListener('click', () => {
 
})
    answerBlock.addEventListener('click', selectAnswer);
    nextButton.addEventListener('click',() => {
    questionIndex++
    nextUp()
})


  function nextUp()
{   console.log('Question up, click answer')
    restart() 
    revealQuestion(shuffleQuestions[questionIndex])  
    questionCElement.classList.remove('hide')
}

function restart()
 {  clearup(document.body)
    nextButton.classList.add('hide')
    while (answerBlock.firstChild){
        answerBlock.removeChild(answerBlock.firstChild)
    answerBlock.firstChild }
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
} else { startButton.innerHTML = "Play Again!"
        startButton.ClassList.remove('hide')
       }



function resetit (element, correct){
    clearup(element)
    if (correct){
        element.classList.add('correct')

    }
    else  {
        element.classList.add('wrong')
    }
}


function clearup(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endOfQuiz(shuffleQuestions){
    if (shuffleQuestions < questionIndex){
        console.log('End of quiz! Woorayy!')
        nextButton.classList.remove('hide')
        questionBlock.innerHTML = "End of Quiz!"
    } 
}


var questions = [
    {question: 'What is Javascript used for?', answer: [
        {text: 'To style Web Page', correct: false},
        {text: 'frontend development framework for creting responsive web design', correct: false},
        {text: 'Creates interactive effects within web browser', correct: true},
        {text: 'A shape produced by a curve', correct: false}
    ]},  
        {question: 'What does HTML stand for', answer: [
        {text: 'HyperTxt Makeup Language', correct: false},
        {text: 'Hypertext Markup Language', correct: true},
        {text: 'hypertext', correct: false},
        {text: 'd', correct: false}
    ]},  
    {question: 'What is CSS?', answer: [
        {text: 'a', correct: false},
        {text: 'bDDD', correct: false},
        {text: 'cdeee', correct: false},
        {text: 'truea', correct: true}
    ]},  
    {question: 'What is a loop ?', answer: [
        {text: 'a', correct: false},
        {text: 'bDDD', correct: false},
        {text: 'cdeee', correct: false},
        {text: 'truea', correct: true}
    ]}, 
        ]
    

}
