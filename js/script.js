const interests = ['Design', 'User Interfaces', 'User interaction', 'Experimental Web'];
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

// Timeline functionality
const timelineLink = document.getElementById('timeline-link');
const modal = document.getElementById('timeline-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const timelineContainer = document.getElementById('timeline-container');

// Sample timeline data (replace this with your actual data)
const timelineEntries = [
    { date: '2024-09-27', content: 'made changes to website to show my daily logs for next 100Days' },
    { date: '2024-09-27', content: 'test' },
    
   
    
    // Add more entries as needed
];

function createTimelineEntry(entry) {
    const entryElement = document.createElement('div');
    entryElement.classList.add('timeline-entry');

    const dateElement = document.createElement('div');
    dateElement.classList.add('timeline-date');
    dateElement.textContent = new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const contentElement = document.createElement('div');
    contentElement.classList.add('timeline-content');
    contentElement.textContent = entry.content;

    entryElement.appendChild(dateElement);
    entryElement.appendChild(contentElement);

    return entryElement;
}

function populateTimeline() {
    timelineContainer.innerHTML = ''; // Clear existing entries
    timelineEntries.forEach(entry => {
        const entryElement = createTimelineEntry(entry);
        timelineContainer.appendChild(entryElement);
    });
}

function openModal() {
    modal.style.display = 'block';
    populateTimeline();
}

function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
timelineLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
