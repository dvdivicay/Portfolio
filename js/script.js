const navButtons = document.querySelectorAll('.nav-button');
const indicator = document.querySelector('.nav-indicator');

function moveIndicatorTo(button) {
  window.requestAnimationFrame(() => {
    const offsetLeft = button.offsetLeft;
    const width = button.offsetWidth;
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${offsetLeft}px)`;
  });
}

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    moveIndicatorTo(button);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const activeButton = document.querySelector('.nav-button.active');
  if (activeButton) {
    moveIndicatorTo(activeButton);
  }
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');

  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  const activeButton = document.querySelector('.nav-button.active');
  if (activeButton) {
    moveIndicatorTo(activeButton);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn");
  const homeSection = document.getElementById("home");

  homeBtn?.addEventListener("click", () => {
    homeSection.scrollIntoView({
      behavior: "smooth"
    });
  });
  
  const aboutBtn = document.getElementById("about-btn");
  const aboutSection = document.getElementById("about");

  aboutBtn?.addEventListener("click", () => {
    aboutSection.scrollIntoView({
      behavior: "smooth"
    });
  });

  const projectsBtn = document.getElementById("projects-btn");
  const projectsSection = document.getElementById("projects");

  projectsBtn?.addEventListener("click", () => {
    projectsSection.scrollIntoView({
      behavior: "smooth"
    });
  });

  const skillsBtn = document.getElementById("skills-btn");
  const skillsSection = document.getElementById("skills");

  skillsBtn?.addEventListener("click", () => {
    skillsSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  const leftElement = document.querySelector(".about-text-container");
  const rightElement = document.querySelector(".ss-container");

  leftElement?.classList.add("slide-in-left");
  rightElement?.classList.add("slide-in-right");

  if (leftElement) observer.observe(leftElement);
  if (rightElement) observer.observe(rightElement);
});

window.addEventListener('resize', () => {
  const activeButton = document.querySelector('.nav-button.active');
  if (activeButton) {
    moveIndicatorTo(activeButton);
  }
});
