// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add form submission handler
    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // Add form submission logic here (e.g., AJAX request)
            alert('Appointment request submitted!');
        });
    }
});
