const imagen = document.querySelector(".front-page__arrow-down-img");
setInterval(() => {
  imagen.style.animation = "salto 0.5s ";
  setTimeout(() => {
    imagen.style.animation = "none";
  }, 500);
}, 3000);
