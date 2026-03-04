
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

//Project card
const projects = [
  {
    title: "QuickPay",
    description: "Simple payroll system for managing employees, working days, and payroll calculations.",
    image: "assets/images/quickpay.png",
    link: "#"
  },
  {
    title: "UKM Outlet",
    description: "An online shopping platform for Universiti Kebangsaan Malaysia students",
    image: "assets/images/ukmoutlet.png",
    link: "#"
  },
  {
    title: "Exploring Anatomy",
    description: "Human anatomy learning system through multimedia for fifth year students",
    image: "assets/images/Anatomy.png",
    link: "#"
  },
  {
    title: "Tora The Explora",
    description: "A short story about the cold sudden flood, taking her on a wonderful andventure",
    image: "assets/images/Tora.png",
    link: "#"
  },
  {
    title: "Trapped with the Undead",
    description: "One house. No escape. They are already inside",
    image: "assets/images/zombie.png",
    link: "#"
  },
  {
    title: "Upcoming Project",
    description: "A new project currently under development. Stay tuned!",
    image: "assets/images/soon.png",
    link: "#",
    upcoming: true
  }
];

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    const thumb = `<div class="project-thumb" style="background-image: url('${project.image}')"></div>`;

    card.innerHTML = `
      ${thumb}

      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.upcoming ? `<span class="upcoming-badge">Upcoming</span>` : ""}
      </div>

      <span class="project-arrow">&#8599;</span>
    `;

    if (!project.upcoming && project.link) {
      card.addEventListener("click", () => {
        window.open(project.link, "_blank");
      });
    }

    grid.appendChild(card);
  });
}

// Run after page loads
document.addEventListener("DOMContentLoaded", renderProjects);
