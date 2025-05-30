import React, { useEffect, useState } from 'react';
import "../../pages/Cards.css";

const Aleatorios = () => {
  const personajes = [
    {
      nombre: 'Luke Skywalker',
      resumen: 'Luke Skywalker es un humano nacido en 19BBY en Tatooine. Mide 172 cm y pesa 77 kg. Tiene cabello rubio, piel clara y ojos azules. Es un Jedi legendario que desempeñó un papel crucial en la derrota del Imperio Galáctico y en la restauración de la Orden Jedi.'
    },
    {
      nombre: 'Leia Organa',
      resumen: 'Leia Organa es una humana nacida en 19BBY en Alderaan. Mide 150 cm y pesa 49 kg. Tiene cabello castaño, piel clara y ojos marrones. Es una líder destacada de la Alianza Rebelde, conocida por su valentía y habilidades diplomáticas.'
    },
    {
      nombre: 'Darth Vader',
      resumen: 'Darth Vader, anteriormente Anakin Skywalker, es un humano nacido en 41.9BBY en Tatooine. Mide 202 cm. Tiene piel clara y ojos amarillos debido al lado oscuro. Fue un Jedi prodigio que cayó al lado oscuro y se convirtió en uno de los Sith más temidos.'
    },
    {
      nombre: 'Han Solo',
      resumen: 'Han Solo es un humano nacido en 29BBY en Corellia. Mide 180 cm y pesa 80 kg. Tiene cabello castaño, piel clara y ojos marrones. Es un contrabandista convertido en héroe de la Rebelión, conocido por pilotar el Halcón Milenario.'
    },
    {
      nombre: 'Yoda',
      resumen: 'Yoda es un ser de especie desconocida nacido en 896BBY. Mide 66 cm y pesa 17 kg. Tiene cabello blanco, piel verde y ojos marrones. Fue el Gran Maestro de la Orden Jedi, reconocido por su sabiduría y poder en la Fuerza.'
    },
    {
      nombre: 'Obi-Wan Kenobi',
      resumen: 'Obi-Wan Kenobi es un humano nacido en 57BBY en Stewjon. Mide 182 cm y pesa 77 kg. Tiene cabello castaño (posteriormente blanco), piel clara y ojos azul-grisáceos. Fue un Maestro Jedi que entrenó a Anakin y Luke Skywalker.'
    },
    {
      nombre: 'Chewbacca',
      resumen: 'Chewbacca es un wookiee nacido en 200BBY en Kashyyyk. Mide 228 cm. Tiene pelaje marrón y ojos azules. Es conocido por su lealtad y fuerza, y fue copiloto del Halcón Milenario junto a Han Solo.'
    },
    {
      nombre: 'C-3PO',
      resumen: 'C-3PO es un droide de protocolo especializado en traducciones. Mide 167 cm. Fue construido por Anakin Skywalker y ha servido a numerosos personajes clave en la galaxia, destacándose por su etiqueta y conocimiento de idiomas.'
    },
    {
      nombre: 'R2-D2',
      resumen: 'R2-D2 es un droide astromecánico valiente y útil. Mide 96 cm. Ha participado en numerosas misiones cruciales, mostrando ingenio y coraje, y es conocido por su lealtad y habilidades técnicas.'
    },
    {
      nombre: 'Rey',
      resumen: 'Rey es una humana nacida en un planeta desértico. Tiene cabello castaño, piel clara y ojos color avellana. Descubrió su conexión con la Fuerza y se convirtió en una Jedi poderosa, desempeñando un papel esencial en la lucha contra la Primera Orden.'
    }
  ];

  const naves = [
    {
      nombre: 'Millennium Falcon',
      resumen: 'Una nave corelliana modificada por Han Solo y Chewbacca. Aunque vieja y con una apariencia destartalada, es extremadamente rápida y ha sido clave en varias batallas contra el Imperio.'
    },
    {
      nombre: 'X-Wing',
      resumen: 'El principal caza estelar de la Alianza Rebelde. Su diseño incluye alas en forma de X que se abren en posición de ataque y ofrece un balance entre velocidad, maniobrabilidad y potencia de fuego.'
    },
    {
      nombre: 'TIE Fighter',
      resumen: 'Caza estelar estándar del Imperio Galáctico. Carece de escudos y sistemas de soporte vital, pero su agilidad y producción masiva lo hacen efectivo en grandes cantidades.'
    },
    {
      nombre: 'Slave I',
      resumen: 'Nave de caza recompensas utilizada por Jango Fett y luego por su hijo Boba Fett. Tiene un diseño único vertical y está equipada con armas pesadas, incluyendo minas sísmicas.'
    },
    {
      nombre: 'Star Destroyer',
      resumen: 'Naves de guerra masivas del Imperio, conocidas por su forma triangular. Estas naves sirven como base móvil y son símbolo del poder imperial.'
    },
    {
      nombre: 'Naboo N-1 Starfighter',
      resumen: 'Un elegante caza estelar usado por la Guardia Real de Naboo. Rápido, maniobrable y con un diseño estético distintivo, es piloteado frecuentemente por los Jedi en misiones diplomáticas.'
    },
    {
      nombre: 'Jedi Interceptor',
      resumen: 'Pequeño y ágil caza utilizado por los Jedi durante las Guerras Clon. Equipado con alas plegables y astromecánicos, era ideal para combates a alta velocidad.'
    },
    {
      nombre: 'U-Wing',
      resumen: 'Nave de transporte de tropas y apoyo aéreo utilizada por la Alianza Rebelde. Se caracteriza por su versatilidad en misiones de infiltración y evacuación.'
    },
    {
      nombre: 'Y-Wing',
      resumen: 'Bombardero de largo alcance de la Rebelión. Aunque más lento que el X-Wing, es robusto y está equipado con torpedos de protones y cañones láser.'
    },
    {
      nombre: 'TIE Bomber',
      resumen: 'Versión pesada del TIE Fighter, diseñado para bombardeos de precisión. Posee una cabina dual y puede lanzar torpedos, bombas y misiles.'
    },
  ];
  const planetas = [
    {
      nombre: 'Tatooine',
      resumen: 'Planeta desértico en el Borde Exterior, hogar natal de Anakin y Luke Skywalker. Conocido por sus dos soles y sus duras condiciones de vida. Dominado por bandidos, comerciantes y el crimen organizado.'
    },
    {
      nombre: 'Alderaan',
      resumen: 'Un planeta pacífico destruido por la Estrella de la Muerte. Cuna de la Princesa Leia y un símbolo de la resistencia contra el Imperio. Era conocido por su belleza natural y sus ideales diplomáticos.'
    },
    {
      nombre: 'Hoth',
      resumen: 'Un mundo helado en el Borde Exterior que sirvió como base temporal para la Alianza Rebelde. Está cubierto por nieve y hielo, y habitado por criaturas peligrosas como los wampas.'
    },
    {
      nombre: 'Endor',
      resumen: 'Luna boscosa donde se desarrolló la batalla final contra el Imperio. Hogar de los Ewoks, quienes ayudaron a los Rebeldes a destruir el generador de escudo de la segunda Estrella de la Muerte.'
    },
    {
      nombre: 'Dagobah',
      resumen: 'Planeta pantanoso, remoto y lleno de vida salvaje. Lugar de exilio del Maestro Yoda y centro de entrenamiento de Luke Skywalker. Está profundamente conectado con la Fuerza.'
    },
    {
      nombre: 'Naboo',
      resumen: 'Planeta hermoso con vastos campos y océanos. Hogar de Padmé Amidala y del Emperador Palpatine. Es conocido por su cultura avanzada, arquitectura elegante y sus Gungans submarinos.'
    },
    {
      nombre: 'Kamino',
      resumen: 'Planeta oceánico y lluvioso, conocido por sus avanzadas instalaciones de clonación. Fue clave en la creación del Gran Ejército de la República antes del inicio de las Guerras Clon.'
    },
    {
      nombre: 'Geonosis',
      resumen: 'Planeta rocoso y árido, donde se construyeron los primeros prototipos de la Estrella de la Muerte. Sede de la primera gran batalla de las Guerras Clon entre Separatistas y la República.'
    },
    {
      nombre: 'Coruscant',
      resumen: 'La capital galáctica, cubierta completamente por una ciudad. Sede del Senado, del Templo Jedi y del poder político de la galaxia. Es un núcleo de comercio, cultura y conflicto político.'
    },
    {
      nombre: 'Mustafar',
      resumen: 'Planeta volcánico en el que Anakin Skywalker fue derrotado por Obi-Wan Kenobi. Más tarde, se convirtió en el lugar donde Darth Vader estableció su fortaleza. Ríos de lava y oscuridad lo caracterizan.'
    },
  ];

  const vehiculos = [
    {
      nombre: 'Speeder Bike',
      resumen: 'Vehículo rápido de reconocimiento usado por el Imperio, especialmente en Endor. Su alta velocidad lo hace ideal para misiones de patrullaje en terrenos complicados.'
    },
    {
      nombre: 'AT-AT',
      resumen: 'All Terrain Armored Transport. Un caminante gigantesco usado por el Imperio, fuertemente blindado y armado. Fue utilizado notablemente en la Batalla de Hoth.'
    },
    {
      nombre: 'AT-ST',
      resumen: 'All Terrain Scout Transport. Un caminante bípedo más pequeño que el AT-AT, usado para exploración y soporte en combate. Es ágil, pero menos blindado.'
    },
    {
      nombre: 'Sandcrawler',
      resumen: 'Enorme vehículo utilizado por los Jawas para recolectar y vender piezas y droides. Adaptado para sobrevivir en las duras condiciones del desierto de Tatooine.'
    },
    {
      nombre: 'Landspeeder',
      resumen: 'Vehículo flotante común en planetas como Tatooine. Usado para transporte personal. Luke Skywalker poseía uno en su juventud.'
    },
    {
      nombre: 'Podracer',
      resumen: 'Vehículo de carreras de alta velocidad, popular en Tatooine. Usado por Anakin Skywalker cuando era niño, mostrando sus habilidades excepcionales como piloto.'
    },
    {
      nombre: 'Droid Tank',
      resumen: 'Tanque de batalla utilizado por los separatistas en las Guerras Clon. Operado por droides, con cañones pesados y diseño intimidante.'
    },
    {
      nombre: 'Barge de Jabba',
      resumen: 'Barcaza de placer usada por Jabba the Hutt. Contaba con armamento y era el lugar de ejecución pública en el desierto, como se vio en “El Retorno del Jedi”.'
    },
    {
      nombre: 'Rebel Transport',
      resumen: 'Naves de gran tamaño utilizadas por la Alianza Rebelde para evacuar tropas y suministros. Poca defensa, pero vitales en operaciones estratégicas.'
    },
    {
      nombre: 'Zam’s Speeder',
      resumen: 'Speeder urbano conducido por Zam Wesell en Coruscant. Usado en persecuciones de alta velocidad en ambientes urbanos densamente poblados.'
    },
  ];
  const todos = [...personajes, ...naves, ...planetas, ...vehiculos];
  const [seleccionados, setSeleccionados] = useState([]);

  // Mezclar y seleccionar aleatorios, además de guardar en favoritos
  const mezclarAleatorios = () => {
    const aleatorios = todos.sort(() => 0.5 - Math.random()).slice(0, 10);
    setSeleccionados(aleatorios);

    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritosStarWars")) || [];

    const nuevosFavoritos = [...favoritosGuardados];
    aleatorios.forEach(nuevo => {
      const yaExiste = favoritosGuardados.some(fav => fav.nombre === nuevo.nombre);
      if (!yaExiste) {
        nuevosFavoritos.push(nuevo);
      }
    });

    localStorage.setItem("favoritosStarWars", JSON.stringify(nuevosFavoritos));
  };

  // Agregar a capturados (si no está repetido)
  const capturar = (item) => {
    const capturados = JSON.parse(localStorage.getItem("capturadosStarWars")) || [];
    const yaExiste = capturados.some(c => c.nombre === item.nombre);
    if (!yaExiste) {
      const nuevos = [...capturados, item];
      localStorage.setItem("capturadosStarWars", JSON.stringify(nuevos));
      alert(`${item.nombre} ha sido capturado y guardado en el álbum.`);
    } else {
      alert(`${item.nombre} ya está en tu álbum de capturados.`);
    }
  };

  useEffect(() => {
    mezclarAleatorios();
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Aleatorios del Universo Star Wars</h1>
      <button
        onClick={mezclarAleatorios}
        style={{
          marginBottom: '2rem',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#0077cc',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Cambiar aleatorios
      </button>
      <div className="grid">
        {seleccionados.map((item, index) => (
          <div className="card" key={index} style={{ position: 'relative' }}>
            <button
              onClick={() => capturar(item)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: 'red'
              }}
              title="Capturar"
            >
              ❤️
            </button>
            <div className="card-details">
              <h3>{item.nombre}</h3>
              <p className="card-subtitle">{item.resumen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aleatorios;