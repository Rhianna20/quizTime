const startButton = document.getElementById('startbtn')
const questionCElement = document.getElementById('container-question')
const questionBlock = document.getElementById('question');
const answerBlock = document.getElementById('answer-btn');
const nextButton = document.getElementById('nextbtn');
const button = document.getElementById('button')
const answerbut = document.getElementById('answerbuttons')
const answer = document.getElementById('answer')
let shuffleQuestions, questionIndex;

startButton.addEventListener('click', startQuiz);




function startQuiz(){
    console.log('The quiz has begun!')
    startButton.classList.add('hide')
    nextButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .2)
    questionIndex = 0
    questionCElement.classList.remove('hide')
    nextUp()
}
answerBlock.addEventListener('click', () => {
    questionIndex
})
answerBlock.addEventListener('click', revealQuestion);
nextButton.addEventListener('click',() => {
    questionIndex++
    nextUp()
})


function nextUp(){
    restart() 
    revealQuestion(shuffleQuestions[questionIndex])  
    
    }

function restart(){
    nextButton.classList.add('hide')
    while (answerBlock.firstChild){
        answerBlock.removeChild(answerBlock.firstChild)
    }
}


function revealQuestion(question){
    questionBlock.innerHTML = question.question
    Array.from(question.answer).forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        
        }
        button.addEventListener('click', selectAnswer)
        answerBlock.appendChild(button)
        

    }
        
    );
    }



function selectAnswer(event){
const buttonSelected = event.target
const correct = buttonSelected.dataset.correct
resetit(document.body, correct)
Array.from(answerBlock.children).forEach(button => {   
resetit(button, button.dataset.correct)
})
if (shuffleQuestions.length > questionIndex + 1)
nextButton.classList.remove('hide')
console.log('first question')
answer.addEventListener('click', grandrev)
}

function granrev(){
    if(answer === true){
        console.log('ding ding!')
    }
    else
    console.log('woopp')
}

function resetit (element, correct){
    clearup(element)
    if (correct){
        element.classList.add('correct')
        console.log('correct')
    }
    else {
        element.classList.add('wrong')
        console.log('wrong')
    }
}


function clearup(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {question: 'What is Javascript used for?', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  
        {question: 'What does HTML stand for', answer: [
        {text: 'A', correct: false},
        {text: 'b', correct: true},
        {text: 'S', correct: false},
        {text: 'd', correct: false}
    ]},  
    {question: 'What is CSS?', answer: [
        {text: 'a', correct: false},
        {text: 'bDDD', correct: false},
        {text: 'c', correct: false},
        {text: 'dDDDD', correct: true}
    ]},  
    {question: 'What SCRUM?', answer: [
        {text: 'aDDD', correct: true},
        {text: 'b', correct: false},
        {text: 'cDDDD', correct: false},
        {text: 'd', correct: false}
    ]}
        ]
    

