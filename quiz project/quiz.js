// Define quiz questions and answers
const quizData = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "Madrid",
      c: "Rome"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: {
      a: "Saturn",
      b: "Jupiter",
      c: "Neptune"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the highest mountain in the world?",
    answers: {
      a: "Mount Kilimanjaro",
      b: "Mount Everest",
      c: "Mount Fuji"
    },
    correctAnswer: "b"
  }
];

// Get HTML elements
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

// Function to generate quiz questions and answers
function generateQuiz() {
  let output = "";
  quizData.forEach((question, index) => {
    let answers = "";
    for (const choice in question.answers) {
      answers += `
        <label>
          <input type="radio" name="question${index}" value="${choice}">
          ${question.answers[choice]}
        </label>
      `;
    }
    output += `
      <div class="question">
        ${question.question}
      </div>
      <div class="answers">
        ${answers}
      </div>
    `;
  });
  quizContainer.innerHTML = output;
}

// Function to check quiz answers
function checkAnswers() {
  let score = 0;
  quizData.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
    }
  });
  const percentScore = (score / quizData.length) * 100;
  result.innerText = `You got ${score} out of ${quizData.length} correct (${percentScore}%).`;
}

// Generate quiz questions and answers
generateQuiz();

// Add event listener to submit button
submitButton.addEventListener("click", checkAnswers);
