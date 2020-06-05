const startButton = document.getElementById('startbtn')
const questionCElement = document.getElementById('container-question')
const questionBlock = document.getElementById('question');
const answerBlock = document.getElementById('answer-btn');
const nextButton = document.getElementById('nextbtn');

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

function restart(){
    nextButton.classList.add('hide')
    while (answerBlock.firstChild){
        answerBlock.removeChild(answerBlock.firstChild)
    }
}


function revealQuestion(question){
    questionBlock.innerHTML = question.question
    question.answer.forEach(answer => {
        let button = document.createElement('button')
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



function nextUp(){
    restart() 
    revealQuestion(shuffleQuestions[questionIndex])   
    }


function cleanUp(element,correct){
    setOff(element)
    if (correct){
        element.classList.add('correct')
    }
    else { element.classList.add('wrong')}
}

function clearUp(){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function selectAnswer(event){
const buttonSelected = event.target
const correct = buttonSelected.dataset.correct
restart(document.body, correct)
Array.from(answerBlock.children).forEach(button => {   
restart(button, button.dataset.correct)
})
if (shuffleQuestions.length > questionIndex + 1)
nextButton.classList.remove('hide')

}
 

const questions = [
    {question: 'What is Javascript used for?', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  
        {question: 'What does HTML stand for', answer: [
        {text: 'a', correct: false},
        {text: 'b', correct: true},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  
    {question: 'What is CSS?', answer: [
        {text: 'a', correct: false},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: true}
    ]},  
    {question: 'What SCRUM?', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  


        ]
    



