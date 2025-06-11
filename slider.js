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
