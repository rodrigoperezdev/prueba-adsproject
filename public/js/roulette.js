const services = [
  {
    title: "Gira la ruleta",
    description: "Y conoce todos nuestros servicios",
    img: "./img/fondo-ruleta.jpg",
  },
  {
    title: "Ceguera",
    description:
      "Anualmente entregamos libros de texto gratuitos impresos en sistema Braille para estudiantes ciegos y sordociegos, inscritos en primaria, secundaria y/o telesecundarias públicas en los 46 municipios. ",
    img: "./img/ceguera.jpg",
  },
  {
    title: "Baja visión profunda",
    description:
      "Asignamos libros de texto gratuitos impresos en formato macrotipo para estudiantes con baja visión profunda, inscritos en primaria, secundaria y/o telesecundarias públicas en los 46 municipios.",
    img: "./img/vision.jpg",
  },
  {
    title: "Hipoacusia",
    description:
      "En Guanajuato impulsamos el derecho a la lengua materna, desde el modelo bilingüe bicultural, en el aprendizaje de la Lengua de Señas Mexicana y el Español para la población escolar con hipoacusia. ",
    img: "./img/hipoacusia.jpg",
  },
  {
    title: "Sordera",
    description:
      "En Guanajuato impulsamos el derecho a la lengua materna, desde el aprendizaje de la Lengua de Señas Mexicana.  ",
    img: "./img/sordera.jpg",
  },
  {
    title: "Discapacidad intelectual",
    description:
      "Promovemos el desarrollo de habilidades para la vida y el aprendizaje autónomo y la adquisición de aprendizajes formales de niñas, niños y adolescentes con discapacidad intelectual.",
    img: "./img/intelectual.jpg",
  },
  {
    title: "Discapacidad motriz",
    description:
      "El 50% de nuestras escuelas de educación básica cuentan con condiciones mínimas arquitectónicas de accesibilidad. ",
    img: "./img/motriz.jpg",
  },
  {
    title: "Trastorno de la comunicación",
    description:
      "Guanajuato posiciona el 1er. protocolo de atención educativa al Trastorno del Espectro Autista en la educación básica, único en su tipo.  ",
    img: "./img/comunicacion.jpg",
  },
  {
    title: "Discapacidad psicosocial",
    description:
      "Situamos un protocolo de atención educativa a la discapacidad psicosocial para la educación básica, único en su tipo. ",
    img: "./img/social.jpg",
  },
  {
    title: "Aptitudes sobresalientes",
    description:
      "En Guanajuato trabajamos por el desarrollo de las aptitudes sobresalientes y los talentos de niñas, niños y adolescentes. ",
    img: "./img/sobresaliente.jpg",
  },
  {
    title: "Trastorno del espectro autista (TEA)",
    description:
      "Guanajuato posiciona el 1er. protocolo de atención educativa al Trastorno del Espectro Autista en la educación básica, único en su tipo. ",
    img: "./img/autismo.jpg",
  },
  {
    title: "Trastorno por déficit de atención e hiperactividad (TDAH)",
    description:
      "Guanajuato consolida la prestación del servicio educativo de la educación especial para niñas, niños y adolescentes con TDAH en los 46 municipios. ",
    img: "./img/tdah.jpg",
  },
];

const button = document.querySelector(".btn");
const roulette = document.querySelector(".roulette");
const rouletteBg = document.querySelector(".roulette-info");
const textContainer = document.querySelector(".roulette-info__text");
const title = document.querySelector(".roulette-info__h2");
const text = document.querySelector(".roulette-info__p");
const width = window.innerWidth;

if (width > 1000) {
  let deg = 270,
    current = 0;

  button.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    if (current != 11) {
      deg -= 30;

      console.log(current);
      current++;
    } else {
      deg = 270;
      current = 0;
    }

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[current].title;
    text.textContent = services[current].description;
    rouletteBg.style.backgroundImage = `url(${services[current].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);
  });
} else {
  let deg = 0,
    current = 0;

  button.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    if (current != 11) {
      deg -= 30;

      console.log(current);
      current++;
    } else {
      deg = 0;
      current = 0;
    }

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[current].title;
    text.textContent = services[current].description;
    rouletteBg.style.backgroundImage = `url(${services[current].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);
  });
}
