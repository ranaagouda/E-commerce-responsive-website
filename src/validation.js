function validateName() {
  //name
  let name = document.getElementById("name").value;
  if (name.length < 3) {
    alert("Name should be at least 3 characters long.");
    return false;
  }
}

function validateEmail() {
  //email
  let email = document.getElementById("email").value;
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter a valid email address.");
    return false;
  }
}

function validatePassword() {
  //password
  var decimal =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  let password = document.getElementById("password").value;
  if (password.match(decimal)) {
    alert(
      "Password should contain at least one capital letter and one number, and be at least 8 characters long."
    );
    return false;
  }
}
