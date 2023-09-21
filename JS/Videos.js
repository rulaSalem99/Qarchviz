'use strict';

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const attachmentsContainer = document.getElementById('attachmentsContainer');
const feedbackContainer = document.getElementById('feedbackContainer');
const paragraphContainer = document.getElementById('paragraphContainer');
const content = document.getElementById('content');
const feedbackText = document.getElementById('feedbackText');
const sendFeedbackButton = document.getElementById('sendFeedback');

// Hide all containers initially
attachmentsContainer.style.display = 'none';
feedbackContainer.style.display = 'none';
paragraphContainer.style.display = 'none';

button1.addEventListener('click', () => {
    attachmentsContainer.style.display = 'block';
    feedbackContainer.style.display = 'none';
    paragraphContainer.style.display = 'none';
    content.innerHTML = ''; // Clear content
});

button2.addEventListener('click', () => {
    attachmentsContainer.style.display = 'none';
    feedbackContainer.style.display = 'block';
    paragraphContainer.style.display = 'none';
    content.innerHTML = ''; // Clear content
});

button3.addEventListener('click', () => {
    attachmentsContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    paragraphContainer.style.display = 'block';
    content.innerHTML = feedbackText.value; // Display feedback content
});

sendFeedbackButton.addEventListener('click', () => {
    // You can handle the "Send Feedback" button click event here
    // For now, let's just display a message
    alert('Your feedback was sent. Thank you!');
});


function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(`dropdown${dropdownId}`);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';}