import { services } from "./services.js";
//Datos
const button = document.querySelector(".btn-girar");
const roulette = document.querySelector(".roulette");
const rouletteBg = document.querySelector(".info");
const textContainer = document.querySelector(".roulette-info__text");
const title = document.querySelector(".roulette-info__h2");
const text = document.querySelector(".roulette-info__p");
const width = window.innerWidth;
const infoBg = document.querySelector(".information");
const infoH2 = document.querySelector(".information__h2");
const infoP = document.querySelector(".information__p");

//Botones trastornos
const btnCeguera = document.querySelector(".btn-ceguera");
const btnVision = document.querySelector(".btn-vision");
const btnHipoacusia = document.querySelector(".btn-hipoacusia");
const btnSordera = document.querySelector(".btn-sordera");
const btnIntelectual = document.querySelector(".btn-intelectual");
const btnMotriz = document.querySelector(".btn-motriz");
const btnComunicacion = document.querySelector(".btn-comunicacion");
const btnPsicosocial = document.querySelector(".btn-psicosocial");
const btnSobresalientes = document.querySelector(".btn-sobresalientes");
const btnTea = document.querySelector(".btn-tea");
const btnTdha = document.querySelector(".btn-tdah");

//TODO: refactorizar todo el codigo

//Responsive
if (width > 1000) {
  let deg = 270,
    current = 0;

  btnCeguera.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[1].deg;

    current = 1;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[1].title;
    text.textContent = services[1].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[1].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[1].title;
    infoP.textContent = services[1].description;
    infoBg.style.backgroundImage = `url(${services[1].img})`;
  });

  btnVision.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[2].deg;

    current = 2;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[2].title;
    text.textContent = services[2].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[2].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[2].title;
    infoP.textContent = services[2].description;
    infoBg.style.backgroundImage = `url(${services[2].img})`;
  });

  btnHipoacusia.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[3].deg;

    current = 3;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[3].title;
    text.textContent = services[3].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[2].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[3].title;
    infoP.textContent = services[3].description;
    infoBg.style.backgroundImage = `url(${services[3].img})`;
  });

  btnSordera.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[4].deg;

    current = 4;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[4].title;
    text.textContent = services[4].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[4].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[4].title;
    infoP.textContent = services[4].description;
    infoBg.style.backgroundImage = `url(${services[4].img})`;
  });

  btnIntelectual.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[5].deg;

    current = 5;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[5].title;
    text.textContent = services[5].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[5].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[5].title;
    infoP.textContent = services[5].description;
    infoBg.style.backgroundImage = `url(${services[5].img})`;
  });

  btnMotriz.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[6].deg;

    current = 6;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[6].title;
    text.textContent = services[6].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[6].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[6].title;
    infoP.textContent = services[6].description;
    infoBg.style.backgroundImage = `url(${services[6].img})`;
  });

  btnComunicacion.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[7].deg;

    current = 7;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[7].title;
    text.textContent = services[7].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[7].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[7].title;
    infoP.textContent = services[7].description;
    infoBg.style.backgroundImage = `url(${services[7].img})`;
  });

  btnPsicosocial.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[8].deg;

    current = 8;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[8].title;
    text.textContent = services[8].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[8].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[8].title;
    infoP.textContent = services[8].description;
    infoBg.style.backgroundImage = `url(${services[8].img})`;
  });

  btnSobresalientes.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[9].deg;

    current = 9;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[9].title;
    text.textContent = services[9].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[9].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[9].title;
    infoP.textContent = services[9].description;
    infoBg.style.backgroundImage = `url(${services[9].img})`;
  });

  btnTea.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[10].deg;

    current = 10;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[10].title;
    text.textContent = services[10].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[10].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[10].title;
    infoP.textContent = services[10].description;
    infoBg.style.backgroundImage = `url(${services[10].img})`;
  });

  btnTdha.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[11].deg;

    current = 11;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[11].title;
    text.textContent = services[11].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[11].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[11].title;
    infoP.textContent = services[11].description;
    infoBg.style.backgroundImage = `url(${services[11].img})`;
  });

  button.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";
    console.log("hola");
    if (current != 11) {
      deg -= 30;

      current++;
    } else {
      deg = 270;
      current = 0;
    }

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[current].title;
    text.textContent = services[current].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[current].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[current].title;
    infoP.textContent = services[current].description;
    infoBg.style.backgroundImage = `url(${services[current].img})`;
  });
} else {
  let deg = 0,
    current = 0;

  btnCeguera.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[1].respDeg;

    current = 1;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[1].title;
    text.textContent = services[1].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[1].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[1].title;
    infoP.textContent = services[1].description;
    infoBg.style.backgroundImage = `url(${services[1].img})`;
  });

  btnVision.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[2].respDeg;

    current = 2;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[2].title;
    text.textContent = services[2].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[2].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[2].title;
    infoP.textContent = services[2].description;
    infoBg.style.backgroundImage = `url(${services[2].img})`;
  });

  btnHipoacusia.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[3].respDeg;

    current = 3;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[3].title;
    text.textContent = services[3].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[2].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[3].title;
    infoP.textContent = services[3].description;
    infoBg.style.backgroundImage = `url(${services[3].img})`;
  });

  btnSordera.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[4].respDeg;

    current = 4;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[4].title;
    text.textContent = services[4].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[4].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[4].title;
    infoP.textContent = services[4].description;
    infoBg.style.backgroundImage = `url(${services[4].img})`;
  });

  btnIntelectual.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[5].respDeg;

    current = 5;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[5].title;
    text.textContent = services[5].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[5].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[5].title;
    infoP.textContent = services[5].description;
    infoBg.style.backgroundImage = `url(${services[5].img})`;
  });

  btnMotriz.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[6].respDeg;

    current = 6;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[6].title;
    text.textContent = services[6].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[6].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[6].title;
    infoP.textContent = services[6].description;
    infoBg.style.backgroundImage = `url(${services[6].img})`;
  });

  btnComunicacion.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[7].respDeg;

    current = 7;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[7].title;
    text.textContent = services[7].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[7].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[7].title;
    infoP.textContent = services[7].description;
    infoBg.style.backgroundImage = `url(${services[7].img})`;
  });

  btnPsicosocial.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[8].respDeg;

    current = 8;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[8].title;
    text.textContent = services[8].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[8].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[8].title;
    infoP.textContent = services[8].description;
    infoBg.style.backgroundImage = `url(${services[8].img})`;
  });

  btnSobresalientes.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[9].respDeg;

    current = 9;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[9].title;
    text.textContent = services[9].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[9].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[9].title;
    infoP.textContent = services[9].description;
    infoBg.style.backgroundImage = `url(${services[9].img})`;
  });

  btnTea.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[10].respDeg;

    current = 10;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[10].title;
    text.textContent = services[10].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[10].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[10].title;
    infoP.textContent = services[10].description;
    infoBg.style.backgroundImage = `url(${services[10].img})`;
  });

  btnTdha.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    deg = services[11].respDeg;

    current = 11;

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[11].title;
    text.textContent = services[11].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[11].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[11].title;
    infoP.textContent = services[11].description;
    infoBg.style.backgroundImage = `url(${services[11].img})`;
  });

  button.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

    if (current != 11) {
      deg -= 30;

      current++;
    } else {
      deg = 0;
      current = 0;
    }

    roulette.style.transform = `rotate(${deg}deg)`;

    title.textContent = services[current].title;
    text.textContent = services[current].shortDescription;
    rouletteBg.style.backgroundImage = `url(${services[current].img})`;

    setTimeout(() => {
      textContainer.style.transform = "translateX(0px)";
    }, 500);

    infoH2.textContent = services[current].title;
    infoP.textContent = services[current].description;
    infoBg.style.backgroundImage = `url(${services[current].img})`;
  });
}
