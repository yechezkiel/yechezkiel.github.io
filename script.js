// Typed Text Animation
const typedTextElement = document.getElementById('typed-text');
const texts = [
    'Secure Communication Systems',
    'FPGA-based Solutions',
    'Embedded Systems',
    'DSP Algorithms',
    'CAN Telemetry Systems'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    if (!typedTextElement) return;

    const currentText = texts[textIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
        return;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeText, speed);
}

// Start typing animation
if (typedTextElement) {
    setTimeout(typeText, 500);
}

// Cursor Glow Effect
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll); // ✅ FIXED

// Mobile Menu Toggle (optional but already in HTML)
const menuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
