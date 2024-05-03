const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const steps = [first, second, third, fourth];

function nextStep(currentStep) {
  steps.forEach((step) => step.classList.remove("active"));

  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const formFields = document.querySelectorAll("form fieldset");
  const nextBtn = document.getElementById("nextbutton");
  const backBtn = document.getElementById("back");
  let currentStep = 0;

  function updateSteps() {
    steps.forEach((step, index) => {
      if (index < currentStep) {
        step.classList.add("done");
      } else if (index === currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("done", "active");
      }
    });

    if (currentStep === 0) {
      backBtn.disabled = true;
    } else {
      backBtn.disabled = false;
    }
    if (currentStep === steps.length - 1) {
      nextBtn.textContent = "Submit for review";
      nextBtn.type = "submit"; // Change button type to submit
    } else {
      nextBtn.textContent = "Next";
      nextBtn.type = "button"; // Change button type to button
    }

    // Show current form field and hide others
    formFields.forEach((field, index) => {
      if (index === currentStep) {
        field.style.display = "block";
      } else {
        field.style.display = "none";
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    } else {
      // Submit the form automatically on the last step
      document.getElementById("multi-step-form").submit();
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });

  updateSteps();
});

// Get the input field and character count element
const inputField = document.getElementById("courseTitleInput");
const charCountElement = document.getElementById("charCount");

// Add event listener for input changes
inputField.addEventListener("input", function () {
  // Get the current length of the input value
  const inputLength = this.value.length;

  // Update the character count display
  charCountElement.textContent = inputLength + "/40";
});

function displayImage() {
  const fileInput = document.getElementById("fileInput");
  const uploadedImage = document.getElementById("uploadedImage");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}

var inputValues = [];

document
  .getElementById("addButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Create a new input element
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("class", "projectTimeline");
    newInput.setAttribute(
      "placeholder",
      "Example : Estimate project timeline and budgets."
    );

    // Get the container element
    const container = document.getElementById("inputContainer");

    // Insert the new input before the button
    container.insertBefore(newInput, document.getElementById("addButton"));

    // Add the new input value to the array
    inputValues.push("");

    // Update the input values when the input changes
    newInput.addEventListener("input", function () {
      var index = Array.from(container.children).indexOf(newInput);
      inputValues[index] = newInput.value;
    });
  });

// Function to save input values
// function saveInputValues() {
//   // Save inputValues array to the database or local storage
//   console.log(inputValues); // Just for demonstration, replace with actual save logic

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".addButton2");
  const inputContainer = document.getElementById("inputContainer2");

  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior (page reload)

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "Skills";
    newInput.className = "Skills gap-20"; // Add class for the gap
    newInput.placeholder = "Example: good knowledge in English.";

    inputContainer.insertBefore(newInput, addButton);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".addButton3");
  const inputContainer = document.getElementById("inputContainer3");

  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior (page reload)

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "CourseFor";
    newInput.className = "CourseFor gap-20"; // Add class for the gap
    newInput.placeholder =
      "Example : beginner python that curious about Datascience.";

    inputContainer.insertBefore(newInput, addButton);
  });
});

const list = document.querySelector(".drag-list");
const items = document.querySelectorAll(".drag-item");

function start(e) {
  if (e.target.matches(".drag-item")) {
    setTimeout(() => e.target.classList.add("active"), 0);
  }
}

const end = () =>
  items.forEach((item) => item.classList.remove("active", "grabbing"));

function activate(e) {
  reset(e);
  e.target.matches(".drag-item") && e.target.classList.add("grabbing");
  const activeItem = list.querySelector(".active");
  const inactiveItems = [...list.querySelectorAll(".drag-item:not(.active)")];
  const insertPos = inactiveItems.find(
    (item) => e.clientY <= item.offsetTop + item.offsetHeight / 2
  );
  list.insertBefore(activeItem, insertPos);
}

const reset = (e) => e.preventDefault();

list.addEventListener("dragstart", start, false);
list.addEventListener("dragend", end, false);
list.addEventListener("dragover", activate, false);
list.addEventListener("dragenter", reset, false);

/* second section */

// const lessonList = document.getElementById("lessonList");
// const addLessonButton = document.querySelector(".addLessonButton");

// addLessonButton.addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent page reload

//   // Create a new list item element
//   const newListItem = document.createElement("li");
//   newListItem.classList.add("drag-item", "draggable"); // Add drag-related classes

//   // Create the drag details element
//   const dragDetails = document.createElement("div");
//   dragDetails.classList.add("drag-details", "gap-3"); // Add style classes

//   // Create the drag icon element (optional, customize the content)
//   const dragIcon = document.createElement("div");
//   dragIcon.classList.add("drag-icon");
//   dragIcon.textContent = "⠿"; // Replace with your desired icon content

//   // Create the lesson title element and content (replace with your logic)
//   const lessonTitle = document.createElement("p");
//   lessonTitle.classList.add("m-0", "txt7");
//   lessonTitle.textContent = "New Lesson"; // Replace with user input or dynamic content

