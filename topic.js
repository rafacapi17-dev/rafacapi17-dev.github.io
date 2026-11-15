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
    fecha: "2026-11-15",
    area: "Salud de la mujer",
    area_en: "Women's health",
    titulo: "Una app con entrenador personal reduce la diabetes del embarazo en mujeres de riesgo",
    titulo_en: "An app with a personal health coach cuts pregnancy diabetes in at-risk women",
    resumen: "Un ensayo clínico aleatorizado en Irlanda, Reino Unido, España y Australia, publicado en The Lancet Digital Health, incluyó a 865 embarazadas con mayor riesgo de diabetes gestacional. La mitad recibió, además de la atención habitual, asesoramiento personalizado por una app y sesiones con un coach sobre alimentación, actividad física y bienestar desde el embarazo hasta un año después del parto. Menos mujeres del grupo de la app desarrollaron diabetes gestacional, aunque al año del parto su peso medio no fue distinto al del otro grupo; pesarse a menudo se asoció a menos peso, pero eso es solo una asociación.",
    resumen_en: "A randomised clinical trial in Ireland, the UK, Spain and Australia, published in The Lancet Digital Health, enrolled 865 pregnant women at higher risk of gestational diabetes. Half received, on top of usual care, personalised app-based coaching and sessions with a health coach on diet, physical activity and wellbeing from pregnancy until one year after birth. Fewer women in the app group developed gestational diabetes, although one year after birth their average weight was no different from the other group; frequent self-weighing was linked to lower weight, but that is only an association.",
    fuente: "The Lancet Digital Health (ensayo Bump2Baby and Me, O'Reilly et al., University College Dublin, 2026)",
    url: "https://www.ucd.ie/research/news/2026/bump2babyandmeappandcoachingsignificantlyreducesdiabetesriskinpregnantwomen/",
    pregunta: "¿Qué consiguió el programa de la app con coach en las embarazadas de riesgo?",
    pregunta_en: "What did the app-and-coach programme achieve in at-risk pregnant women?",
    opciones: ["Que adelgazaran mucho más al año del parto", "Que menos mujeres desarrollaran diabetes gestacional", "Que no necesitaran ir a sus revisiones", "Que tuvieran más complicaciones"],
    opciones_en: ["Much greater weight loss one year after birth", "Fewer women developed gestational diabetes", "No need to attend their check-ups", "More complications"],
    correcta: 1,
    explicacion: "Hubo menos casos de diabetes gestacional en el grupo de la app, pero el peso al año del parto fue similar en ambos grupos. Las cifras exactas se conocerán en el artículo completo.",
    explicacion_en: "There were fewer cases of gestational diabetes in the app group, but weight one year after birth was similar in both groups. Exact figures are in the full paper."
  },
  {
    fecha: "2026-11-14",
    area: "Deporte y lesiones",
    area_en: "Sports and injuries",
    titulo: "Hacer ejercicio tras operarte del ligamento cruzado mejora la rodilla y no la desgasta",
    titulo_en: "Exercising after ACL surgery improves the knee without wearing it out",
    resumen:
      "Un ensayo clínico aleatorizado australiano publicado en Annals of Internal Medicine incluyó a 184 adultos de 18 a 40 años que seguían con molestias en la rodilla entre uno y tres años después de operarse del ligamento cruzado anterior. " +
      "Quienes hicieron un programa de ejercicio de 4 meses supervisado por fisioterapeutas, junto con educación, ganaron fuerza y refirieron menos dolor y mejor calidad de vida que quienes solo recibieron una intervención educativa mínima. " +
      "No hubo señales de que el ejercicio dañara el cartílago, aunque el estudio todavía no permite saber si previene la artrosis a largo plazo.",
    resumen_en:
      "An Australian randomised clinical trial published in Annals of Internal Medicine included 184 adults aged 18 to 40 who still had knee symptoms one to three years after anterior cruciate ligament reconstruction. " +
      "Those who completed a 4-month physiotherapist-supervised exercise programme with education gained strength and reported less pain and better quality of life than those who received only a minimal educational intervention. " +
      "There was no sign that the exercise damaged knee cartilage, although the trial cannot yet tell whether it prevents osteoarthritis in the long term.",
    fuente: "Annals of Internal Medicine (Culvenor et al., La Trobe University, 2026)",
    url: "https://www.sciencedaily.com/releases/2026/11/261112025538.htm",
    pregunta: "¿Qué observaron en quienes hicieron el programa de ejercicio tras la operación de rodilla?",
    pregunta_en: "What was seen in people who did the exercise programme after knee surgery?",
    opciones: ["El cartílago se desgastó más", "Tuvieron que volver a operarse", "No mejoraron en nada", "Ganaron fuerza y tenían menos dolor, sin dañar el cartílago"],
    opciones_en: ["Their cartilage wore down faster", "They needed surgery again", "They did not improve at all", "They gained strength and had less pain, without cartilage damage"],
    correcta: 3,
    explicacion: "El programa supervisado mejoró fuerza, dolor y calidad de vida sin indicios de daño en el cartílago. Lo que aún no se sabe es si evita la artrosis a largo plazo.",
    explicacion_en: "The supervised programme improved strength, pain and quality of life with no sign of cartilage damage. Whether it prevents osteoarthritis in the long term is still unknown."
  },
  {
    fecha: "2026-11-13",
    area: "Rehabilitación cardiaca",
    area_en: "Cardiac rehabilitation",
    titulo: "Empezar a moverse en el hospital tras una insuficiencia cardiaca mejora lo que caminas",
    titulo_en: "Starting to exercise in hospital after heart failure improves how far you can walk",
    resumen:
      "Un metaanálisis de 12 ensayos clínicos publicado en Scientific Reports reunió estudios en los que personas ingresadas por insuficiencia cardiaca aguda empezaron ejercicio supervisado ya durante la hospitalización. " +
      "Quienes lo hicieron caminaron de media unos 54 metros más en la prueba de 6 minutos que quienes recibieron la atención habitual, y su calidad de vida también tendió a mejorar. " +
      "Los autores califican la certeza de la evidencia como baja, y no hay datos concluyentes sobre si reduce los reingresos o la mortalidad.",
    resumen_en:
      "A meta-analysis of 12 clinical trials published in Scientific Reports pooled studies in which people admitted for acute heart failure started supervised exercise while still in hospital. " +
      "Those who did walked on average about 54 metres more in the 6-minute walk test than those receiving usual care, and their quality of life also tended to improve. " +
      "The authors rate the certainty of the evidence as low, and the data on readmissions or mortality are inconclusive.",
    fuente: "Scientific Reports (Zhang et al., 2026)",
    url: "https://www.nature.com/articles/s41598-026-78168-z",
    pregunta: "¿Qué mejoró en quienes empezaron ejercicio durante el ingreso por insuficiencia cardiaca?",
    pregunta_en: "What improved in people who started exercise during their heart failure admission?",
    opciones: ["Se redujo claramente la mortalidad", "Dejaron de necesitar medicación", "Caminaron más metros en 6 minutos", "Ya no volvieron al hospital"],
    opciones_en: ["Mortality clearly fell", "They no longer needed medication", "They walked more metres in 6 minutes", "They never returned to hospital"],
    correcta: 2,
    explicacion: "La mejora clara fue en la prueba de marcha de 6 minutos: unos 54 metros más de media. Sobre reingresos y mortalidad los datos no son concluyentes, y la certeza global es baja.",
    explicacion_en: "The clear improvement was in the 6-minute walk test: about 54 metres more on average. Data on readmissions and mortality are inconclusive, and overall certainty is low."
  },
  {
    fecha: "2026-11-12",
    area: "Metabólica y obesidad",
    area_en: "Metabolism and obesity",
    titulo: "Levantar pesas mientras tomas fármacos para adelgazar protege tu músculo y tu fuerza",
    titulo_en: "Lifting weights while on weight-loss drugs protects your muscle and strength",
    resumen:
      "Un ensayo de la Universidad de Australia Occidental siguió durante 40 semanas a 120 personas de 50 a 70 años con obesidad que tomaban tirzepatida, un fármaco para adelgazar. " +
      "La mitad hizo tres sesiones semanales de ejercicio de fuerza: todos perdieron unos 22 kilos, pero quienes entrenaron perdieron un 25 % menos de masa magra y ganaron un 10 % de fuerza, mientras que los demás perdieron un 10 %. " +
      "No incluyó a personas con diabetes tipo 2 y la farmacéutica donó el medicamento, aunque no participó en el diseño ni en el análisis.",
    resumen_en:
      "A University of Western Australia trial followed 120 people aged 50 to 70 with obesity who were taking tirzepatide, a weight-loss drug, for 40 weeks. " +
      "Half did three resistance training sessions a week: everyone lost about 22 kilos, but those who trained lost 25% less lean mass and gained 10% in strength, while the others lost 10%. " +
      "People with type 2 diabetes were not included, and the manufacturer donated the drug, although it was not involved in the design or analysis.",
    fuente: "Nature Medicine (T-REx, University of Western Australia)",
    url: "https://www.uwa.edu.au/news/article/2026/november/resistance-training-key-to-maintaining-muscle-function-during-glp1-weight-loss",
    pregunta: "¿Qué cambió en quienes hicieron ejercicio de fuerza mientras tomaban tirzepatida?",
    pregunta_en: "What changed in people who did resistance training while taking tirzepatide?",
    opciones: ["Ganaron fuerza y perdieron menos músculo", "Perdieron el doble de peso", "Dejaron de necesitar el fármaco", "No hubo ninguna diferencia"],
    opciones_en: ["They gained strength and lost less muscle", "They lost twice as much weight", "They no longer needed the drug", "There was no difference at all"],
    correcta: 0,
    explicacion: "Ambos grupos perdieron un peso parecido, pero el grupo que entrenó fuerza perdió un 25 % menos de masa magra y ganó un 10 % de fuerza. Solo se estudiaron personas de 50 a 70 años sin diabetes tipo 2.",
    explicacion_en: "Both groups lost similar weight, but the strength-training group lost 25% less lean mass and gained 10% in strength. Only people aged 50 to 70 without type 2 diabetes were studied."
  },
  {
    fecha: "2026-11-11",
    area: "Rehabilitación cardiaca",
    area_en: "Cardiac rehabilitation",
    titulo: "El yoga como rehabilitación mejora la vida diaria de personas con insuficiencia cardiaca",
    titulo_en: "Yoga-based cardiac rehab improves daily life for people with heart failure",
    resumen:
      "Un ensayo en 16 hospitales de la India con unas 3.500 personas con insuficiencia cardiaca comparó un programa de yoga (20 sesiones supervisadas en tres meses, más práctica en casa y educación) con la atención habitual reforzada. " +
      "Quienes hicieron yoga ganaron calidad de vida y caminaron de media unos 25 metros más en la prueba de 6 minutos, aunque no tuvieron menos muertes, ingresos ni ictus. " +
      "Son resultados preliminares, presentados en el congreso de la American Heart Association y aún no publicados en una revista; además, el grupo de yoga tuvo muchas más sesiones de contacto que el grupo control.",
    resumen_en:
      "A trial in 16 hospitals in India with about 3,500 people with heart failure compared a yoga programme (20 supervised sessions over three months, plus home practice and education) with enhanced usual care. " +
      "People in the yoga group gained quality of life and walked about 25 metres further on average in the 6-minute walk test, although they did not have fewer deaths, hospital admissions or strokes. " +
      "The results are preliminary, presented at the American Heart Association meeting and not yet published in a journal; the yoga group also had many more contact sessions than the control group.",
    fuente: "AHA Scientific Sessions 2026 (American Heart Association Newsroom)",
    url: "https://newsroom.heart.org/news/yoga-based-cardiac-rehab-improved-quality-of-life-in-people-living-with-heart-failure",
    pregunta: "¿Qué mejoró con el programa de yoga en personas con insuficiencia cardiaca?",
    pregunta_en: "What improved with the yoga programme in people with heart failure?",
    opciones: ["Redujo a la mitad las muertes", "Curó la insuficiencia cardiaca", "Eliminó la necesidad de medicación", "La calidad de vida y la distancia caminada"],
    opciones_en: ["It halved the number of deaths", "It cured heart failure", "It removed the need for medication", "Quality of life and walking distance"],
    correcta: 3,
    explicacion: "El yoga mejoró la calidad de vida y la distancia caminada en 6 minutos, pero no redujo muertes, ingresos ni ictus. Son datos preliminares de un congreso, sin publicar aún en una revista.",
    explicacion_en: "Yoga improved quality of life and 6-minute walking distance, but did not reduce deaths, hospital admissions or strokes. These are preliminary conference data, not yet published in a journal."
  },
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
