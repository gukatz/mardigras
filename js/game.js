const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is the official greeting of Mardi Gras that means - "let the good times roll" ?',
        choice1: '"Deja que los buenos tiempos pasen"',
        choice2: '"Laissez les bon temps rouler"',
        choice3: '"Lass die guten Zeiten ruhen"',
        choice4: '"Sit bonum tempora volvunt"',
        answer:2,
    },

    {
        question: 'The Epiphany - Also known as:',
        choice1: '"Lord Budha"',
        choice2: '"Lucky Day"',
        choice3: '"The King Of The World"',
        choice4: '"Three Kings Day"',
        answer:4,
    },

    {
        question: 'Is it illegal to not wear a mask onboard a float?',
        choice1: 'Everyone on the float must wear a mask or paint their face.',
        choice2: '"Only the Participants of the Mardi Gras Carnival Must Wear mask"',
        choice3: 'Only the Mayor of New Orleans Must Wear a mask.',
        choice4: 'Only the Kids Must Wear a mask and paint their face.',
        answer:1,
    },

    {
        question: 'Who were the first of the type of parade krewes that we see today?',
        choice1: '"Krewe of Legends"',
        choice2: '"Krewe of Pitbulls"',
        choice3: '"Krewe of Rex"',
        choice4: '"Krewe of The Sun"',
        answer:3,
    },

    {
        question: 'Which pharse will make the Krewe members happily toss you beads and toys?',
        choice1: '"Throw me some toys!"',
        choice2: '"Take me to the moon!"',
        choice3: '"Mardi Gras Throwing!"',
        choice4: '"Throw me something, mister!"',
        answer:4,
    },

    {
        question: 'What is the meaning of the colors Green, Gold, and Purple of Mardi Gras means?',
        choice1: 'Green represents faith, Gold symbolizes power, and Purple is justice.',
        choice2: 'Green represents patience, Gold symbolizes stamina, and Purple is health.',
        choice3: 'There is not meaning to the colors, This is just the colors of the Mardi Gras Carnival.',
        choice4: 'Green represents agility, Gold symbolizes inttelect, and Purple is strength.',
        answer:1,
    },

    {
        question: 'On which date does Mardi Gras Carnival celebrations begins each year?',
        choice1: 'May 14',
        choice2: 'November 8',
        choice3: 'January 6',
        choice4: 'October 11',
        answer:3,
    },

    {
        question: 'In which year was Mardi Gras first parade in New Orleans?',
        choice1: '2001',
        choice2: '1923',
        choice3: '1871',
        choice4: '1837',
        answer:4,
    },

    {
        question: 'In which year were Mardi Gras First time floats appeared in the parades?',
        choice1: '1857',
        choice2: '1890',
        choice3: '2004',
        choice4: '1943',
        answer:1,
    },

    {
        question: 'What is the signature Mardi Gras dessert?',
        choice1: 'Hummus',
        choice2: 'King cake',
        choice3: 'Bacon',
        choice4: 'Chocolate',
        answer:2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset[`number`]
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

    }, 1000)
})
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
