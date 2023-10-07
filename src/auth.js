//////////   initialization   ///////////
let usernames = [];
let passwords = [];
////////////////////////////////////////

const getUsers = () => {
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((array) => {
      array.forEach((arrayItem) => {
        usernames.push(arrayItem.username);
        passwords.push(arrayItem.password);
      });
      console.log("usernames", usernames);
      console.log("passwords", passwords);
    })
    .catch((err) => {
      console.error(err);
    });
};
getUsers();

///////////////////////////////////////////

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let loginPassword = document.getElementById("loginPassword").value;
  console.log("username", username);
  console.log("loginPassword", loginPassword);
  fetchUsers(username, loginPassword);
});

const fetchUsers = (username, loginPassword) => {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: `${username}`,
      password: `${loginPassword}`,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
};
