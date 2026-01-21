
// Back to top
const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  };

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
}

// Typing animation 
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Alia Syahira";
  const typingText = document.getElementById("typing-text");
  const cursor = document.getElementById("typing-cursor");

  if (!typingText || !cursor) return;

  const typingSpeed = 80;      // ms per character
  const pauseDuration = 3000;  // 3 seconds
  let index = 0;

  function startTyping() {
    typingText.textContent = "";
    index = 0;
    cursor.classList.remove("hidden");
    typeNextChar();
  }

  function typeNextChar() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, typingSpeed);
    } else {
      // typing finished → hide caret after a short delay
      setTimeout(() => {
        cursor.classList.add("hidden");
      }, 500);

      // restart typing after pause
      setTimeout(startTyping, pauseDuration);
    }
  }

  startTyping();
});

// Section Reveal on Scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(section => observer.observe(section));




