const navButtons = document.querySelectorAll('.nav-button');
const indicator = document.querySelector('.nav-indicator');

function moveIndicatorTo(button) {
  indicator.style.transform = `translateX(${button.offsetLeft}px)`;
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
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.getElementById("about-btn");
  const aboutSection = document.getElementById("about");

  aboutBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({
      behavior: "smooth"
    });
  });

  const homeBtn = document.getElementById("home-btn");
  const homeSection = document.getElementById("home");

  homeBtn.addEventListener("click", () => {
    homeSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});