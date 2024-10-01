document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate backend login request
    if (email && password) {
        // Normally, here you would call your backend API to verify the credentials.
        alert("Logged in successfully!");
        window.location.href = "home.html"; // Redirect to home page on successful login
    } else {
        alert("Invalid email or password");
    }
});
