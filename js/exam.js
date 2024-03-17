// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "A: Hyperlinks and Text Markup Language",
      "B: Hyper Text Markup Language",
      "C: Hyperlinking Text Markup Language",
      "D: Hyper Text Managing Language",
    ],
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },

  {
    numb: 6,
    question: "Which of these query will display the the table given above ?",
    answer: "Select name",
    options: [
      "Select employee from name",
      "Select name",
      "Select name from employee",
      "Select employee",
    ],
  },
  {
    numb: 7,
    question:
      "Which of the following is not the commonly used programming language for Artificial Intelligence?",
    answer: "Perl",
    options: ["Perl", "PROLOG", "Java", "LISP"],
  },
  {
    numb: 8,
    question:
      "Which of the following is not an application of artificial intelligence?",
    answer: "DBMS",
    options: ["Face recognition system", "Chatbots", "DBMS", "LIDAR"],
  },
  {
    numb: 9,
    question: "Face Recognition system is based on which type of approach?",
    answer: "Applied AI approach",
    options: [
      "Applied AI approach",
      "Weak AI approach",
      "Cognitive AI approach",
      "Strong AI approach",
    ],
  },
  {
    numb: 10,
    question: "Which of the following is/are the composition for AI agents?",
    answer: "Both Program and Architecture",
    options: [
      "Program only",
      "Architecture only",
      "Both Program and Architecture",
      "None of the mentioned",
    ],
  },
];
fetch("http://localhost/New%20folder/Test.php")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data[0]);
    mcq(data[0]);
  });
mcq();
// Call the function to display the section when the page loads
// showQuestions(0, questions);
// function showQuestions(index, questions) {
//   // Get the section element
//   const sectionElement = document.getElementById("questionSection");

//   // Check if the index is valid
//   if (index >= 0 && index < questions.length) {
//     // Update the question text and options
//     const queTextElement = sectionElement.querySelector(".que_text");
//     const optionListElement = sectionElement.querySelector(".option_list");

//     queTextElement.textContent = questions[index].question;

//     // Clear existing options
//     optionListElement.innerHTML = "";

//     // Add options to the option list
//     questions[index].options.forEach(function (option) {
//       const optionElement = document.createElement("div");
//       optionElement.textContent = option;
//       optionListElement.appendChild(optionElement);
//     });

//     // Show the section
//     sectionElement.style.display = "block"; // or "flex" if it's a flex container
//   } else {
//     // If the index is out of bounds, hide the section
//     sectionElement.style.display = "none";
//   }
// }
// const nextButton = document.getElementById("nextButton");

// // Add event listener to the next button
// nextButton.addEventListener("click", function () {
//   // Increment the index to get the next question
//   currentIndex++;
//   // Show the next question
//   showQuestions(currentIndex, questions);
// });

// let currentIndex = 0; // Variable to keep track of the current question index

// function showQuestions(index, questions) {
//   // Get the section element
//   const sectionElement = document.getElementById("questionSection");

//   // Check if the index is valid
//   if (index >= 0 && index < questions.length) {
//     // Update the question text and options
//     const queTextElement = sectionElement.querySelector(".que_text");
//     const optionListElement = sectionElement.querySelector(".option_list");

//     queTextElement.textContent = questions[index].question;

//     // Clear existing options
//     optionListElement.innerHTML = "";

//     // Add options to the option list
//     questions[index].options.forEach(function (option) {
//       const optionElement = document.createElement("div");
//       optionElement.textContent = option;
//       optionListElement.appendChild(optionElement);
//     });

//     // Show the section
//     sectionElement.style.display = "block"; // or "flex" if it's a flex container
//   } else {
//     // If the index is out of bounds, hide the section
//     sectionElement.style.display = "none";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".progress-bar");
  const nextButton = document.querySelector(".next_btn");

  let currentQuestion = 1;
  const totalQuestions = 10; // Change this to the total number of questions

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    // Update the progress bar width
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + "%";

    // Update the question number text
    const txt1 = document.querySelector(".txt1");
    txt1.textContent = `Question ${currentQuestion} / ${totalQuestions}`;

    // Increment the current question counter
    currentQuestion++;

    // If all questions are answered, show the result box or perform other actions
    if (currentQuestion > totalQuestions) {
      // Show the result box or perform other actions
      console.log("Quiz completed!");
    }
  });
});

// Function to update the progress bar
function updateProgressBar(currentQuestion, totalQuestions) {
  // Calculate the progress percentage
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  // Update the width of the progress bar
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = progressPercentage + "%";

  // Update the aria-valuenow attribute for accessibility
  progressBar.setAttribute("aria-valuenow", progressPercentage);
}

// Event listener for the "Next Que" button
document.querySelector(".next_btn").addEventListener("click", function () {
  // Move to the next question or finish the quiz

  // Example: Assuming currentQuestionIndex and totalQuestions are defined somewhere in your code
  currentQuestionIndex++;
  // Assuming totalQuestions is the total number of questions
  updateProgressBar(currentQuestionIndex, totalQuestions);
});

// Show questions function
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  // Update progress bar
  updateProgressBar();

  // Create HTML for the current question and options
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";

  // Update question and options in the HTML
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  // Set onclick attribute to all available options
  const option = option_list.querySelectorAll(".option");
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }

  // Change text of next button to "Submit" if last question
  if (index === questions.length - 1) {
    next_btn.textContent = "Submit";
  } else {
    next_btn.textContent = "Next Que";
  }
}

// Show questions function
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  // Update progress bar
  const progressBar = document.querySelector(".progress-bar");
  const progressPercentage = ((index + 1) / questions.length) * 100;
  progressBar.style.width = progressPercentage + "%";

  // Create HTML for the current question and options
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";

  // Update question and options in the HTML
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  // Set onclick attribute to all available options
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }

  // Change text of next button to "Submit" if last question
  const next_btn = document.querySelector(".next_btn");
  if (index === questions.length - 1) {
    next_btn.textContent = "Submit";
  } else {
    next_btn.textContent = "Next Que";
  }
}

// Get the submit button and popup elements
const submitBtn = document.querySelector(".submitt");
const popup = document.querySelector(".popup");

// Log to ensure the elements are selected correctly
console.log(submitBtn);
console.log(popup);

// Function to show the popup
function showPopup() {
  console.log("Submit button clicked");
  popup.style.display = "block";
}

// Add event listener to the submit button
submitBtn.addEventListener("click", showPopup);
