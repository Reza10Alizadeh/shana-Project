// date Section
let dateParagraph = document.querySelector(".date");
let scrollIconElem = document.querySelector(".scroll-icon");
let ScrollBtn = document.querySelector(".scroll-btn");
let themeBtn = document.querySelector(".theme-btn");
function dateCalculator() {
  const today = new Date();
  const weekday = today.toLocaleDateString("fa-IR", { weekday: "long" });
  const day = today.toLocaleDateString("fa-IR", { day: "numeric" });
  const month = today.toLocaleDateString("fa-IR", { month: "long" });
  const year = today.toLocaleDateString("fa-IR", { year: "numeric" });
  const dateString = `${weekday}، ${day} ${month} ${year}`;
  dateParagraph.innerHTML = dateString;
}
document.addEventListener("DOMContentLoaded", dateCalculator);
// big slider
let slideIndex = 0;
let slideTimer;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("show");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("show");
  dots[slideIndex - 1].className += " active";

  slideTimer = setTimeout(showSlides, 5000);
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n - 1;
  showSlides();
}

showSlides();

// left slider
let smallSlideIndex = 0;
let smallSlideTimer;

function showSmallSlides() {
  let slides = document.getElementsByClassName("small-slide");
  let dots = document.getElementsByClassName("small-dot");

  smallSlideIndex++;
  if (smallSlideIndex > slides.length) {
    smallSlideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("show");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" small-active", "");
  }

  slides[smallSlideIndex - 1].style.display = "block";
  slides[smallSlideIndex - 1].classList.add("show");
  dots[smallSlideIndex - 1].className += " small-active";

  smallSlideTimer = setTimeout(showSmallSlides, 5000);
}

function currentSmallSlide(n) {
  clearTimeout(smallSlideTimer);
  smallSlideIndex = n - 1;
  showSmallSlides();
}
showSmallSlides();
// under news
let underNewsSlideIndex = 0;
let underNewsSlideTimer;

function showUnderNewsSlides() {
  let slides = document.getElementsByClassName("under-news-slide");
  let dots = document.getElementsByClassName("under-news-dot");

  underNewsSlideIndex++;
  if (underNewsSlideIndex > slides.length) {
    underNewsSlideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("show");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[underNewsSlideIndex - 1].style.display = "block";
  slides[underNewsSlideIndex - 1].classList.add("show");
  dots[underNewsSlideIndex - 1].className += " active";
  underNewsSlideTimer = setTimeout(showUnderNewsSlides, 5000);
}

function currentUnderNewsSlide(n) {
  clearTimeout(underNewsSlideTimer);
  underNewsSlideIndex = n;
  showUnderNewsSlides();
}

document.querySelectorAll(".under-news-dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentUnderNewsSlide(index);
  });
});
showUnderNewsSlides();
// buttons
ScrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
//theme

themeBtn.addEventListener("click", function () {
  // بررسی اینکه آیا تم مشکی فعال است
  if (document.body.classList.contains("dark-theme")) {
    // اگر تم مشکی فعال است، آن را به تم قهوه‌ای تغییر بده
    document.body.classList.remove("dark-theme");
    document.body.classList.add("brown-theme");
  } else if (document.body.classList.contains("brown-theme")) {
    // اگر تم قهوه‌ای فعال است، آن را به تم مشکی تغییر بده
    document.body.classList.remove("brown-theme");
    document.body.classList.add("dark-theme");
  } else {
    // اگر هیچ تمی فعال نیست، تم مشکی را فعال کن
    document.body.classList.add("dark-theme");
  }
});
