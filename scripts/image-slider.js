// Image slider
let currentIndex = 0;
let slides = document.querySelectorAll(".carousel-img");
let dots = document.querySelectorAll(".dot");
let carousel = document.getElementById("carousel");
let interval = setInterval(nextSlide, 4000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
dots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    let index = parseInt(e.target.getAttribute("data-slide"));
    showSlide(index);
  });
});

carousel.addEventListener("mouseenter", () => clearInterval(interval));
carousel.addEventListener("mouseleave", () => interval = setInterval(nextSlide, 4000));


