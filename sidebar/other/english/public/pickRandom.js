function pickRandom() {
    const entryBoxes = document.querySelectorAll('.entry-box');
    
    // Reset previous highlighting
    entryBoxes.forEach(entryBox => {
        entryBox.classList.remove('highlighted');
    });

    // Pick a random winner
    const randomIndex = Math.floor(Math.random() * entryBoxes.length);
    const randomWinner = entryBoxes[randomIndex];

    // Highlight the selected winner
    randomWinner.classList.add('highlighted');
}
