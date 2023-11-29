console.log('Script.js loaded');

function displayEntries(entries) {
    console.log('Displaying entries:', entries);
    const entriesContainer = document.getElementById('entriesContainer');
    entriesContainer.innerHTML = '';

    entries.forEach(entry => {
        const entryBox = document.createElement('div');
        entryBox.classList.add('entry-box');

        const nameHeading = document.createElement('h2');
        nameHeading.textContent = entry.name;

        const emailParagraph = document.createElement('p');
        emailParagraph.textContent = entry.email;

        entryBox.appendChild(nameHeading);
        entryBox.appendChild(emailParagraph);

        entriesContainer.appendChild(entryBox);
    });
}

function fetchAndDisplayEntries() {
    fetch('/view_entries')
        .then(response => response.json())
        .then(data => {
            if (data.entries) {
                displayEntries(data.entries);
            }
        })
        .catch(error => {
            console.error('Error fetching entries:', error);
        });
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate form data (you can add more validation as needed)

    // Check if the user already exists
    const existingUsers = document.querySelectorAll('.entry-box p');
    const isDuplicate = Array.from(existingUsers).some(user => user.textContent === email);

    if (isDuplicate) {
        alert('You are already entered into the raffle.');
        return;
    }

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
        fetchAndDisplayEntries(); // Update entries after submission
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const submitFormButton = document.getElementById('submitButton');
    if (submitFormButton) {
        console.log('Submit button found. Attaching click event.');
        submitFormButton.addEventListener('click', submitForm);
    } else {
        console.error('Submit button not found. Check the HTML structure.');
    }

    // Fetch and display entries on page load
    fetchAndDisplayEntries();
});
