// Set the raffle address and end date
const raffleAddress = 'your-shib-address-here';
const raffleEndDate = new Date('2024-07-25T00:00:00');

// Display the raffle address
document.getElementById('raffleAddress').innerText = raffleAddress;

// Countdown timer
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = raffleEndDate - now;

    if (timeRemaining <= 0) {
        countdownElement.innerText = 'Raffle has ended';
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
