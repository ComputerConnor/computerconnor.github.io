console.log('Pick Random Winner script loaded');

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

function pickRandom() {
    const duration = 5000; // Animation duration in milliseconds
    const entriesContainer = document.getElementById('entriesContainer');
    const entryBoxes = entriesContainer.querySelectorAll('.entry-box');

    if (entryBoxes.length === 0) {
        console.error('No entry boxes found.');
        return;
    }

    // Reset previous highlighting
    entryBoxes.forEach(entryBox => {
        entryBox.classList.remove('highlighted');
    });

    let startTime;
    let animationFrame;

    function animate(time) {
        if (!startTime) startTime = time;

        const progress = time - startTime;
        const randomIndex = Math.floor(Math.random() * entryBoxes.length);

        entryBoxes.forEach((entryBox, index) => {
            if (index === randomIndex) {
                entryBox.classList.add('highlighted');
            } else {
                entryBox.classList.remove('highlighted');
            }
        });

        console.log('Animating...'); // Log to check if animation is running

        if (progress < duration) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            // Animation complete, declare the winner
            const randomWinner = entryBoxes[randomIndex];
            if (randomWinner) {
                randomWinner.classList.add('won'); // Mark the winner as won
            } else {
                console.error('Random winner not found. :(');
            }
        }
    }

    // Start the animation
    animationFrame = requestAnimationFrame(animate);
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

document.addEventListener('DOMContentLoaded', () => {
    const pickButton = document.getElementById('pickButton');
    if (pickButton) {
        console.log('Pick button found. Attaching click event.');
        pickButton.addEventListener('click', pickRandom);
    } else {
        console.error('Pick button not found. Check the HTML structure.');
    }

    // Fetch and display entries on page load
    fetchAndDisplayEntries();
});
