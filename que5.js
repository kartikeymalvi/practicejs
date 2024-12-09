
let user = prompt("Please enter the number you want to");


user = parseInt(user, 10);

if (isNaN(user) || user <= 0) {
  alert("Please enter a valid positive number.");
} else {

  let randomNumber = Math.floor(Math.random() * user);

  let head = document.createElement("h1");

  document.body.appendChild(head);

  head.innerHTML = randomNumber;
}
