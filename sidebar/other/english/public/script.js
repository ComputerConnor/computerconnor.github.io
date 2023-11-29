// Add this function to display entries in the entries-container
function displayEntries(entries) {
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
    // Fetch and display entries after submission
    fetch('/view_entries')
        .then(response => response.json())
        .then(data => {
            if (data.entries) {
                displayEntries(data.entries);
            }
        })
        .catch(error => {
            console.error('Error fetching entries:', error);
            alert('An error occurred while fetching entries. Please try again later.');
        });
}
