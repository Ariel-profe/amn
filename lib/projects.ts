import { IProject } from "@/interfaces";

export const projects: IProject[] = [
  {
    id: 1,
    title: 'Sitio web Diseñadora de Alta Costura',
    category: 'desarrollo web',
    client: 'mónica ojeda',
    image: "/works/monica/portada-1.webp",
    desc: `Web basada en Diseño de Alta Costura donde podrás encontrar diferentes secciones con los mejores diseños de indumentaria para fiestas, eventos y  cumpleaños. También se desarrolló  un apartado donde se muestra la participación en desfiles y otro con cursos para aprender técnicas de costura y bordado.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "styled components",
        color: "pink-text-gradient"
      }
    ],
    icon: "/works/monica/iso-1.svg",
    link: "https://monicaojeda.com.ar/",
    modal_img: "/works/monica/modalImg-1.webp"
  },
  {
    id: 2,
    title: 'Aplicación Distribuidora Informática',
    category: 'desarrollo web',
    client: 'onic distribuidora',
    image: "/works/onic/portada-1.webp",
    desc: `Aplicación de comercio electrónico que ofrece los mejores productos tecnológicos con una gran variedad. Busca, elige, compra y disfruta.`,
    icon: "/works/onic/iso-1.svg",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "green-text-gradient"
      },
      {
        name: "docker",
        color: "pink-text-gradient"
      }
    ],
    modal_img: "/works/onic/modalImg-1.webp"
  },
  {
    id: 3,
    title: 'Sitio web Instituto San Pablo',
    category: 'desarrollo web',
    client: 'instituto san pablo',
    image: "/works/instituto-san-pablo/portada-1.webp",
    desc: `Sitio web institucional educativo donde hay a disposición información sobre todas las actividades que se realizan para que los directivos, maestros, padres y alumnos tengan acceso a las novedades.`,
    icon: "/works/instituto-san-pablo/iso.svg",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind",
        color: "green-text-gradient"
      },
      {
        name: "figma",
        color: "pink-text-gradient"
      }
    ],
    link: "https://isanpablo.com.ar/",
    modal_img: "/works/instituto-san-pablo/modalImg-1.webp"
  },
  {
    id: 4,
    title: 'Gestión de redes sociales Atención Psicológica',
    category: 'marketing y diseño gráfico',
    client: 'solange rodríguez',
    image: "/works/solange/portada-2.webp",
    desc: `Creación y planificación de contenido en Instagram para poder compartir e interactuar con los usuarios temáticas importantes sobre la psicología.`,
    icon: "/works/solange/iso-2.svg",
    modal_img: "/works/solange/modalImg-1.webp"
  },
  {
    id: 5,
    title: 'Rediseño de logotipo profesional Psicóloga',
    category: 'marketing y diseño gráfico',
    client: 'solange rodríguez',
    image: "/works/solange/portada-3.webp",
    desc: `Rediseño de logotipo donde se llevó a cabo una investigación e identificación del propósito sobre cambios a realizar. Se procesa la idea para que sea coherente y se mantenga la simplicidad de lo que se quiere comunicar.`,
    icon: "/works/solange/iso-3.svg",
    modal_img: "/works/solange/modalImg-2.webp"
  },
  {
    id: 6,
    title: 'Papelería corporativa profesional Psicóloga',
    category: 'marketing y diseño gráfico',
    client: 'solange rodríguez',
    image: "/works/solange/portada-4.webp",
    desc: `Diseño de papelería corporativa, hojas membretadas, para darle profesionalismo a un documento a presentar (en este caso a pacientes). Se incluyeron datos personales de contacto, logotipo y otra información para ir completando.`,
    icon: "/works/solange/iso-4.svg",
    modal_img: "/works/solange/modalImg-3.webp"
  },
  {
    id: 7,
    title: 'Creación de marca profesional Diseñadora',
    category: 'marketing y diseño gráfico',
    client: 'mónica ojeda',
    image: "/works/monica/portada-2.webp",
    desc: `Logotipo compuesto por diferentes tipografías para identificar la marca de su profesión. Presenta combinación de colores y se le da movimiento a través de la letra inicial, tomando como punto de partida la caída de las telas que fluyen.`,
    icon: "/works/monica/iso-2.svg",
    modal_img: "/works/monica/modalImg-2.webp"
  },
  {
    id: 8,
    title: 'Tarjetas personales Diseñadora',
    category: 'marketing y diseño gráfico',
    client: 'mónica ojeda',
    image: "/works/monica/portada-3.webp",
    desc: `Diseño de tarjetas personales donde se muestra la información necesaria para dar a conocer el trabajo que se realiza con la indumentaria y así poder generar conexión con los clientes.`,
    icon: "/works/monica/iso-3.svg",
    modal_img: "/works/monica/modalImg-3.webp"
  },
  {
    id: 9,
    title: 'Gestión de redes sociales Diseñadora',
    category: 'marketing y diseño gráfico',
    client: 'mónica ojeda',
    image: "/works/monica/portada-4.webp",
    desc: `Gestión y creación de contenido en redes sociales, Facebook e Instagram, para mostrar a los usuarios la indumentaria realizada y los diferentes diseños que se ofrecen para fiestas, eventos, cumpleaños, casamientos, entre otros.`,
    icon: "/works/monica/iso-4.svg",
    modal_img: "/works/monica/modalImg-4.webp"
  },
  {
    id: 10,
    title: 'Creación de marca Distribuidora Informática',
    category: 'marketing y diseño gráfico',
    client: 'onic distribuidora',
    image: "/works/onic/portada-2.webp",
    desc: `Creación de marca, contemplando un análisis sobre su identidad, definición del nombre, combinaciones tipográficas y paleta de colores.`,
    icon: "/works/onic/iso-2.svg",
    modal_img: "/works/onic/modalImg-2.webp"
  },
  {
    id: 11,
    title: 'Gestión de redes sociales Doctora',
    category: 'marketing y diseño gráfico',
    client: 'sara massutti',
    image: "/works/sara/portada-1.webp",
    desc: `Gestión y creación de contenido de redes sociales, Facebook e Instagram, para compartir con los usuarios su trabajo como Dra. Especialista en medicina estética.`,
    icon: "/works/sara/iso.svg",
    modal_img: "/works/sara/modalImg-1.webp"
  },
  {
    id: 12,
    title: 'Diseño de feed fotografía',
    category: 'marketing y diseño gráfico',
    client: 'emilia diez',
    image: "/works/emilia/portada-1.webp",
    desc: `Estructura general y diseño de feed de dos perfiles para Instagram (fotografía familiar y fotografía para marketing). Creación de publicaciones de bienvenida y perfil que acompañen la paleta de colores elegida.`,
    icon: "/works/emilia/iso-1.svg",
    modal_img: "/works/emilia/modalImg-1.webp"
  },
  {
    id: 13,
    title: 'Asesoramiento de redes sociales Fotógrafa',
    category: 'marketing y diseño gráfico',
    client: 'emilia diez',
    image: "/works/emilia/portada-2.webp",
    desc: `Asesoramiento y planificación de contenido en Instagram para poder tener un portfolio de su trabajo como fotógrafa. Incluye definición de la temática, detección de objetivos claves, guía con tips y recomendaciones.`,
    icon: "/works/emilia/iso-2.svg",
    modal_img: "/works/emilia/modalImg-2.webp"
  },
  {
    id: 14,
    title: 'Asesoramiento Preparador Físico',
    category: 'marketing y diseño gráfico',
    client: 'martín gonzález',
    image: "/works/martin/portada-1.webp",
    desc: `Asesoramiento y planificación de contenido en Instagram para un lapso de tiempo determinado donde se planteó un objetivo específico. Se tuvieron en cuenta algunas estrategias para poder alcanzar mayor visibilidad en los videos.`,
    icon: "/works/martin/iso.svg",
    modal_img: "/works/martin/modalImg-1.webp"
  },
  {
    id: 15,
    title: 'Reparaciones y servicio técnico en Constructora',
    category: 'servicio ti',
    client: 'titulizar constructora',
    image: "/works/titulizar/portada-1.webp",
    desc: `Reparaciones y servicios de asistencia técnica (remota y presencial) para solucionar problemas de software y hardware que se van presentando.`,
    icon: "/works/titulizar/iso-1.svg",
    modal_img: "/works/titulizar/modalImg-1.webp"
  },
  {
    id: 16,
    title: 'Relevamiento y asesoramiento en Constructora',
    category: 'servicio ti',
    client: 'titulizar constructora',
    image: "/works/titulizar/portada-2.webp",
    desc: `Relevamiento y asesoramiento en la toma de decisiones tecnológicas para diferentes sectores dentro de la empresa. Por etapas se va llevando a cabo la reestructuración del cableado y conexiones.`,
    icon: "/works/titulizar/iso-1.svg",
    modal_img: "/works/titulizar/modalImg-2.webp"
  },
  {
    id: 17,
    title: 'Creación de marca profesional fotografía',
    category: 'marketing y diseño gráfico',
    client: 'emilia diez',
    image: "/works/emilia/portada-3.webp",
    desc: `Creación de marca donde se trabaja el diseño del logo, la esencia de la profesión que se quiere reflejar, las combinaciones tipográficas, paleta de colores que acompañarán y se analizan los conceptos que se quieren incluir para el contenido multimedia donde se utilizará.`,
    icon: "/works/emilia/iso-2.svg",
    modal_img: "/works/emilia/modalImg-3.webp"
  },
  {
    id: 18,
    title: 'Presentación informativa sobre atención psicológica',
    category: 'marketing y diseño gráfico',
    client: 'solange rodríguez',
    image: "/works/solange/portada-4.webp",
    desc: `Diseño digital sobre Terapia Psicológica, donde los pacientes puedan obtener información relevante sobre el profesional que los atenderá, manera de trabajo, formas de pago y datos de contacto.`,
    icon: "/works/solangí/iso-5.svg",
    modal_img: "/works/solange/modalImg-4.webp"
  },
  {
    id: 19,
    title: 'Tarjetas personales Psicóloga',
    category: 'marketing y diseño gráfico',
    client: 'solange rodríguez',
    image: "/works/solange/portada-5.webp",
    desc: `Diseño de tarjetas personales para poder difundir la información de contacto con las personas interesadas. Esto ayuda a que puedan conocer y consultar sobre los servicios disponibles y puedan acceder a los mismos.`,
    icon: "/works/solangí/iso-6.svg",
    modal_img: "/works/solange/modalImg-5.webp"
  },
  {
    id: 20,
    title: 'Gestión de mails en Empresa Informática',
    category: 'servicio ti',
    client: 'RG ingeniería y computación',
    image: "/works/rg-ingenieria/portada-1.webp",
    desc: `Servicio de programación de DNS (sistema de nombres de dominio) y registros MX exigidos por los servidores de Google que son necesarios para la entrega de correos a la dirección establecida.`,
    icon: "/works/rg-ingenieria/iso.svg",
    modal_img: "/works/rg-ingenieria/modalImg-1.webp"
  },
  {
    id: 21,
    title: 'Instalación de cámaras',
    category: 'servicio ti',
    client: 'instituto san pablo',
    image: "/works/instituto-san-pablo/portada-2.webp",
    desc: `Instalación de cámaras en lugares elevados del establecimiento que permiten una visión clara y amplia del área a vigilar. Es importante por varias razones: Seguridad y prevención de incidentes, protección de estudiantes y personal, cumplimientos de normas y regulaciones, mejora de la gestión y administración.`,
    icon: "/works/instituto-san-pablo/iso.svg",
    modal_img: "/works/instituto-san-pablo/modalImg-2.webp"
  },
  {
    id: 22,
    title: 'Relevamiento y asesoramiento de equipos en La Limpísima',
    category: 'servicio ti',
    client: 'la limpísima',
    image: "/works/la-limpisima/portada-1.webp",
    desc: `Relevamiento en las diferentes áreas y puestos de trabajo de la empresa para reorganizar y mejorar las tecnologías en cuanto a conectividad de redes. Se realiza un informe donde se detalla características de cada uno, su estado y recomendación sugerida para actualizaciones.`,
    icon: "/works/la-limpisima/iso.svg",
    modal_img: "/works/la-limpisima/modalImg-1.webp"
  },
  {
    id: 23,
    title: 'Gestión de redes sociales La Limpísima',
    category: 'marketing y diseño gráfico',
    client: 'la limpísima',
    image: "/works/la-limpisima/portada-2.webp",
    desc: `Gestión y creación de contenido de redes sociales, Facebook e Instagram, para compartir con los usuarios la elaboración y venta de productos de limpieza de alta calidad, con una gran variedad de opciones para consumidor final, revendedores y empresas.`,
    icon: "/works/la-limpisima/iso.svg",
    modal_img: "/works/la-limpisima/modalImg-2.webp"
  },
  {
    id: 24,
    title: 'Gestión de redes sociales OnceCatorce',
    category: 'marketing y diseño gráfico',
    client: 'once catorce gimnasio',
    image: "/works/once-catorce/portada-1.webp",
    desc: `Gestión y creación de contenido en Instagram, para compartir con los usuarios las actividades físicas y deportivas que se realizan en el espacio.`,
    icon: "/works/once-catorce/iso.svg",
    modal_img: "/works/once-catorce/modalImg-1.webp"
  },
  {
    id: 25,
    title: 'Sitio web Valvtronic',
    category: 'desarrollo web',
    client: 'valvtronic',
    image: "/works/valvtronic/portada-1.webp",
    desc: `Sitio web empresarial donde podrás encontrar información de los productos ofrecidos como válvulas, actuadores y accesorios de control. Se brindan  soluciones innovadoras y a medida para el manejo de fluidos, sumándole tecnología a tus procesos.`,
    icon: "/works/valvtronic/iso.svg",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind",
        color: "green-text-gradient"
      },
      {
        name: "framer motion",
        color: "pink-text-gradient"
      }
    ],
    link: "https://valvtronic.com/",
    modal_img: "/works/valvtronic/modalImg-1.webp"
  },
  {
    id: 26,
    title: 'Servicio y soporte informático RatPenat',
    category: 'servicio ti',
    client: 'ratpenat',
    image: "/works/ratpenat/portada-1.webp",
    desc: `Soporte informático referido a delegación y activación de dominio. Creación y configuración de cuenta para manejo de mail con dominio. Servicio de DNS.`,
    icon: "/works/ratpenat/iso.svg",
    modal_img: "/works/ratpenat/modalImg-1.webp"
  },
  {
    id: 27,
    title: 'Gestión de redes sociales Garden Bar & Wine',
    category: 'marketing y diseño gráfico',
    client: 'restaurante garden',
    image: "/works/restaurante-garden/portada-1.webp",
    desc: `Gestión y creación de contenido en Instagram, donde los usuarios podrán conocer las propuestas gastronómicas, de vinos premium y coctelería para que puedan asistir. Un lugar que te invita a escuchar música en vivo y presenciar distintos shows para que pases una gran noche.`,
    icon: "/works/restaurante-garden/iso.svg",
    modal_img: "/works/restaurante-garden/modalImg-1.webp"
  },
  {
    id: 28,
    title: 'Diseño de carta digital para restaurante Garden',
    category: 'marketing y diseño gráfico',
    client: 'restaurante garden',
    image: "/works/restaurante-garden/portada-2.webp",
    desc: `Diseño y creación de carta digital con el menú correspondiente (entradas, platos principales, postres, vinos, cócteles y bebidas sin alcohol). Se buscó que la información se vea organizada, sea atractiva visualmente, con descripciones claras y que los colores y tipografías realcen la marca.`,
    icon: "/works/restaurante-garden/iso.svg",
    modal_img: "/works/restaurante-garden/modalImg-2.webp"
  },
  {
    id: 29,
    title: 'Creación de Linktree y QR',
    category: 'marketing y diseño gráfico',
    client: 'restaurante garden',
    image: "/works/restaurante-garden/portada-3.webp",
    desc: `Diseño y creación de LinkTree donde permite armar una página que alberga todos los enlaces importantes que quieres compartir con tu audiencia. Allí se colocaron las redes sociales, WhatsApp para realizar las reservas y el menú digital. Además se creó un QR personalizado con la paleta de colores del restaurante donde te dirige al Linktree y podés elegir la info que querés navegar.`,
    icon: "/works/restaurante-garden/iso.svg",
    modal_img: "/works/restaurante-garden/modalImg-3.webp"
  },
  {
    id: 30,
    title: 'Folletería publicitaria para restaurante Garden',
    category: 'marketing y diseño gráfico',
    client: 'restaurante garden',
    image: "/works/restaurante-garden/portada-4.webp",
    desc: `Folletería con diseño exclusivo para poder presentarlas como tarjetas a hoteles o posibles clientes. Por otro lado, se diseñó una tarjeta en formato vertical en el que se muestra descripción relacionada a los eventos que se pueden realizar en Garden. Ahí se contemplan las opciones de comida, instalaciones disponibles, horarios y entretenimiento.`,
    icon: "/works/restaurante-garden/iso.svg",
    modal_img: "/works/restaurante-garden/modalImg-4.webp"
  },
  {
    id: 31,
    title: 'Cartelería principal para restaurante',
    category: 'marketing y diseño gráfico',
    client: 'restaurante garden',
    image: "/works/restaurante-garden/portada-5.webp",
    desc: `Se diseñó el cartel de entrada para Garden contemplando el formato adecuado y los tamaños correspondientes de tipografías para que la lectura de las personas que pasen por el lugar lo lean con claridad. Se hicieron diferentes pruebas para evaluar el resultado final.`,
    icon: "/works/restaurante-garden/iso.svg",
    modal_img: "/works/restaurante-garden/modalImg-5.webp"
  },
  {
    id: 32,
    title: 'Configuración de comanderas',
    category: 'servicio ti',
    client: 'restaurante garden',
    image: "/works/restaurante-garden/portada-6.webp",
    desc: `Configuración de las comandas que permiten comunicar los pedidos a la cocina, controlar el servicio, validar los pedidos, atender a las mesas por orden, solventar inconvenientes, controlar el stock y ofrecer facturas o tickets.
    Por otro lado, se recuperó y ordenó información de la notebook principal que se usa en el establecimiento.`,
    icon: "/works/restaurante-garden/iso.svg",
    modal_img: "/works/restaurante-garden/modalImg-6.webp"
  },
  {
    id: 33,
    title: 'Relevamiento y asesoramiento de equipos en OSAR',
    category: 'servicio ti',
    client: 'osar contact center',
    image: "/works/osar/portada-1.webp",
    desc: `Relevamiento en las diferentes áreas y puestos de trabajo de cada sucursal de la empresa para llevar un control de los equipos existentes con el estado de cada uno. Se revisaron PC, monitores y otros componentes informáticos. Luego se realizaron recomendaciones para llevar a cabo las actualizaciones necesarias.`,
    icon: "/works/osar/iso.svg",
    modal_img: "/works/osar/modalImg-1.webp"
  },
  {
    id: 34,
    title: 'Instalación de rack para Gateway',
    category: 'servicio ti',
    client: 'osar contact center',
    image: "/works/osar/portada-2.webp",
    desc: `Instalación de rack para gateway con bandejas para mantener un orden siguiendo los protocolos para minimizar las interferencias y mejorar el rendimiento del mismo. Además, se reorganizó el cableado de las conexiones existentes en ese sector.`,
    icon: "/works/osar/iso.svg",
    modal_img: "/works/osar/modalImg-2.webp"
  },
  {
    id: 35,
    title: 'Servicio y soporte de equipos informáticos OSAR',
    category: 'servicio ti',
    client: 'osar contact center',
    image: "/works/osar/portada-3.webp",
    desc: `Servicio técnico, mantenimiento, limpieza y actualizaciones de equipos informáticos. Es importante llevar a cabo lo anterior mencionado para garantizar que los sistemas funcionen correctamente y para proteger la información. Previene fallos, protege la información, aumenta la eficiencia operativa y maximiza la vida útil.`,
    icon: "/works/osar/iso.svg",
    modal_img: "/works/osar/modalImg-3.webp"
  },
  {
    id: 36,
    title: 'Landing Page grupo de danza DabkeArte',
    category: 'desarrollo web',
    client: 'dabkearte',
    image: "/works/dabkearte/portada-1.webp",
    desc: `Landing Page de DabkeArte, grupo de danzas árabes folklóricas, para compartir información sobre el baile, los integrantes, espectáculos y actividades que se realizan. Uno de los objetivos es poder facilitar la comunicación entre el grupo y sus seguidores. Visitá la página y conocé todo lo que se puede hacer con tecnología actual.`,
    icon: "/works/dabkearte/iso.svg",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "tailwind",
        color: "green-text-gradient"
      },
      {
        name: "framer motion",
        color: "pink-text-gradient"
      }
    ],
    link: "https://dabkearte.vercel.app/",
    modal_img: "/works/dabkearte/modalImg-1.webp"
  },
];