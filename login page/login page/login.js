function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Add authentication logic here (this is just a basic example)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}