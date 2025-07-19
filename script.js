// script.js

// === Mobile Navigation Toggle ===
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}

// === Scroll to Top Button (optional) ===
const scrollTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === Highlight Active Nav Link on Scroll ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('text-indigo-600', 'font-semibold');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-indigo-600', 'font-semibold');
    }
  });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  // === Mobile Navigation Toggle ===
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });
  }

  // === Scroll to Top Button (optional) ===
  const scrollTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === Highlight Active Nav Link on Scroll ===
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-indigo-600', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-indigo-600', 'font-semibold');
      }
    });
  });

const mainText = "Hi, I am Priyanshi Seth.";
const subWords = [
  { text: "Developer.", color: "text-purple-300" },
  { text: " Coder.", color: "text-purple-500" },
  { text: " Problem Solver.", color: "text-purple-700" },
];
const speed = 70;
let i = 0;
let wordIndex = 0;
let charIndex = 0;

function typeMain() {
  if (i < mainText.length) {
    document.getElementById("typewriter").innerHTML += mainText.charAt(i);
    i++;
    setTimeout(typeMain, speed);
  } else {
    setTimeout(typeSub, 400);
  }
}

function typeSub() {
  if (wordIndex < subWords.length) {
    const currentWord = subWords[wordIndex];
    const spanId = `word-${wordIndex}`;

    // Create a span for this word only once
    if (!document.getElementById(spanId)) {
      const span = document.createElement("span");
      span.id = spanId;
      span.className = currentWord.color + " font-semibold";
      document.getElementById("subtitle").appendChild(span);
    }

    const span = document.getElementById(spanId);
    span.innerHTML += currentWord.text.charAt(charIndex);
    charIndex++;

    if (charIndex < currentWord.text.length) {
      setTimeout(typeSub, speed);
    } else {
      wordIndex++;
      charIndex = 0;
      setTimeout(typeSub, speed);
    }
  }
}

window.onload = typeMain;
})