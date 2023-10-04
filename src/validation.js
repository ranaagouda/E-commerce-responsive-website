function validateName() {
  //name
  console.log("name", name);
  let name = getElementById("name").value;
  if (name.length < 3) {
    alert("Name should be at least 3 characters long.");
    return false;
  }
}

function validateEmail() {
  //email
  console.log("email", email);
  let email = getElementById("email").value;
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter a valid email address.");
    return false;
  }
}

function validatePassword() {
  //password
  console.log("password", password);
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  let password = getElementById("password").value;
  if (password.match(decimal)) {
    alert(
      "Password should contain at least one capital letter and one number, and be at least 8 characters long."
    );
    return false;
  }
}
