// script.js
document.getElementById('displayButton').addEventListener('click', function() {
  const passwordInput = document.getElementById('password').value;
  const usernameInput = document.getElementById('username').value;
  const passwordDisplay = document.getElementById('passwordDisplay');
  const usernameDisplay=document.getElementById('usernameDisplay');

  if (passwordInput, usernameInput) {
    usernameDisplay.textContent= `Your username is: ${usernameInput}`;
    passwordDisplay.textContent = `Your password is: ${passwordInput}`;
  } else {
    usernameDisplay.textContent=`Please enter a username`;
    passwordDisplay.textContent = 'Please enter a password!';
  }
});