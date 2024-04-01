document.addEventListener('DOMContentLoaded', function () {
  const quizConfigForm = document.getElementById('quiz-config-form');

  quizConfigForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(this);

      const category = formData.get('category');
      const difficulty = formData.get('difficulty');
      const type = formData.get('type');
      const numQuestions = formData.get('numQuestions');

      fetchQuizQuestions(category, difficulty, type, numQuestions);
  });
});

function fetchQuizQuestions(category, difficulty, type, numQuestions) {
  const apiUrl = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const questions = data.results;
          displayQuiz(questions);
      })
      .catch(error => {
          console.error('Error fetching quiz questions:', error);
      });
}

function displayQuiz(questions) {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';

  questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `
          <p>Question ${index + 1}: ${question.question}</p>
          <form id="question-${index}-form">
              ${question.type === 'multiple' ? renderMultipleChoiceOptions(question, index) : renderTrueFalseOptions(index)}
          </form>
      `;
      quizContainer.appendChild(questionElement);
  });

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit Answers';
  submitButton.addEventListener('click', function () {
      calculateScore(questions);
  });
  quizContainer.appendChild(submitButton);

  quizContainer.style.display = 'block';
}

function renderMultipleChoiceOptions(question, index) {
  let optionsHtml = '';
  const options = [...question.incorrect_answers, question.correct_answer];
  options.forEach((option, optionIndex) => {
      optionsHtml += `
          <input type="radio" id="question-${index}-option-${optionIndex}" name="question-${index}-option" value="${option}">
          <label for="question-${index}-option-${optionIndex}">${option}</label><br>
      `;
  });
  return optionsHtml;
}

function renderTrueFalseOptions(index) {
  return `
      <input type="radio" id="question-${index}-option-true" name="question-${index}-option" value="True">
      <label for="question-${index}-option-true">True</label><br>
      <input type="radio" id="question-${index}-option-false" name="question-${index}-option" value="False">
      <label for="question-${index}-option-false">False</label><br>
  `;
}

function calculateScore(questions) {
  let score = 0;

  questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="question-${index}-option"]:checked`).value;
      if (selectedAnswer === question.correct_answer) {
          score++;
      }
  });

  const totalQuestions = questions.length;
  const percentageScore = (score / totalQuestions) * 100;

  alert(`You scored ${score} out of ${totalQuestions}. Your percentage score is ${percentageScore.toFixed(2)}%.`);
}
