const div1 = document.getElementById("zz");
const div2 = document.getElementById("zzz");

const showDiv1Button = document.getElementById("showDiv1");
const showDiv2Button = document.getElementById("showDiv2");

function myFunction() {
  var x = document.getElementById("zz");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var submitButton = document.getElementById("next");

submitButton.addEventListener("click", function () {
  var option1Checked = document.getElementById("standard").checked;
  var option2Checked = document.getElementById("custom").checked;

  if (option1Checked) {
    window.location.href = "RoadmapDetail.html";
  } else if (option2Checked) {
    div1.style.display = "none";
    div2.style.display = "block";
  } else {
    alert("Please select an option");
  }
});

var closeBtn = document.getElementById("close1");
var myDiv = document.getElementById("zzz");

closeBtn.addEventListener("click", function () {
  div2.style.display = "none";
  div1.style.display = "block";
});

var esc = document.getElementById("esc");
esc.addEventListener("click", function () {
  div2.style.display = "none";
  div1.style.display = "none";
});

// let saveButton = document.querySelectorAll(".saveButton");
// const dataArray = [];
// saveButton.forEach((el) =>
//   el.addEventListener("click", function () {
//     dataArray.push(el.textContent);

//     console.log(dataArray);
//     el.style.backgroundColor = "#e98016";
//   })
// );

const saveButtons = document.querySelectorAll(".saveButton");
const dataArray = [];

saveButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.textContent;

    // Check if button text is already in the array
    const index = dataArray.indexOf(buttonText);

    if (index === -1) {
      dataArray.push(buttonText);
      console.log(dataArray);
      button.style.backgroundColor = "#e98016";
    } else {
      dataArray.splice(index, 1);
      console.log(dataArray);
      button.style.backgroundColor = "white";
    }
  });
});

var closeButton = document.getElementById("close");

closeButton.addEventListener("click", function () {
  // Navigate to the quiz page
  window.location.href = "quiz.html";
});

var xhr = new XMLHttpRequest();
xhr.open("POST", "your_php_script.php", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request was successful, do something with the response
      console.log(xhr.responseText);
    } else {
      // Request failed
      console.error("Request failed: " + xhr.status);
    }
  }
};

xhr.send(JSON.stringify(dataArray));
