document.addEventListener("DOMContentLoaded", function (event) {
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});
var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener("click", function (e) {
  e.preventDefault();
});

var dropdownButton = document.getElementById("dropdownButton");
var dropdownMenu = document.getElementById("dropdownMenu");

// Add event listener to the dropdown button
dropdownButton.addEventListener("click", function () {
  // Toggle the display of the dropdown menu
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

// Close the dropdown when clicking outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    dropdownMenu.style.display = "none";
  }
};
