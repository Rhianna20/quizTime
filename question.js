const startButton = document.getElementById('start-btn')
const questionElement = document.getElementById('container-question')
let questionBlock = document.getElementById('questionTime')
let answerBlock = document.getElementById('answwer-btn')
let shuffleQuestions, questionIndex;

startButton.addEventListener('click', startQuiz)



function startQuiz(){
    console.log('The quiz has begun!')
    startButton.classList.add('hide')
    shuffleQuestions = myQuestions.sort(() => Math.random() - .2)
    questionIndex = 0
    questionElement.classList.remove('hide')
    nextUp()
}

function nextUp(){
    revealQuestion(shuffleQuestions[questionIndex])
}



function revealQuestion(question){
questionElement.innertext = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.text
    questionElement.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
})
}

function selectAnswer(){


}
 

const myQuestions = [
    {question: 'What is Javascript used for?', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  
        {question: 'What does HTML stand for', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  
    {question: 'What is Javascript usejd for?', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  
    {question: 'What is Javajkkscript used for?', answer: [
        {text: 'a', correct: true},
        {text: 'b', correct: false},
        {text: 'c', correct: false},
        {text: 'd', correct: false}
    ]},  


        ]
    



