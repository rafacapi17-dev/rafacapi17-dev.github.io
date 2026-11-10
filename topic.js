/* =====================================================================
   TEMA DEL DÍA
   ---------------------------------------------------------------------
   Este archivo lo actualiza cada noche el resumen de noticias: añade
   una entrada nueva AL PRINCIPIO de la lista. La web muestra la primera.
   Se guardan todas: forman el archivo de la web.
   Campos de la pregunta del día (opcionales): pregunta, opciones, correcta
   (número empezando en 0), explicacion, y sus versiones _en.
   ===================================================================== */
window.TOPIC_DIA = [
  {
    fecha: "2026-11-10",
    area: "Salud de la mujer",
    area_en: "Women's health",
    titulo: "Moverse en la menopausia mejora el ánimo y la calidad de vida",
    titulo_en: "Staying active during menopause lifts mood and quality of life",
    resumen:
      "Una revisión del University College London, publicada en la revista Menopause, reunió 12 ensayos clínicos con más de 1.000 mujeres en la perimenopausia o al inicio de la posmenopausia. " +
      "Las actividades aeróbicas, como caminar, bailar o hacer zumba, fueron las que más redujeron los síntomas depresivos y mejoraron la calidad de vida, mientras que el yoga, el taichí o el pilates mejoraron sobre todo el bienestar psicológico. " +
      "Los propios autores avisan de que muchos ensayos eran pequeños, muy distintos entre sí y con riesgo de sesgo, así que hacen falta estudios mejores.",
    resumen_en:
      "A review led by University College London, published in the journal Menopause, pooled 12 clinical trials involving more than 1,000 women in perimenopause or early postmenopause. " +
      "Aerobic activities such as walking, dancing or Zumba did the most to reduce depressive symptoms and improve quality of life, while yoga, tai chi or Pilates mainly improved psychological wellbeing. " +
      "The authors caution that many trials were small, very different from one another and at risk of bias, so better studies are needed.",
    fuente: "Menopause (vía News-Medical / UCL)",
    url: "https://news-medical.net/news/20261013/Exercise-boosts-psychological-wellbeing-for-menopausal-women.aspx",
    pregunta: "Según la revisión, ¿qué tipo de actividad redujo más los síntomas depresivos durante la menopausia?",
    pregunta_en: "According to the review, which type of activity did the most to reduce depressive symptoms during menopause?",
    opciones: ["Solo estiramientos suaves", "Ninguna actividad tuvo efecto", "Actividades aeróbicas como caminar o bailar", "Levantar pesas muy pesadas"],
    opciones_en: ["Gentle stretching only", "No activity had any effect", "Aerobic activities such as walking or dancing", "Lifting very heavy weights"],
    correcta: 2,
    explicacion: "Las actividades aeróbicas fueron las que más redujeron los síntomas depresivos y mejoraron la calidad de vida; el yoga o el taichí ayudaron sobre todo al bienestar psicológico. Aun así, los ensayos eran pocos y de calidad desigual.",
    explicacion_en: "Aerobic activities did the most to reduce depressive symptoms and improve quality of life; yoga or tai chi mainly helped psychological wellbeing. Even so, the trials were few and of uneven quality."
  },
  {
    fecha: "2026-11-09",
    area: "Obesidad y dolor articular",
    area_en: "Obesity and joint pain",
    titulo: "Un fármaco experimental para adelgazar alivia el dolor de rodilla por artrosis",
    titulo_en: "An experimental weight-loss drug eases knee osteoarthritis pain",
    resumen:
      "Dos ensayos clínicos con más de 1.000 adultos con obesidad o sobrepeso y artrosis de rodilla, publicados en el New England Journal of Medicine, probaron la retatrutida, un fármaco inyectable semanal aún no aprobado. " +
      "Tras más de un año, quienes la recibieron perdieron hasta un 20-25 % de su peso y cerca de dos tercios redujeron su dolor de rodilla al menos a la mitad, frente a algo menos de 4 de cada 10 con placebo. " +
      "Los efectos secundarios digestivos fueron frecuentes, los ensayos los financió el fabricante y no se estudió si el fármaco frena el desgaste de la articulación.",
    resumen_en:
      "Two clinical trials in more than 1,000 adults with obesity or overweight and knee osteoarthritis, published in the New England Journal of Medicine, tested retatrutide, a weekly injectable drug that is not yet approved. " +
      "After more than a year, people on the drug lost up to 20-25% of their body weight and about two in three cut their knee pain at least in half, compared with just under four in ten on placebo. " +
      "Digestive side effects were common, the trials were funded by the manufacturer, and they did not test whether the drug slows joint damage.",
    fuente: "New England Journal of Medicine (vía Rheumatology Live)",
    url: "https://www.rheum-live.com/view/retatrutide-reduces-knee-osteoarthritis-pain-in-triumph-4-and-triumph-1-oa",
    pregunta: "En los ensayos con retatrutida, ¿qué proporción aproximada de participantes redujo su dolor de rodilla al menos a la mitad?",
    pregunta_en: "In the retatrutide trials, roughly what share of participants cut their knee pain at least in half?",
    opciones: ["Cerca de 1 de cada 10", "Cerca de 2 de cada 3", "Prácticamente todos", "Los mismos que con placebo"],
    opciones_en: ["About 1 in 10", "About 2 in 3", "Almost everyone", "The same as with placebo"],
    correcta: 1,
    explicacion: "Alrededor de dos tercios de quienes recibieron el fármaco redujeron su dolor al menos a la mitad, frente a algo menos de 4 de cada 10 con placebo. Aun así, el fármaco no está aprobado y los ensayos los financió el fabricante.",
    explicacion_en: "About two in three people on the drug cut their pain at least in half, compared with just under four in ten on placebo. Still, the drug is not approved and the trials were funded by the manufacturer.",
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
    pregunta: "Con el mismo movimiento total al día, ¿qué se asoció a menos riesgo de enfermedades crónicas en este estudio?",
    pregunta_en: "With the same total daily movement, what was linked to a lower risk of chronic disease in this study?",
    opciones: ["Caminar más horas a ritmo suave", "Dedicar una pequeña parte de la actividad a esfuerzo vigoroso", "Concentrar todo el ejercicio en el fin de semana", "Dormir más de nueve horas"],
    opciones_en: ["Walking more hours at an easy pace", "Spending a small share of activity at vigorous effort", "Doing all exercise at the weekend", "Sleeping more than nine hours"],
    correcta: 1,
    explicacion: "Quienes hacían algo más del 4 % de su actividad a intensidad vigorosa tenían entre un 29 % y un 61 % menos riesgo. Es un estudio observacional: muestra una asociación, no demuestra causa.",
    explicacion_en: "People who did just over 4% of their activity at vigorous intensity had a 29% to 61% lower risk. It is an observational study: it shows an association, not cause and effect.",
  },
];
