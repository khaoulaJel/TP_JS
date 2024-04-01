const form = document.querySelector('.quiz-form');
let currentQuestionIndex = 0;
let timerInterval;
const totalQuestions = 6;
const scoreIncrement = 100 / totalQuestions;
const quizDuration = 90; 

const startQuiz = () => {
    startTimer();
};

const disableOptionsAndMoveToNext = () => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const options = question.querySelectorAll('input[type="radio"]');
        options.forEach(option => {
            option.disabled = true;
        });
    });
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        scrollTo('.question:nth-child(' + (currentQuestionIndex + 1) + ')');
    } else {
        clearInterval(timerInterval);
        displayScore();
        playSound();
    }
};

const startTimer = () => {
    let timeLeft = quizDuration; 
    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    timerContainer.appendChild(timerElement);
    document.querySelector('.quiz').appendChild(timerContainer);

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Time\'s up!';
            disableOptionsAndMoveToNext();
        }
        timeLeft--;
    }, 1000);
};

const displayScore = () => {
    let score = 0;
    const userAnswers = [
        form.querySelector('input[name="q1"]:checked').value,
        form.querySelector('input[name="q2"]:checked').value,
        form.querySelector('input[name="q3"]:checked').value,
        form.querySelector('input[name="q4"]:checked').value
    ];

    userAnswers.forEach((answer) => {
        if (answer === 'B') {
            score += scoreIncrement;
        }
    });

    const showResult = document.querySelector('.result');
    showResult.querySelector('span').textContent = `${score}%`;
    showResult.classList.remove('d-none');

    scrollTo('.result');
};

const playSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 500);
};

form.addEventListener('submit', e => {
    e.preventDefault();
    displayScore();
    playSound(); 
});

const scrollTo = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth',
    });
};

startQuiz();
