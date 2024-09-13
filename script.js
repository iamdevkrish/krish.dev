const interests = ['Design', 'User Interfaces', 'User interaction', 'Experimental Web',];
let currentIndex = 0;
const changingText = document.getElementById('changing-text');

function changeText() {
    changingText.classList.add('fade-out');
    
    setTimeout(() => {
        changingText.textContent = interests[currentIndex];
        changingText.classList.remove('fade-out');
        changingText.classList.add('fade-in');
        
        currentIndex = (currentIndex + 1) % interests.length;
        
        setTimeout(() => {
            changingText.classList.remove('fade-in');
        }, 500);
    }, 500);
}

// Initial text set
changingText.textContent = interests[0];

// Change text every 3 seconds
setInterval(changeText, 3000);