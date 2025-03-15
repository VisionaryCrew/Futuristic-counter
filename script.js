// Current Time Display
function updateCurrentTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.getElementById('currentTime').textContent = `Current Time: ${currentTime}`;
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

// Countdown Timer
document.getElementById('startTimer').addEventListener('click', function () {
    const dateInput = document.getElementById('dateInput').value;
    if (!dateInput) {
        alert('Please select a date.');
        return;
    }
    const targetDate = new Date(dateInput);
    const now = new Date();
    if (targetDate <= now) {
        alert('Please select a future date.');
        return;
    }

    const countdown = setInterval(() => {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            document.getElementById('chime').play();
            document.getElementById('message').style.display = 'block';
            return;
        }

        const years = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the rotation of the strips
        document.getElementById('years').querySelector('.strip').style.transform = `rotate(${(years / 100) * 360}deg)`;
        document.getElementById('months').querySelector('.strip').style.transform = `rotate(${(months / 12) * 360}deg)`;
        document.getElementById('weeks').querySelector('.strip').style.transform = `rotate(${(weeks / 52) * 360}deg)`;
        document.getElementById('days').querySelector('.strip').style.transform = `rotate(${(days / 365) * 360}deg)`;
        document.getElementById('hours').querySelector('.strip').style.transform = `rotate(${(hours / 24) * 360}deg)`;
        document.getElementById('minutes').querySelector('.strip').style.transform = `rotate(${(minutes / 60) * 360}deg)`;
        document.getElementById('seconds').querySelector('.strip').style.transform = `rotate(${(seconds / 60) * 360}deg)`;

        // Update the text content with actual numbers
        document.getElementById('years').querySelector('.number').textContent = years;
        document.getElementById('months').querySelector('.number').textContent = months;
        document.getElementById('weeks').querySelector('.number').textContent = weeks;
        document.getElementById('days').querySelector('.number').textContent = days;
        document.getElementById('hours').querySelector('.number').textContent = hours;
        document.getElementById('minutes').querySelector('.number').textContent = minutes;
        document.getElementById('seconds').querySelector('.number').textContent = seconds;

        // Trigger tickling effect
        const timeUnits = document.querySelectorAll('.time-unit');
        timeUnits.forEach(unit => {
            unit.classList.add('tickle');
            setTimeout(() => {
                unit.classList.remove('tickle');
            }, 500); // Remove the class after the animation completes
        });
    }, 1000); // Update every second
});

// Message Buttons
document.getElementById('yesButton').addEventListener('click', function () {
    document.getElementById('messageText').textContent = 'Time to rise!! My hero!! 🚀';
});

document.getElementById('noButton').addEventListener('click', function () {
    document.getElementById('messageText').textContent = 'Time to die!! 💀';
});