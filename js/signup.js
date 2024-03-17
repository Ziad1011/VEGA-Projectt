function validateSignUp() {
  // Reset previous error messages and remove error borders
  document.getElementById("fNameError").innerHTML = "";
  document.getElementById("lNameError").innerHTML = "";
  document.getElementById("eAddressError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  document.getElementById("fName").classList.remove("error-border");
  document.getElementById("lName").classList.remove("error-border");
  document.getElementById("eAddress").classList.remove("error-border");
  document.getElementById("password").classList.remove("error-border");

  var inputsArray = []; // Array to store input values

  // Get input values and push them into the array
  var fName = document.getElementById("fName").value.trim();
  var lName = document.getElementById("lName").value.trim();
  var gender = document.getElementById("Gender").value.trim();
  var age = document.getElementById("age").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var email = document.getElementById("eAddress").value.trim();
  var password = document.getElementById("password").value.trim();

  inputsArray.push(fName);
  inputsArray.push(lName);
  inputsArray.push(gender);
  inputsArray.push(age);
  inputsArray.push(phone);
  inputsArray.push(email);
  inputsArray.push(password);

  console.log(inputsArray);

  // Get values from the form
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var eAddress = document.getElementById("eAddress").value;
  var password = document.getElementById("password").value;

  // Check if any required field is empty
  if (fName === "") {
    document.getElementById("fNameError").style.display = "block";
    document.getElementById("fNameError").innerHTML =
      "Please enter your first name";
    document.getElementById("fName").classList.add("error-border");
    return false;
  } else {
    document.getElementById("fName").classList.remove("error-border");
  }

  if (lName === "") {
    document.getElementById("lNameError").style.display = "block";

    document.getElementById("lNameError").innerHTML =
      "Please enter your last name";
    document.getElementById("lName").classList.add("error-border");
    return false;
  } else {
    document.getElementById("lName").classList.remove("error-border");
  }

  if (eAddress === "") {
    document.getElementById("eAddressError").style.display = "block";

    document.getElementById("eAddressError").innerHTML =
      "Please enter your email address";
    document.getElementById("eAddress").classList.add("error-border");
    return false;
  } else {
    document.getElementById("eAddress").classList.remove("error-border");
  }

  // Email validation using a regular expression
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(eAddress)) {
    document.getElementById("eAddressError").innerHTML =
      "Enter a valid email address";
    document.getElementById("eAddress").classList.add("error-border");
    return false;
  } else {
    document.getElementById("eAddress").classList.remove("error-border");
  }

  if (password === "") {
    document.getElementById("passwordError").style.display = "block";

    document.getElementById("passwordError").innerHTML =
      "Please enter your password";
    document.getElementById("password").classList.add("error-border");
    return false;
  } else {
    document.getElementById("password").classList.remove("error-border");
  }
}
