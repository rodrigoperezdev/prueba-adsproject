//Se guardan los servicios que ofrecen en este arreglo de objetos
const services = [
  {
    title: "Gira la ruleta",
    shortDescription: "Y conoce todos nuestros servicios",
    description: `Presiona el botón de girar ruleta en la sección de arriba y
    descubre todo a cerca de las condiciones de discapacidad y la
    atención educativa que se ofrece a cada población.`,
    img: "./img/fondo-ruleta.jpg",
  },
  {
    title: "Ceguera",
    shortDescription:
      "Anualmente entregamos libros de texto gratuitos impresos en sistema Braille para estudiantes ciegos y sordociegos, inscritos en primaria, secundaria y/o telesecundarias públicas en los 46 municipios. ",
    description: `Para la atención a la discapacidad visual ceguera las estrategias educativas deben promover en niñas, niños y adolescentes una comunicación efectiva, autonomía e inclusión. Por lo tanto, se recomienda que la o el docente diseñe actividades centradas en tres ámbitos: 1) Comunicación: sustituir las experiencias visuales por auditivas, el lenguaje será la herramienta para comunicarse, incorporando en sus actividades audiocuentos, bingos sonoros y uso de la tecnología asistiva como sintetizadores de voz y audio. 2) Orientación y movilidad: promover el desarrollo de habilidades de orientación, desplazamiento y movilidad para desplazarse en los espacios de la escuela de manera autónoma, así como realizar los ajustes curriculares de acceso, como rampas, barandales, letreros en sistema Braille y/o aquellos de accesibilidad educativa. 3) Entrenamiento multisensorial: realizar actividades de acceso y percepción a los objetos a través de los sentidos: tacto, gusto, olfato, oído.\n\n
    La familia debe intervenir y participar en el plan personalizado de aprendizaje de la o él estudiante que define la escuela y el equipo de la educación especial, para facilitar el acercamiento al mundo por medio de la exploración, priorizando el uso de lenguaje, narraciones, y contacto directo con los objetos de su entorno; favorecerá el desplazamiento de manera autónoma con el uso del bastón blanco. 
    \n
    La escuela trabajará por desarrollar las habilidades personales básicas de autonomía y autocuidado.
    \n
    Algunos de los materiales educativos más frecuentes a utilizar son: regleta y punzón para lectura y escritura, permite escribir en sistema Braille; ábaco, sirve para realizar operaciones matemáticas, literatura infantil y libros de texto impresos en sistema Braille, caja aritmética, números formas y figuras en alto y bajo relieve, tabla para trazo o geoplano; pintar, rayar y subrayar con crayola, una medida económica de alto relieve, bastón blanco para desplazamiento y movilidad y audiocuentos. 
    `,
    img: "./img/ceguera.jpg",
  },
  {
    title: "Baja visión profunda",
    shortDescription:
      "Asignamos libros de texto gratuitos impresos en formato macrotipo para estudiantes con baja visión profunda, inscritos en primaria, secundaria y/o telesecundarias públicas en los 46 municipios.",
    description: `En el caso de la baja visión, las estrategias educativas que se pueden implementar se basan inicialmente en identificar el grado de visión y su funcionalidad para determinar los apoyos que las y los estudiantes requieren, se recomienda que la o el docente diseñe actividades que incorporen el uso de recursos visuales en gran tamaño como letras en alto o bajo relieve, abecedario móvil y que las imágenes que utilizará en sus actividades sean preferentemente de gran tamaño, con colores fuertes para estimular el sentido de la vista. En algunos casos se deberá valorar si es necesario complementar con la enseñanza del sistema de lectura y escritura Braille. \n
      Por lo anterior, el trabajo con los padres de familia debe realizarse con el acompañamiento del docente, resulta necesario establecer un plan de acción de trabajo en el aula, la escuela y para la familia para promover habilidades de para la vida y el aprendizaje autónomo, aquellas de autocuidado, a través de su participación en labores del hogar, como organización de sus espacios personales y ubicar los objetos de manera rutinaria para favorecer su orientación desplazamiento y movilidad en cualquier espacio.
      \n
      Los materiales educativos para crear ambientes favorables de aprendizaje pertinentes son: plumones y lápices  de gran grosor, cuadernos con líneas más remarcadas, iluminación adecuada, utilizar una lámpara, micas de colores, atriles que mejoran la postura durante la lectura y escritura, plantillas de escritura, láminas de cartón cortadas por los renglones que ayudan a marcar táctilmente el espacio de escritura, ayudas ópticas como lupas, lentes especiales con prismas o telescopios individuales, textos, señalizaciones, dibujos en alto contraste, textos impresos en formato macrotipo. 
      `,
    img: "./img/vision.jpg",
  },
  {
    title: "Hipoacusia",
    shortDescription:
      "En Guanajuato impulsamos el derecho a la lengua materna, desde el modelo bilingüe bicultural, en el aprendizaje de la Lengua de Señas Mexicana y el Español para la población escolar con hipoacusia. ",
    description: `Las estrategias que dan respuesta educativa a los estudiantes con esta condición se centran en favorecer su comunicación con su entorno desde el lenguaje, estas pueden ser: conocer las habilidades auditivas y comunicativas. 
    \n
      Algunas estrategias que se trabajan en el aula y la escuela es situarlo cerca del docente para facilitar la comunicación, reducir el nivel de ruido en el aula, emplear ayudas visuales y combinarlas con indicaciones orales breves y claras, monitorear periódicamente los aprendizajes desde el plan de trabajo que se ejerce, ubicarse de frente al hablarle; emplear estrategias lingüísticas facilitadoras; utilizar actividades de aprendizaje cooperativo para promover la socialización de la LSM o el español. 
      \n
      La familia se considera, debe involucrarse en las acciones llevadas a cabo por la escuela y el personal de educación especial, elegirá una forma de comunicación y favorecer las situaciones comunicativas en el entorno familiar, potencializando la integración social mediante la participación en actividades de sus contextos cercanos, así como valorar el uso y la revisión periódica del auxiliar auditivo y/o del implante coclear.
      \n
      Se recomienda utilizar materiales concretos, tarjetas con ilustraciones, fotografías, material didáctico lúdico, pictogramas, materiales audiovisuales, uso de Sistemas Aumentativos y Alternativos de Comunicación, SAAC, o uso de organizadores gráficos.
      `,
    img: "./img/hipoacusia.jpg",
  },
  {
    title: "Sordera",
    shortDescription:
      "En Guanajuato impulsamos el derecho a la lengua materna, desde el aprendizaje de la Lengua de Señas Mexicana.  ",
    description: `Las pautas educativas que atienden a los estudiantes con sordera buscan facilitar la comunicación y el acceso a la información. 
    \n
      Algunas estrategias y recursos frecuentes pueden verificarse cuando se les habla de frente, se mantiene una comunicación oral o escrita, se ubican en un lugar cercano con la o él docente o con otros interlocutores. 
      \n
      La Lengua de Señas Mexicana (LSM), concebida esta como lengua materna acompañada de la lengua oral y escrita, favorece la interacción, la convivencia y la comunicación con sus compañeros y adultos a través del trabajo colaborativo.
      \n
      Involucrar a la comunidad educativa al conocimiento y uso de LSM es una tarea de la Educación Especial y la escuela.  
      \n
      En este sentido, se sugiere establecer un canal de comunicación constante entre familia, escuela y el personal de la educación especial con la finalidad de desarrollar y ejecutar un plan de atención de acuerdo con las características de la o él estudiante. 
      \n
      Desde los servicios de la educación especial pugnamos, por valorar, respetar y adoptar en el entorno familiar la LSM, como oportunidad que posibilite mayores oportunidades de participación en las actividades cotidianas, aquellas del aula y la escuela. 
      \n
      Las imágenes, pictogramas, fotografías, videos, libros ilustrados, recursos para el aprendizaje que incorporan tecnología asistiva, objetos concretos, láminas, son recursos del aula y la escuela para la enseñanza y el aprendizaje de estudiantes sordos.
      `,
    img: "./img/sordera.jpg",
  },
  {
    title: "Discapacidad intelectual",
    shortDescription:
      "Promovemos el desarrollo de habilidades para la vida y el aprendizaje autónomo y la adquisición de aprendizajes formales de niñas, niños y adolescentes con discapacidad intelectual.",
    description: `Las estrategias educativas para la población con discapacidad intelectual se atiende a partir de tres áreas; para el área conceptual las actividades a desarrollar van en función a la memoria, la lectura, la escritura y las matemáticas; para el área social se requiere trabajar la conciencia de los pensamientos de los demás y de sus sentimientos, habilidades interpersonales y sentido de la realidad social; finalmente en el área práctica: se deberá trabajar el cuidado personal, la organización de tareas, administración del dinero y seguridad. 
    \n
      El trabajo que por otro lado, las acciones que los docentes deben implementar con los padres de familia son: la orientación en las etapas que acompañan a la discapacidad intelectual (negación, aceptación, conformismo); mantener una comunicación asertiva para diseñar un plan de intervención que favorezca el desarrollo hábitos, habilidades adaptativas y destrezas de sus hijos para una vida autónoma e independiente. \n
      En cuanto a los materiales educativos se recomienda para estos estudiantes los soportes visuales, materiales manipulativos y de la vida cotidiana (periódico, revistas, envases), adicionalmente para trabajar la lectura, escritura y matemáticas (alfabetos móviles, ábacos, material base 10, dominó, regletas y bloques).
      `,
    img: "./img/intelectual.jpg",
  },
  {
    title: "Discapacidad motriz",
    shortDescription:
      "El 50% de nuestras escuelas de educación básica cuentan con condiciones mínimas arquitectónicas de accesibilidad. ",
    img: "./img/motriz.jpg",
    description: `Las estrategias educativas de esta población escolar deben estar diseñadas para adaptarse a la capacidad de movimiento y afectación en el desplazamiento del estudiante, estas deben proporcionar mayor tiempo para concluir las actividades, considerando la adaptación de mobiliario o cualquier otro tipo de ayuda técnica, así como permitir las clases grabadas y facilitación de los materiales con anticipación; si el educando presenta dificultades para tomar apuntes deberá apoyarse con cuadernos autocopiados; además de considerar las adecuaciones de acceso como rampas, pasamanos, elevadores, etc. \n 
    Por ende, el trabajo con las familias va encaminado a informar sobre las características propias de la discapacidad motriz, la canalización con especialistas según sea la afectación que presenta, además de mantener una comunicación asertiva, asesorándolos sobre los materiales educativos o métodos que garanticen su acceso a la lectura, escritura y matemáticas.  \n
    En cuanto a los materiales educativos específicos y/o adaptados para conseguir la autonomía de los estudiantes, se encuentran los atriles para la verticalización, señalizadores o punteros, lápices y rotuladores gruesos o con adaptaciones, sistemas de plantillas para letras y dibujos, materiales complementarios para tareas escolares en función de sus necesidades de movimiento; así como soporte informático para facilitar las tareas escolares.
    `,
  },
  {
    title: "Trastorno de la comunicación",
    shortDescription:
      "Guanajuato posiciona el 1er. protocolo de atención educativa al Trastorno del Espectro Autista en la educación básica, único en su tipo.  ",
    description: `Las estrategias de intervención educativa a aplicar con estudiantes que presentan trastornos de la comunicación y/o que viven con condición de discapacidad, van encaminadas a promover herramientas para la comunicación funcional, a través del uso y aplicación de sistemas alternativos y aumentativos de comunicación.  \n

      Por consiguiente, una de las acciones a trabajar con las familias y tutores de las y los estudiantes, es realizar un plan de trabajo para informar y orientar sobre los apoyos, recursos comunicativos/ lingüísticos que se requieren y dar el seguimiento correspondiente. 
      `,
    img: "./img/comunicacion.jpg",
  },
  {
    title: "Discapacidad psicosocial",
    shortDescription:
      "Situamos un protocolo de atención educativa a la discapacidad psicosocial para la educación básica, único en su tipo. ",
    img: "./img/social.jpg",
    description: `Las estrategias educativas específicas para dar atención a los estudiantes con discapacidad psicosocial se centran en generar situaciones de aprendizaje experiencial/vivencial con la finalidad de apoyar el fortalecimiento afectivo y el desarrollo socioemocional de niñas, niños y adolescentes, favorecer un ambiente de convivencia áulico y escolar seguro y positivo que les ofrezca un clima de relaciones interpersonales cordiales, sentimientos de pertenencia a un grupo social y de valoración, el apoyar sus iniciativas personales y brindarle confianza e independencia. Evitar el uso de etiquetas y métodos coercitivos, en cambio, utilizar reforzadores positivos que reconozcan sus cualidades, individualidad y logros. \n

    Las acciones para trabajar con las familias o tutores están encaminadas a brindarles un ambiente que permita acompañar y aceptar la situación real de niñas, niños y adolescentes; establecer redes de apoyo en el aula, la escuela y la familia, además de otorgar de cerca el acompañamiento y la atención de profesionales de la salud y la psicología.
     
    `,
  },
  {
    title: "Aptitudes sobresalientes",
    shortDdescription:
      "En Guanajuato trabajamos por el desarrollo de las aptitudes sobresalientes y los talentos de niñas, niños y adolescentes. ",
    description: `Las estrategias educativas por poner en práctica para la atención y respuesta educativa de las y los estudiantes que presentan aptitudes sobresalientes, son aquellas centradas en el enriquecimiento curricular en el aula y la escuela y extracurricular, fuera de la escuela. Su objetivo es desarrollar al máximo las potencialidades, brindándoles una gama de posibilidades, atendiendo sus características y necesidades específicas.  \n

      Trabajamos en el desarrollo de programas y proyectos en el aula, la escuela y la comunidad, filosofía para niños, ciudadanía, creatividad, arte, pensamiento crítico, inteligencia y talento, centros de interés, etc.  \n
      
      Por otro lado, las acciones con las que se trabajan con madres, padres de familia y/o tutores, están centradas en el trabajo colaborativo entre la escuela, el servicio de la educación especial, instituciones, para el desarrollo de planes de enriquecimiento extracurricular de las potencialidades de niñas, niños y adolescentes.  \n
      
      Los materiales educativos que las y los docentes utilizan para atender a las y los estudiantes que presentan aptitudes sobresaliente es variado, aquí encontramos el tanto el didáctico, aquellos que se diseñan para el trabajo de programas y proyectos escolares, así como el especializado, por situar ejemplo, las estaciones de trabajo STEAM LEGO para preescolar, primaria y secundaria, el uso de pruebas psicométricas, material bibliográfico especializado en las ciencias, la ciudadanía, la creatividad, el arte, las matemáticas, la robótica, la ingeniería y programación para niñas, niños y adolescentes, entre otros. 
      `,
    img: "./img/sobresaliente.jpg",
  },
  {
    title: "Trastorno del espectro autista (TEA)",
    shortDescription:
      "Guanajuato posiciona el 1er. protocolo de atención educativa al Trastorno del Espectro Autista en la educación básica, único en su tipo. ",
    description: `Las estrategias educativas que situamos en el aula están relacionadas con la flexibilización curricular para crear ambientes pertinentes a partir del Diseño Universal de Aprendizaje (DUA), desde el que se pueden considerar cinco elementos para la intervención educativa: 1) Intereses: identificar sus intereses, para planear y desarrollar actividades que promuevan su participación. 2) Estímulos ambientales: identificar si existen estímulos que le molesten dentro del aula, como calidad de luz, sonidos fuertes, olores y colores, se debe buscar que los espacios le generen tranquilidad. 3) Metodología: incluir herramientas tecnológicas, visuales, auditivas y manipulativas, con base a los intereses. 4) Organización: establecer rutinas en las actividades diarias desde el uso de imágenes, fotografías o pictogramas. 5) Comunicación: fortalecer canales de comunicación para establecer un vínculo de confianza. \n

      El trabajo que ejercemos con madres, padres de familia y/o tutores está relacionado con la orientación y el acompañamiento para la evaluación y diagnóstico por profesionistas de la salud.  \n
      
      Trabajamos junto con la familia de las y los estudiantes planes personalizados donde se incorporan recomendaciones de horarios de comida y hábitos de sueño, alimentación y actividades extracurriculares como natación o actividades sensoriales (pintura, burbujas, arena). \n
      
      Por lo tanto, trabajamos con el uso y el aprendizaje de Sistemas Alternativos y Aumentativos de Comunicación, SAAC, uso de pictogramas y otros tableros de comunicación, para trabajar canales efectivos de comunicación, centrados en situaciones concretas, cotidianas y a través del juego, como herramienta para el aprendizaje y la comunicación funcional. 
      
      
      `,
    img: "./img/autismo.jpg",
  },
  {
    title: "Trastorno por déficit de atención e hiperactividad (TDAH)",
    shortDescription:
      "Guanajuato consolida la prestación del servicio educativo de la educación especial para niñas, niños y adolescentes con TDAH en los 46 municipios. ",
    description: `Las estrategias educativas que se aplican con estudiantes que presentan TDAH están orientadas a favorecer su autorregulación y autoestima, por lo que se emplean reforzadores positivos, resolución de tareas por fragmentos, hábitos de auto regulación de la conducta, el uso de agendas y calendarios, técnicas de estudio para la lectura y la escritura. \n

      Informamos a las madres, padres de familia y/o tutores sobre las características de esta condición; asesoramos sobre la importancia de asistir con profesionales de la medicina para una adecuada valoración, diagnóstico y medicación en caso de ser necesario; brindamos sugerencias para el  desarrollo de la conducta; otorgamos orientación sobre programas de actividades diarias que mejoren la organización y  establecimiento de rutinas estructuradas en el hogar para niñas, niños y adolescentes, procurando en todo momento un ambiente tranquilo o libre de distracciones.  \n
      Por otro lado, en el aula utilizamos libros sensoriales, técnicas de autorregulación y manejo de conducta, organizadores gráficos, juegos diversificados que favorezcan la atención; materiales que les permiten el movimiento como los asientos flexibles, sillas movibles, escritorios para trabajar de pie. 
      `,
    img: "./img/tdah.jpg",
  },
];

//Datos
const button = document.querySelector(".btn");
const roulette = document.querySelector(".roulette");
const rouletteBg = document.querySelector(".roulette-info");
const textContainer = document.querySelector(".roulette-info__text");
const title = document.querySelector(".roulette-info__h2");
const text = document.querySelector(".roulette-info__p");
const width = window.innerWidth;
const infoBg = document.querySelector(".information");
const infoH2 = document.querySelector(".information__h2");
const infoP = document.querySelector(".information__p");

//TODO: refactorizar logica de los if de abajo

//Responsive
if (width > 1000) {
  let deg = 270,
    current = 0;

  button.addEventListener("click", () => {
    textContainer.style.transform = "translateX(-10px)";

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
