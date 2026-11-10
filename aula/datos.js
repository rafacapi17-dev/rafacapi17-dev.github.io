/* =====================================================================
   AULA · contenido editable
   ---------------------------------------------------------------------
   estado: "disponible" o "proximamente"
   enlace: a dónde lleva el botón (puede ser un tema de la web principal)
   ===================================================================== */
window.AULA = {
  charlas: [
    {
      titulo: "¿Por qué duele lo que duele?",
      resumen: "El dolor no está en el dedo ni en la rodilla: es una alarma que decide tu cerebro. Descubre por qué a veces suena sin motivo.",
      edad: "ESO y Bachillerato", duracion: "50 min",
      estado: "disponible",
      enlace: "../#tema-por-que-duele-lo-que-duele", textoEnlace: "Leer el tema",
    },
    {
      titulo: "¿Hay alguien ahí dentro?",
      resumen: "Un hombre que no ve esquiva obstáculos. ¿Puede tu cerebro hacer cosas sin que tú te enteres? Ciencia y ciencia ficción.",
      edad: "4.º ESO y Bachillerato", duracion: "50 min",
      estado: "disponible",
      enlace: "../#tema-hay-alguien-ahi-dentro", textoEnlace: "Leer el tema",
    },
    {
      titulo: "La ciencia de Resident Evil",
      resumen: "Virus, mutaciones y zombis: ¿qué es posible y qué es pura película? Biología y medicina detrás del videojuego.",
      edad: "ESO", duracion: "50 min",
      estado: "proximamente",
    },
    {
      titulo: "Moverse es medicina",
      resumen: "Qué le pasa a tu cuerpo y a tu cerebro cuando haces ejercicio, y por qué los médicos ya lo recetan como un fármaco.",
      edad: "ESO y Bachillerato", duracion: "50 min",
      estado: "proximamente",
    },
  ],

  experimentos: [
    { id: "reaccion", titulo: "¿Cómo de rápido es tu cerebro?", resumen: "Mide tu tiempo de reacción.", estado: "disponible" },
    { titulo: "El volumen del dolor", resumen: "Sube y baja la alarma del cerebro: miedo, sueño, estrés…", estado: "proximamente" },
    { titulo: "Engaña a tu cerebro", resumen: "Ilusiones que demuestran que el cerebro interpreta, no solo recibe.", estado: "proximamente" },
    { titulo: "¿Cuánto te mueves?", resumen: "Compara tu actividad con lo que recomienda la OMS para tu edad.", estado: "proximamente" },
  ],

  mitos: [
    { frase: "Solo usamos el 10 % del cerebro.", ciencia: false,
      explicacion: "Falso. Las pruebas de imagen muestran que a lo largo del día usamos prácticamente todas las zonas del cerebro, aunque no todas a la vez." },
    { frase: "Si duele, es que hay una lesión.", ciencia: false,
      explicacion: "Falso. El dolor es una alarma que decide el cerebro. Puede haber dolor sin lesión (como en el miembro fantasma) y lesión sin dolor." },
    { frase: "Crujirse los dedos provoca artrosis.", ciencia: false,
      explicacion: "Falso. El ruido viene de burbujas de gas en el líquido de la articulación, y los estudios no han encontrado relación con la artrosis." },
    { frase: "Hacer ejercicio ayuda a concentrarse y a recordar.", ciencia: true,
      explicacion: "Ciencia. La actividad física se asocia a mejor atención y memoria; entre otras cosas, aumenta sustancias que ayudan a las neuronas a conectarse." },
    { frase: "Los adolescentes necesitan dormir más que los adultos.", ciencia: true,
      explicacion: "Ciencia. A tu edad se recomiendan entre 8 y 10 horas de sueño; los adultos, al menos 7. Dormir poco empeora la memoria, el ánimo y hasta el dolor." },
    { frase: "Estirar antes de correr evita las lesiones.", ciencia: false,
      explicacion: "Falso, o al menos no está demostrado. Lo que mejor prepara el cuerpo es un calentamiento dinámico: moverse de forma progresiva." },
  ],

  trayectoria: [
    { cuando: "Instituto", que: "Me picaba la curiosidad por cómo funciona el cuerpo (y por qué duele)." },
    { cuando: "2025", que: "Grado en Fisioterapia, Universidad de Granada." },
    { cuando: "2026", que: "Máster en Investigación de los Trastornos del Movimiento (UGR) y mis primeros artículos científicos." },
    { cuando: "Ahora", que: "Máster en Neurociencias aplicadas al Dolor (UGR), investigación y divulgación." },
  ],

  hojaDeRuta: [
    { que: "Modo presentación para las charlas", hecho: false },
    { que: "Preguntas en directo desde el móvil", hecho: false },
    { que: "Pregunta al investigador", hecho: false },
    { que: "Rincón para profes: fichas y actividades", hecho: false },
    { que: "Solicitar una charla en tu centro", hecho: false },
  ],
};
