const startButton = document.getElementById('startbtn')
const questionCElement = document.getElementById('container-question')
const questionBlock = document.getElementById('question');
const answerBlock = document.getElementById('answwer-btn');
const nextButton = document.getElementById('next-btn');

let shuffleQuestions, questionIndex;

startButton.addEventListener('click', startQuiz);



function startQuiz(){
    console.log('The quiz has begun!')
    startButton.classList.add('hide')
    shuffleQuestions = question.sort(() => Math.random() - .2)
    questionIndex = 0
    questionCElement.classList.remove('hide')
    nextUp()
}

function nextUp(){
    revealQuestion(shuffleQuestions[questionIndex])
}




function revealQuestion(question){
questionBlock.innertext = question.question

}
function selectAnswer(){


}
 

const question = [
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
    



