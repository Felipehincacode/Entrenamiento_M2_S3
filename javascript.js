document.addEventListener('DOMContentLoaded', () => {
    const sky = document.getElementById('sky');
    const buttons = document.querySelectorAll('.a-frame-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const src = button.dataset.src;
            if (src) {
                sky.setAttribute('src', src);
            }

            // Handle active state for buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}); 