//   // Append elements to the drag details
//   dragDetails.appendChild(dragIcon);
//   dragDetails.appendChild(lessonTitle);

//   // Optionally, create additional elements for the new lesson (e.g., description, link)

//   // Add the drag details to the new list item
//   newListItem.appendChild(dragDetails);

//   // Create and add the ellipsis menu icon (optional)
//   const ellipsisIcon = document.createElement("i");
//   ellipsisIcon.classList.add("fa-solid", "fa-ellipsis-vertical");
//   newListItem.appendChild(ellipsisIcon); // Add to newListItem if desired

//   // Append the new list item to the lesson list
//   lessonList.appendChild(newListItem);

//   // Append the "Add new Lesson" button as the last list item
//   lessonList.appendChild(addLessonButton);
// });

function addNewLesson(event) {
  event.preventDefault(); // Prevent default form submission
  var lessonList = document.getElementById("lessonList");
  var newListItem = document.createElement("li");
  newListItem.className = "drag-item"; // Add the same class as other li elements
  newListItem.draggable = true;

  var newDiv = document.createElement("div");
  newDiv.className = "drag-details gap-3";

  var newIcon = document.createElement("div");
  newIcon.className = "drag-icon";
  newIcon.textContent = "⠿";

  var innerDiv = document.createElement("div");
  innerDiv.className = "m-0";

  var link = document.createElement("a");
  link.href = "#"; // Set the href attribute accordingly
  link.className = "txt8";
  link.textContent = "Basic of Python";

  var paragraph = document.createElement("p");
  paragraph.className = "m-0 txt9";
  paragraph.textContent = "Basic of Python";

  innerDiv.appendChild(link);
  innerDiv.appendChild(paragraph);

  newDiv.appendChild(newIcon);
  newDiv.appendChild(innerDiv);
  newListItem.appendChild(newDiv);

  var ellipsisIcon = document.createElement("i");
  ellipsisIcon.className = "fa-solid fa-ellipsis-vertical";
  newListItem.appendChild(ellipsisIcon);

  // Insert the new li element before the last li (which is the "Add new Lesson" button)
  lessonList.insertBefore(newListItem, lessonList.lastElementChild);
}

// Add event listener to the "Add new Lesson" button
document
  .querySelector(".addLessonButton")
  .addEventListener("click", addNewLesson);

document
  .getElementById("hideFieldsetButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Hide the fieldset by setting its display property to "none"
    document.getElementById("fieldsetToHide").style.display = "none";
    document.getElementById("cir").style.display = "none";
    // Show the new div by setting its display property to "block"
    document.getElementById("newDivToShow").style.display = "block";
  });

document
  .getElementById("hideFieldsetButton1")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Hide the fieldset by setting its display property to "none"
    document.getElementById("fieldsetToHide").style.display = "none";
    document.getElementById("cir").style.display = "none";
    // Show the new div by setting its display property to "block"
    document.getElementById("newDivToShow").style.display = "block";
  });

document
  .getElementById("hideFieldsetButton2")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Hide the fieldset by setting its display property to "none"
    document.getElementById("fieldsetToHide").style.display = "none";
    document.getElementById("cir").style.display = "none";
    // Show the new div by setting its display property to "block"
    document.getElementById("newDivToShow").style.display = "block";
  });

var mainSection = document.getElementById("fieldsetToHide");
var newDivToShow = document.getElementById("newDivToShow");

// Get reference to the "Back" button
var backButton = document.getElementById("backButton");

// Add event listener to the "Back" button
backButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Toggle the display property of the sections
  mainSection.style.display = "block";
  newDivToShow.style.display = "none";
});

// Get the modal
var modal = document.getElementById("popupModal");

// Get the button that opens the modal
var addButton = document.querySelector(".addContent");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
addButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

addButton.onclick = function (event) {
  modal.style.display = "block";
  event.preventDefault(); // prevent default action
};

closeBtn.onclick = function (event) {
  modal.style.display = "none";
  event.preventDefault(); // prevent default action
};

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const formFields = document.querySelectorAll("form fieldset");
  const nextBtn = document.getElementById("nextbutton1");
  const backBtn = document.getElementById("back");
  let currentStep = 0;

  function updateSteps() {
    steps.forEach((step, index) => {
      if (index < currentStep) {
        step.classList.add("done");
      } else if (index === currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("done", "active");
      }
    });

    if (currentStep === 0) {
      backBtn.disabled = true;
    } else {
      backBtn.disabled = false;
    }
    if (currentStep === steps.length - 1) {
      nextBtn.textContent = "Submit";
      nextBtn.type = "submit"; // Change button type to submit
    } else {
      nextBtn.textContent = "Next";
      nextBtn.type = "button"; // Change button type to button
    }

    // Show current form field and hide others
    formFields.forEach((field, index) => {
      if (index === currentStep) {
        field.style.display = "block";
      } else {
        field.style.display = "none";
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    } else {
      // Submit the form automatically on the last step
      document.getElementById("multi-step-form").submit();
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });

  updateSteps();
});
