const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('input', () => {
  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clearing the previous error messages
  loginError.textContent = '';
  usernameError.textContent = '';
  passwordError.textContent = '';

  // Validating the fields
  if (usernameInput.value.trim() === '') {
    usernameError.textContent = 'Please enter your username.';
    return;
  }

  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Please enter your password.';
    return;
  }

  // Retrieve registration data from local storage
  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  // Check if the entered username exists in the registration data
  if (usernameInput.value.trim() !== storedUserData.username) {
    loginError.textContent = 'Username not found.';
    return;
  }

  // Check if the entered password matches the password from registration data
  if (passwordInput.value.trim() !== storedUserData.password) {
    loginError.textContent = 'Incorrect password.';
    return;
  }

  // Redirect to profile page if login is successful
  window.location.href = 'profile.html';
});
