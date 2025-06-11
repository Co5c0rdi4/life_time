let index = 0;

function mostrarSlide() {
  const slides = document.querySelectorAll(".slides img");
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  index++;
  if (index > slides.length) index = 1;

  slides[index - 1].classList.add("active");

  setTimeout(mostrarSlide, 3000); // troca a imagem a cada 3 segundos
}

document.addEventListener("DOMContentLoaded", mostrarSlide);

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
