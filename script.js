// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Simulate backend login request
//     if (email && password) {
//         // Normally, here you would call your backend API to verify the credentials.
//         alert("Logged in successfully!");
//         window.location.href = "home.html"; // Redirect to home page on successful login
//     } else {
//         alert("Invalid email or password");
// backebend server side programming
//bacyfay//
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
                message: document.getElementById('message').value
        };

        try {
            // Send data to the backend using Fetch API
            const response = await fetch('/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle success - you could show a message to the user
                const result = await response.json();
                alert(result.message || 'Form submitted successfully!');
                contactForm.reset(); // Clear the form after successful submission
            } else {
                // Handle errors - notify the user
                const error = await response.json();
                alert(error.error || 'Something went wrong, please try again.');
            }
        } catch (err) {
            console.error('Error submitting the form:', err);
            alert('There was an error submitting the form. Please try again later.');
        }
    });
});

