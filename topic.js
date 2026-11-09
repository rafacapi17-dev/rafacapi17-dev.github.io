/* =====================================================================
   TEMA DEL DÍA
   ---------------------------------------------------------------------
   Este archivo lo actualiza cada noche el resumen de noticias: añade
   una entrada nueva AL PRINCIPIO de la lista. La web muestra la primera.
   Se guardan como mucho 30 entradas.
   ===================================================================== */
window.TOPIC_DIA = [
  {
    fecha: "2026-11-09",
    area: "Salud digital",
    area_en: "Digital health",
    titulo: "Un reloj inteligente detecta la tensión alta sin manguito, a la altura de una toma en consulta",
    titulo_en: "A smartwatch spots high blood pressure without a cuff, on par with an office check",
    resumen:
      "Un estudio publicado en Nature entrenó una inteligencia artificial con las señales de pulso y movimiento de un reloj inteligente para detectar hipertensión sin usar manguito. " +
      "En 196 adultos de cinco centros de EE. UU., comparado con la medición de 24 horas, el reloj acertó algo más que una toma única en la consulta (66 % frente a 55 % de casos detectados). " +
      "Es una investigación preliminar con una muestra pequeña: aún se le escapan muchos casos y no sustituye al tensiómetro ni al diagnóstico médico.",
    resumen_en:
      "A study published in Nature trained an artificial intelligence on a smartwatch's pulse and motion signals to detect hypertension without a cuff. " +
      "In 196 adults at five US sites, compared with 24-hour monitoring, the watch caught somewhat more cases than a single office reading (66% vs 55%). " +
      "It is early research with a small sample: it still misses many cases and does not replace a blood pressure cuff or a medical diagnosis.",
    fuente: "Nature (vía Google Research)",
    url: "https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/",
  },
  {
    fecha: "2026-11-06",
    area: "Ejercicio y prevención",
    area_en: "Exercise and prevention",
    titulo: "Unos minutos de esfuerzo intenso pesan más que muchas horas tranquilas",
    titulo_en: "A few minutes of hard effort may count more than hours of easy movement",
    resumen:
      "Un estudio publicado en el European Heart Journal analizó los datos de pulsera de actividad de más de 96.000 adultos del UK Biobank. " +
      "Quienes hacían algo más del 4 % de su actividad diaria a intensidad vigorosa tenían entre un 29 % y un 61 % menos riesgo de ocho enfermedades crónicas y de muerte prematura, " +
      "incluso con el mismo volumen total de movimiento. Es un estudio observacional: muestra una asociación, no demuestra causa.",
    resumen_en:
      "A study in the European Heart Journal analysed wrist-tracker data from more than 96,000 UK Biobank adults. " +
      "Those who did just over 4% of their daily activity at vigorous intensity had a 29% to 61% lower risk of eight chronic diseases and premature death, " +
      "even with the same total amount of movement. It is an observational study: it shows an association, not cause and effect.",
    fuente: "European Heart Journal (vía Men's Journal)",
    url: "https://www.mensjournal.com/health/scientists-studied-96000-adults-and-found-a-surprising-exercise-longevity-benefit",
  },
];
