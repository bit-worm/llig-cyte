// Contact form validation
function validateForm(event) {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const message = document.forms["contactForm"]["message"].value;

  if (!name || !email || !message) {
    alert("All fields are required!");
    event.preventDefault();
  }
}


// Responsive navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

// Responsive head
const menuHeading = document.getElementById('menu-heading');

function checkScreenSize(){
  if(window.innerWidth < 500){
    menuHeading.innerText = `LLIG`;
  }
  else{
    menuHeading.innerText = `Live Learn Inspire And Grow`;
  }
}

window.onload = function() {
  checkScreenSize();
}

window.addEventListener('resize', checkScreenSize);

// === Dark Mode ===
const themeToggle = document.querySelector(".theme-toggle");
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark" || (!currentTheme && prefersDark)) {
  document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
