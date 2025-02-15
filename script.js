document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    
    function showProgress() {
        progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            if (bar.getBoundingClientRect().top < window.innerHeight - 100) {
                bar.style.width = targetWidth;
                bar.style.transition="width 3s ease-in-out"
            }
        });
    }

    window.addEventListener("scroll", showProgress);
    showProgress();
});
document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "A Full Stack Web Developer ",
        "An AI and ChatGPT Expert ",
        "A Professional Coder ",
        "A Computer Science Engineer "
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100; // Typing speed
    const deleteSpeed = 50; // Deleting speed
    const pauseAfterTyping = 1000; // 1s pause after fully typing
    const animatedText = document.getElementById("animated-text");

    function typeEffect() {
        let currentText = texts[textIndex];

        if (isDeleting) {
            animatedText.textContent = currentText.substring(0, charIndex--);
        } else {
            animatedText.textContent = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Wait for 1 second AFTER the word is fully typed
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, pauseAfterTyping);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
    }

    typeEffect();
});

