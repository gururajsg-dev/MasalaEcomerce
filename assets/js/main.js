// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

//scroll to top
const scrollBtn = document.getElementById("scrollToTop");

//footer toggle
const toggles = document.querySelectorAll(".footer-toggle");

toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Toggle active class
    content.classList.toggle("active");

    // Optional: rotate toggle button arrow if you add one
    btn.classList.toggle("open");
  });
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

//scroll to top
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show button after scrolling 300px
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Hero Slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;
let slideInterval = setInterval(nextSlide, 3000);

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function nextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
}

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}
