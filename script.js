// Get the login and signup forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Add event listeners to the forms
loginForm.addEventListener('submit', handleLogin);
signupForm.addEventListener('submit', handleSignup);

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const password = document.getElementById('password').value;

    // Validate input fields
    if (mobileNumber === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Call the login API here
    console.log('Login form submitted:', mobileNumber, password);

    // Simulate API response
    const response = {
        status: 'success',
        message: 'Login successful',
        data: {
            token: 'abc123',
            name: 'John Doe',
            mobileNumber: '1234567890'
        }
    };

    // Handle API response
    if (response.status === 'success') {
        // Save token and user data to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));

        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert(response.message);
    }
}

// Handle signup form submission
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate input fields
    if (name === '' || mobileNumber === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Call the signup API here
    console.log('Signup form submitted:', name, mobileNumber, password);

    // Simulate API response
    const response = {
        status: 'success',
        message: 'Signup successful',
        data: {
            token: 'abc123',
            name: name,
            mobileNumber: mobileNumber
        }
    };

    // Handle API response
    if (response.status === 'success') {
        // Save token and user data to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));

        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert(response.message);
    }
}
