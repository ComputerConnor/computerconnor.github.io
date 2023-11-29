function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate form data (you can add more validation as needed)

    // Send data to server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Display a success message
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}
