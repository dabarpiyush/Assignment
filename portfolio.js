document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate name
    var namePattern = /^[A-Za-z]+$/;
    if (name.length < 3 || !namePattern.test(name)) {
        document.getElementById('name-error').textContent = 'Name should be at least 3 characters and contain only text';
        return;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        return;
    }

    // Validate message
    if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Message should be at least 10 characters';
        return;
    }

    // If all validations pass, show success message
    var form = document.getElementById('contact-form');
    var successMessage = document.createElement('div');
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.classList.add('valid-feedback');
    form.appendChild(successMessage);

    // Optional: You can reset the form after successful submission
    form.reset();
});
