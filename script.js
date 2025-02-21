const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const mobileNumber = document.getElementById('mobile-number').value.trim();
  const password = document.getElementById('password').value.trim();
  const userType = document.getElementById('user-type').value.trim();
  const addressLine1 = document.getElementById('address-line-1').value.trim();
  const addressLine2 = document.getElementById('address-line-2').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const pincode = document.getElementById('pincode').value.trim();

  let isValid = true;

  if (mobileNumber.length !== 10) {
    document.getElementById('mobile-number-error').innerText = 'Please enter a valid mobile number.';
    isValid = false;
  } else {
    document.getElementById('mobile-number-error').innerText = '';
  }

  if (password.length < 8) {
    document.getElementById('password-error').innerText = 'Please enter a password with at least 8 characters.';
    isValid = false;
  } else {
    document.getElementById('password-error').innerText = '';
  }

  if (userType === '') {
    document.getElementById('user-type-error').innerText = 'Please select a user type.';
    isValid = false;
  } else {
    document.getElementById('user-type-error').innerText = '';
  }

  if (addressLine1 === '') {
    document.getElementById('address-line-1-error').innerText = 'Please enter address line 1.';
    isValid = false;
  } else {
    document.getElementById('address-line-1-error').innerText = '';
  }

  if (city === '') {
    document.getElementById('city-error').innerText = 'Please enter city.';
    isValid = false;
  } else {
    document.getElementById('city-error').innerText = '';
  }

  if (state === '') {
    document.getElementById('state-error').innerText = 'Please enter state.';
    isValid = false;
  } else {
    document.getElementById('state-error').innerText = '';
  }

  if (pincode === '') {
    document.getElementById('pincode-error').innerText = 'Please enter pincode.';
    isValid = false;
  } else {
    document.getElementById('pincode-error').innerText = '';
  }

  if (isValid) {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobileNumber, password, userType, addressLine1, addressLine2, city, state, pincode })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const mobileNumber = document.getElementById('mobile-number').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();
  const userType = document.getElementById('user-type').value.trim();
  const addressLine1 = document.getElementById('address-line-1').value.trim();
  const addressLine2 = document.getElementById('address-line-2').value.trim();
  const city = document.getElementById('city').value.trim();
  const state = document.getElementById('state').value.trim();
  const pincode = document.getElementById('pincode').value.trim();

  let isValid = true;

  if (name === '') {
    document.getElementById('name-error').innerText = 'Please enter your name.';
    isValid = false;
  } else {
    document.getElementById('name-error').innerText = '';
  }

  if (mobileNumber.length !== 10) {
    document.getElementById('mobile-number-error').innerText = 'Please enter a valid mobile number.';
    isValid = false;
  } else {
    document.getElementById('mobile-number-error').innerText = '';
  }

  if (password.length < 8) {
    document.getElementById('password-error').innerText = 'Please enter a password with at least 8 characters.';
    isValid = false;
  } else {
    document.getElementById('password-error').innerText = '';
  }

  if (password !== confirmPassword) {
    document.getElementById('confirm-password-error').innerText = 'Passwords do not match.';
    isValid = false;
  } else {
    document.getElementById('confirm-password-error').innerText = '';
  }

  if (userType === '') {
    document.getElementById('user-type-error').innerText = 'Please select a user type.';
    isValid = false;
  } else {
    document.getElementById('user-type-error').innerText = '';
  }

  if (addressLine1 === '') {
    document.getElementById('address-line-1-error').innerText = 'Please enter address line 1.';
    isValid = false;
  } else {
    document.getElementById('address-line-1-error').innerText = '';
  }

  if (city === '') {
    document.getElementById('city-error').innerText = 'Please enter city.';
    isValid = false;
  } else {
    document.getElementById('city-error').innerText = '';
  }

  if (state === '') {
    document.getElementById('state-error').innerText = 'Please enter state.';
    isValid = false;
  } else {
    document.getElementById('state-error').innerText = '';
  }

  if (pincode === '') {
    document.getElementById('pincode-error').innerText = 'Please enter pincode.';
    isValid = false;
  } else {
    document.getElementById('pincode-error').innerText = '';
  }

  if (isValid) {
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mobileNumber, password, userType, addressLine1, addressLine2, city, state, pincode })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  }
});
