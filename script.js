const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementsByName('name')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let message = document.getElementsByName('message')[0].value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
    } else {
        // Here you would typically send the form data to a server using fetch or XMLHttpRequest
        alert('Message sent successfully');
        form.reset();
    }
});