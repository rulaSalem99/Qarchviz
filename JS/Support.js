document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            const answer = toggle.parentElement.nextElementSibling;
            answer.classList.toggle('active');
            toggle.textContent = answer.classList.contains('active') ? '-' : '+';
        });
    });
});
