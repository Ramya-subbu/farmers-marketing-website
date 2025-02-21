const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send a POST request to login.php
  fetch('login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=${username}&password=${password}`
  })
  .then((response) => response.text())
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
});


  window.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('user-Type').value;
  const addressLine1 = document.getElementById('address-line-1').value;
  const addressLine2 = document.getElementById('address-line-2').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const pincode = document.getElementById('pincode').value;
  });
});
  // Send a POST request to register.php
  fetch('register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
      body: `username=${username}&password=${password}&user-Type=${userType}&address-line-1=${addressLine1}&address-line-2=${addressLine2}&city=${city}&state=${state}&pincode=${pincode}`
  })
  .then((response) => response.text())
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// Fetch user data from backend API

fetch('api.php')
    .then(response => response.json())
    .then(data => {
        // Update frontend HTML to display user data
        console.log(data);
    })
    .catch(error => console.error(error));
