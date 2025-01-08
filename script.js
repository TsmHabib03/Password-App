// script.js
document.getElementById('displayButton').addEventListener('click', function() {
  const passwordInput = document.getElementById('password').value;
  const usernameInput = document.getElementById('username').value;
  const usernameInput1=usernameInput.includes("@");
  const passwordDisplay = document.getElementById('passwordDisplay');
  const usernameDisplay=document.getElementById('usernameDisplay');

  if (passwordInput) {
    
    passwordDisplay.textContent = `Your password is: ${passwordInput}`;
  } else {
    passwordDisplay.textContent = 'Please enter a password!';
  }
  if(usernameInput1){
    usernameDisplay.textContent= `Your username is: ${usernameInput}`;
  }
  else {
  usernameDisplay.textContent = `Please enter a username`;
  }
});