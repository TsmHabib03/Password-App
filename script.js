// script.js
document.getElementById('displayButton').addEventListener('click', function() {
  const passwordInput = document.getElementById('password').value;
  const passwordDisplay = document.getElementById('passwordDisplay');

  if (passwordInput) {
    passwordDisplay.textContent = `Your password is: ${passwordInput}`;
  } else {
    passwordDisplay.textContent = 'Please enter a password!';
  }
});