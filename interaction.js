// interaction.js

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');

let noClicks = 0;

noBtn.addEventListener('click', () => {
    noClicks++;
    if (noClicks === 10) {
        noBtn.style.display = 'none'; // Hide the "No" button
    }
    yesBtn.style.fontSize = `${18 + noClicks * 2}px`; // Gradually increase button size
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = `Yayyyyy!!<br>In your "yes," a garden blooms<br>
                        Roses whisper, filling rooms<br>
                        Valentine's Day; a love embrace,<br>
                        With you, Angel, Joy finds its Perfect Place 🌹`;
});
