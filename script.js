// Remove hash to prevent footer jump
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});


// Always start page from top on reload
window.history.scrollRestoration = "manual";

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 800);
});


const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        document.querySelectorAll('#nav-list li a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });

        const nameText = "Shreyas Waghmare";
let index = 0;
const speed = 100;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < nameText.length) {
    typingElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100 && elementBottom > 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 800); // delay for smooth feel
});

const skillSection = document.getElementById("skills");
const bars = document.querySelectorAll(".bar-fill");

function animateSkillsOnScroll() {
  const sectionTop = skillSection.getBoundingClientRect().top;
  const sectionBottom = skillSection.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 120 && sectionBottom > 120) {
    bars.forEach(bar => {
      bar.style.width = bar.dataset.percent + "%";
    });
  } else {
    bars.forEach(bar => {
      bar.style.width = "0%";
    });
  }
}

window.addEventListener("scroll", animateSkillsOnScroll);



const skillTexts = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer",
  "Creative Thinker"
];

const skillElement = document.getElementById("typed-text");

let skillIndex = 0;
let charIndex = 0;
let isTyping = true;

const typingSpeed = 110;
const deletingSpeed = 70;
const pauseTime = 1000;

function typeSkills() {
  const currentSkill = skillTexts[skillIndex];

  if (isTyping) {
    skillElement.textContent = currentSkill.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentSkill.length) {
      setTimeout(() => isTyping = false, pauseTime);
    }
  } else {
    skillElement.textContent = currentSkill.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isTyping = true;
      skillIndex = (skillIndex + 1) % skillTexts.length;
    }
  }

  setTimeout(typeSkills, isTyping ? typingSpeed : deletingSpeed);
}

typeSkills();
