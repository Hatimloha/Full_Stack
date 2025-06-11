let countdownInterval; // To store the interval ID for clearing

/**
 * Initializes and updates a countdown timer in a div with class "clock-box".
 * The countdown is set for a duration of less than one hour (e.g., 30 minutes).
 */
function downTime() {
    const clockBox = document.querySelector(".clock-box"); // Use querySelector for the first element with the class

    if (!clockBox) {
        console.error("Error: Element with class 'clock-box' not found.");
        return;
    }

    // Set the target time: current time + 30 minutes
    // You can adjust '30' to any number of minutes less than 60
    const now = new Date();
    const targetTime = now.getTime() + (30 * 60 * 1000); // 30 minutes in milliseconds

    // Clear any existing interval to prevent multiple timers running
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = targetTime - currentTime;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            clockBox.textContent = "TIME'S UP!";
            return;
        }

        // Calculate minutes and seconds from the remaining distance
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format minutes and seconds with leading zeros (first 2 digits)
        const displayMinutes = String(minutes).padStart(2, '0');
        const displaySeconds = String(seconds).padStart(2, '0');

        // Update the display
        clockBox.textContent = `${displayMinutes}m ${displaySeconds}s`;

    }, 1000); // Update every 1 second (1000 milliseconds)
}

// Start the countdown when the page loads
// Make sure you have an HTML element with class="clock-box" in your HTML body
window.onload = downTime;
