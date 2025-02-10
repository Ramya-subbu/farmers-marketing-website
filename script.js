const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value.trim();
    const password = document.getElementById('password').value.trim();
    const userType = document.getElementById('user-type').value.trim();

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

    if (isValid) {
        // Submit the login form
        loginForm.submit();
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mobileNumber = document.getElementById('mobile-number').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const userType = document.getElementById('user-type').value.trim();

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

    if (isValid) {
        // Submit the signup form
        signupForm.submit();
    }
});
