// list of questions

"use stricts";
const questions = [
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: "Au",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Emily Bronte",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Seoul"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "Which bird is known for its ability to mimic human speech?",
    options: ["Parrot", "Penguin", "Ostrich", "Hummingbird"],
    correctAnswer: "Parrot",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correctAnswer: "H2O",
  },
];

// accessing required class and ids
let noOfQuestion = document.querySelector("#qustionNo");
let totalNoOfQuestion = document.querySelector("#totalNoQuestions");
let timmer = document.querySelector(".right_timer");
let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let nextBtn = document.getElementById("nextBtn");

let initialIndexOfQuestion = 0;
let totalScore = 0;
let timerInterval;

// Function to start the timer
function startTimer() {
  let timeLeft = 10; // 10 seconds
  timmer.textContent = timeLeft; // Display initial time

  timerInterval = setInterval(() => {
    timeLeft--;
    timmer.textContent = timeLeft;

    if (timeLeft === 0) {
      // If time is up, display a message or perform any other action
      clearInterval(timerInterval);
      alert("Time's up!");
      // Move to the next question
      goToNextQuestion();
    }
  }, 1000); // Update every second
}

// Function to display the current question
function displayQuestion() {
  // Get the current question
  const currentQuestion = questions[initialIndexOfQuestion];

  // Display the question text
  questionElement.textContent = currentQuestion.question;

  // Clear previous options
  optionsElement.innerHTML = "";

  // Add options to the list
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.dataset.index = index; // Store the index of the option
    optionsElement.appendChild(li);

    // Add event listener to each option
    li.addEventListener("click", handleOptionClick);
  });

  // Update the number of questions remaining
  noOfQuestion.textContent = initialIndexOfQuestion + 1;
  totalNoOfQuestion.textContent = questions.length;

  startTimer();
}

// Function to handle option click
function handleOptionClick(event) {
  const selectedOptionIndex = parseInt(event.target.dataset.index);
  const currentQuestion = questions[initialIndexOfQuestion];

  // Check if the selected option is correct
  if (
    currentQuestion.options[selectedOptionIndex] ===
    currentQuestion.correctAnswer
  ) {
    // If correct, display a message or perform any other action
    totalScore++;
    alert("Correct!");
  } else {
    // If incorrect, display a message or perform any other action
    alert("Incorrect!");
  }

  goToNextQuestion();
}

// Function to move to the next question
function goToNextQuestion() {
  initialIndexOfQuestion++;
  clearInterval(timerInterval); // Clear the timer interval
  if (initialIndexOfQuestion < questions.length) {
    // Display the next question
    displayQuestion(questions[initialIndexOfQuestion]);
  } else {
    // If there are no more questions, display a message or perform any other action
    alert("End of quiz!");
  }
}

// Display the first question when the page loads
displayQuestion();
