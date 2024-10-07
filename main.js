// 
// Wait for the DOM to fully load before executing scripts
//
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is connected!');

    // 
    // Select the button using its ID
    //
    const actionButton = document.getElementById('action-button');

    // 
    // Select the click counter display using its ID
    //
    const clickCountDisplay = document.getElementById('click-count');

    // 
    // Initialize a counter variable to keep track of clicks
    //
    let clickCount = 0;

    // 
    // Add a click event listener to the button
    //
    actionButton.addEventListener('click', () => {
        // 
        // Increment the click counter
        //
        clickCount++;

        // 
        // Determine the correct singular or plural form
        //
        let timeText = 'times';
        if (clickCount === 1) {
            timeText = 'time';
        }

        // 
        // Update the click counter display with the new count
        //
        clickCountDisplay.textContent = `Button poked ${clickCount} ${timeText}.`;

        // 
        // Log the button click to the console
        //
        console.log(`The action button was poked ${clickCount} ${timeText}.`);
    });
});
