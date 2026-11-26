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
    fecha: "2026-11-26",
    area: "Neurorrehabilitación",
    area_en: "Neurorehabilitation",
    titulo: "Moverse al ritmo de la música en casa podría ayudar tras un ictus, apunta un estudio piloto",
    titulo_en: "Moving to rhythm and music at home may help after a stroke, a pilot study suggests",
    resumen: "En un estudio piloto en Indonesia con 30 personas que habían tenido un ictus en los dos meses anteriores, quienes añadieron en casa durante un mes ejercicios guiados por ritmo y música (el método Ronnie Gardiner) tenían con más frecuencia fuerza útil en brazos y piernas al final (93% frente a 53%), aunque ese grupo ya partía con más fuerza. Más de ellos caminaban sin ayuda (73% frente a 47%), pero esa diferencia podía deberse al azar. Es un estudio pequeño, sin sorteo de grupos y con poca asistencia a las sesiones, así que hacen falta ensayos más grandes.",
    resumen_en: "In a pilot study in Indonesia with 30 people who had had a stroke in the previous two months, those who added a month of home exercises guided by rhythm and music (the Ronnie Gardiner Method) more often had useful arm and leg strength at the end (93% vs 53%), although that group already started out stronger. More of them could walk without help (73% vs 47%), but that difference may be due to chance. It is a small, non-randomised study with low session attendance, so larger trials are needed.",
    fuente: "The Open Neurology Journal (Huwae et al., Universidad de Pattimura, estudio piloto cuasiexperimental, 2026; nota de prensa en EurekAlert)",
    url: "https://www.eurekalert.org/news-releases/1152435",
    pregunta: "¿Qué tipo de ejercicios en casa se probaron en este estudio tras un ictus?",
    pregunta_en: "What kind of home exercises were tested in this stroke study?",
    opciones: ["Natación en piscina","Pesas con máquinas de gimnasio","Movimientos guiados por ritmo y música","Juegos de realidad virtual con gafas"],
    opciones_en: ["Swimming in a pool","Weight machines at a gym","Movements guided by rhythm and music","Virtual reality games with a headset"],
    correcta: 2,
    explicacion: "El programa usaba ritmo y música para guiar los movimientos (método Ronnie Gardiner). Los resultados son prometedores pero preliminares: solo 30 personas, sin sorteo de grupos y con el grupo tratado partiendo con más fuerza.",
    explicacion_en: "The programme used rhythm and music to guide movements (the Ronnie Gardiner Method). The results are promising but preliminary: only 30 people, no randomisation, and the treated group started out stronger."
  },
  {
    fecha: "2026-11-25",
    area: "Rehabilitación respiratoria",
    area_en: "Respiratory rehabilitation",
    titulo: "Rehabilitación en casa tras un ingreso por EPOC: no evita reingresos, pero calma la ansiedad",
    titulo_en: "Home rehab after a COPD hospital stay: no fewer readmissions, but less anxiety",
    resumen: "En un ensayo australiano con 157 personas con EPOC recién dadas de alta, empezar un programa de rehabilitación en casa en las dos primeras semanas (una visita de fisioterapia y llamadas semanales durante 8 semanas) no redujo los reingresos al año: 60% frente a 64% con la atención habitual, una diferencia que puede deberse al azar. Sí bajó la ansiedad y tres de cada cuatro participantes completaron el programa. Quienes lo terminaron mejoraron más en ahogo y calidad de vida, aunque esa comparación no es aleatorizada.",
    resumen_en: "In an Australian trial with 157 people with COPD just discharged from hospital, starting a home rehabilitation programme within two weeks (one physiotherapy home visit plus weekly phone calls for 8 weeks) did not reduce readmissions over a year: 60% versus 64% with usual care, a difference that may be due to chance. It did lower anxiety, and three in four participants completed the programme. Those who finished it improved more in breathlessness and quality of life, although that comparison is not randomised.",
    fuente: "European Respiratory Journal (Cox, Holland et al., ensayo aleatorizado early HomeBase, 2026)",
    url: "https://pubmed.ncbi.nlm.nih.gov/43057871",
    pregunta: "¿Qué mejoró claramente la rehabilitación en casa tras el alta por EPOC?",
    pregunta_en: "What did home rehabilitation after a COPD hospital stay clearly improve?",
    opciones: ["Los reingresos en el hospital","La supervivencia a un año","La función pulmonar en la espirometría","La ansiedad"],
    opciones_en: ["Hospital readmissions","One-year survival","Lung function on spirometry","Anxiety"],
    correcta: 3,
    explicacion: "La ansiedad bajó de forma significativa, pero los reingresos al año fueron parecidos en ambos grupos (60% frente a 64%). Las mejoras en ahogo y calidad de vida solo se vieron en quienes completaron el programa, en una comparación no aleatorizada.",
    explicacion_en: "Anxiety fell significantly, but one-year readmissions were similar in both groups (60% vs 64%). Gains in breathlessness and quality of life were only seen in those who completed the programme, in a non-randomised comparison."
  },
  {
    fecha: "2026-11-24",
    area: "Enfermería y cuidados",
    area_en: "Nursing and care",
    titulo: "Una enfermera que vigila los efectos secundarios ayuda a bajar la tensión más difícil",
    titulo_en: "A nurse who checks medication side effects helps lower hard-to-treat blood pressure",
    resumen: "Algunas personas siguen con la tensión alta pese a tomar varios fármacos, a menudo porque las pastillas les sientan mal y dejan de tomarlas bien. En un ensayo con 46 pacientes, quienes tuvieron 6-8 visitas con enfermería centradas en detectar y resolver esos efectos secundarios bajaron su tensión sistólica de 24 horas unos 17 mmHg en 6 meses, frente a unos 4 mmHg con la atención habitual. Es un estudio pequeño y sin cegamiento, así que hacen falta ensayos más grandes.",
    resumen_en: "Some people keep high blood pressure despite taking several drugs, often because the pills cause side effects and they stop taking them properly. In a trial with 46 patients, those who had 6-8 nurse visits focused on spotting and solving those side effects lowered their 24-hour systolic pressure by about 17 mmHg over 6 months, versus about 4 mmHg with usual care. It is a small, open-label study, so larger trials are needed.",
    fuente: "Journal of Clinical Hypertension (Ortega Díaz et al., ensayo aleatorizado, 2026)",
    url: "https://pubmed.ncbi.nlm.nih.gov/43061824",
    pregunta: "¿En qué se centraban las visitas de enfermería que ayudaron a bajar la tensión?",
    pregunta_en: "What did the nurse visits that helped lower blood pressure focus on?",
    opciones: ["En añadir más pastillas","En detectar y resolver los efectos secundarios de la medicación","En seguir una dieta sin nada de sal","En hacer ejercicio en grupo"],
    opciones_en: ["Adding more pills","Spotting and solving medication side effects","Following a completely salt-free diet","Doing group exercise"],
    correcta: 1,
    explicacion: "Las visitas buscaban los efectos secundarios poco reconocidos de los fármacos y los manejaban, lo que se asoció a una bajada mayor de la tensión de 24 horas. Es un ensayo pequeño (46 personas) y abierto.",
    explicacion_en: "The visits looked for under-recognised drug side effects and managed them, which was linked to a larger drop in 24-hour blood pressure. It is a small (46 people), open-label trial."
  },
  {
    fecha: "2026-11-23",
    area: "Metabólica y obesidad",
    area_en: "Metabolic health and obesity",
    titulo: "Entrenar la respiración mientras pedaleas da un extra a personas con obesidad",
    titulo_en: "Training your breathing while you pedal gives people with obesity an extra boost",
    resumen: "En un ensayo con 51 adultos con obesidad, dos programas de 10 semanas (tres días por semana) mejoraron por igual la distancia que caminaban en 6 minutos: unos 57-64 metros más que el grupo que no hizo ejercicio. Uno de los grupos usaba además un pequeño aparato que pone resistencia al inspirar mientras hacía el ejercicio aeróbico, y ese grupo ganó además fuerza en los músculos de la respiración y una mejor respuesta ventilatoria. Es un estudio pequeño de un solo centro, así que hacen falta ensayos más grandes.",
    resumen_en: "In a trial with 51 adults with obesity, two 10-week programmes (three days a week) improved the distance walked in 6 minutes equally: about 57-64 metres more than the group that did no exercise. One group also used a small device that adds resistance when breathing in during aerobic exercise, and that group additionally gained breathing-muscle strength and a better ventilatory response. It is a small single-centre study, so larger trials are needed.",
    fuente: "Archives of Physical Medicine and Rehabilitation (Yiğit et al., ensayo aleatorizado, 2026)",
    url: "https://consensus.app/papers/details/w:d8115c12-f219-4e2e-b3c1-c2835e06c4a3/",
    pregunta: "¿Qué beneficio extra tuvo el grupo que entrenó la respiración durante el ejercicio?",
    pregunta_en: "What extra benefit did the group that trained breathing during exercise get?",
    opciones: ["Perdió el doble de peso","Caminó el doble de distancia","Ganó fuerza en los músculos de la respiración","Dejó de necesitar medicación"],
    opciones_en: ["It lost twice as much weight","It walked twice as far","It gained strength in the breathing muscles","It no longer needed medication"],
    correcta: 2,
    explicacion: "Ambos programas mejoraron por igual la distancia caminada, pero solo el que añadía entrenamiento inspiratorio mejoró además la fuerza de los músculos respiratorios y la ventilación. Es un ensayo pequeño (51 personas).",
    explicacion_en: "Both programmes improved walking distance equally, but only the one adding inspiratory training also improved breathing-muscle strength and ventilation. It is a small trial (51 people)."
  },
  {
    fecha: "2026-11-22",
    area: "Geriatría y caídas",
    area_en: "Geriatrics and falls",
    titulo: "Un aviso en la historia clínica que receta ejercicio reduce las caídas de los mayores",
    titulo_en: "An alert in the medical record that prescribes exercise cuts falls in older adults",
    resumen: "En 22 centros de salud de Estados Unidos, casi 12.000 personas mayores de 65 años con riesgo de caerse participaron en un ensayo. En la mitad de los centros, el ordenador del médico sugería un programa de ejercicio a medida, la derivación al fisioterapeuta y materiales para el paciente; en esos centros hubo alrededor de un 9 % menos de caídas y un 6 % menos de lesiones por caídas. El efecto fue modesto, las caídas se contaron a partir de los registros médicos y solo uno de cada cinco pacientes recibió la receta de ejercicio.",
    resumen_en: "In 22 primary care practices in the United States, almost 12,000 people over 65 at risk of falling took part in a trial. In half of the practices, the doctor's computer suggested a tailored exercise programme, referral to a physiotherapist and patient materials; those practices had about 9% fewer falls and 6% fewer fall-related injuries. The effect was modest, falls were counted from medical records, and only about one in five patients actually received the exercise prescription.",
    fuente: "JAMA Network Open (Latham et al., ensayo eSTEPS, Mass General Brigham / UTMB, 2026)",
    url: "https://doi.org/10.1001/jamanetworkopen.2026.39240",
    pregunta: "¿Qué hacía la herramienta probada en el ensayo eSTEPS?",
    pregunta_en: "What did the tool tested in the eSTEPS trial do?",
    opciones: ["Ayudaba al médico a recetar ejercicio a medida desde la historia clínica","Avisaba a la familia cuando el mayor se caía en casa","Medía la fuerza con un reloj inteligente","Recetaba vitamina D a todos los mayores"],
    opciones_en: ["Helped the doctor prescribe tailored exercise from the medical record","Alerted the family when the older person fell at home","Measured strength with a smartwatch","Prescribed vitamin D to all older adults"],
    correcta: 0,
    explicacion: "La herramienta, integrada en la historia clínica electrónica, sugería ejercicio a medida, derivación a fisioterapia y materiales educativos. Las caídas bajaron alrededor de un 9 %, un efecto modesto.",
    explicacion_en: "The tool, built into the electronic health record, suggested tailored exercise, physiotherapy referral and educational materials. Falls dropped by about 9%, a modest effect."
  },
  {
    fecha: "2026-11-21",
    area: "Oncología",
    area_en: "Oncology",
    titulo: "Yoga y Pilates, los ejercicios que más alivian el cansancio que deja el cáncer",
    titulo_en: "Yoga and Pilates are the exercises that best ease cancer-related tiredness",
    resumen: "Un gran análisis de 166 ensayos con más de 14.000 pacientes comparó distintos tipos y cantidades de ejercicio frente al cansancio extremo que provoca el cáncer. Durante el tratamiento destacó el yoga, y en quienes ya lo habían terminado, el Pilates; caminar, el ejercicio aeróbico y combinar aeróbico con fuerza también ayudaron. Los autores advierten que los resultados son exploratorios y que la calidad de la evidencia va de muy baja a moderada.",
    resumen_en: "A large analysis of 166 trials with over 14,000 patients compared different types and amounts of exercise against the extreme tiredness caused by cancer. During treatment yoga stood out, and in people who had finished treatment, Pilates; walking, aerobic exercise and combining aerobic with strength work also helped. The authors warn the results are exploratory and the quality of evidence ranges from very low to moderate.",
    fuente: "Supportive Care in Cancer (Huang et al., metaanálisis en red dosis-respuesta, 2026)",
    url: "https://link.springer.com/article/10.1007/s00520-026-11515-y",
    pregunta: "Según el análisis, ¿qué ejercicio tuvo el mayor efecto sobre el cansancio en quienes ya habían terminado el tratamiento del cáncer?",
    pregunta_en: "According to the analysis, which exercise had the largest effect on tiredness in people who had finished cancer treatment?",
    opciones: ["Natación","Caminar","Levantar pesas","Pilates"],
    opciones_en: ["Swimming","Walking","Lifting weights","Pilates"],
    correcta: 3,
    explicacion: "En supervivientes que ya habían acabado el tratamiento, el mayor efecto fue para el Pilates (y el yoga durante el tratamiento). Son resultados exploratorios con evidencia de certeza muy baja a moderada.",
    explicacion_en: "In survivors who had finished treatment, the largest effect was for Pilates (and yoga during treatment). These are exploratory results with very low to moderate certainty of evidence."
  },
  {
    fecha: "2026-11-20",
    area: "Salud digital",
    area_en: "Digital health",
    titulo: "Rehabilitar la rodilla operada con una app en casa funciona casi igual que ir al hospital",
    titulo_en: "Rehabbing a replaced knee with a home app works almost as well as going to hospital",
    resumen: "Un ensayo piloto del Singapore General Hospital comparó, en 30 personas operadas de prótesis de rodilla, la rehabilitación en el hospital con un programa en el móvil que guiaba los ejercicios y avisaba al fisioterapeuta. A las 12 semanas, la velocidad al caminar fue prácticamente igual en ambos grupos y la adherencia fue parecida (alrededor del 80 %), aunque quienes fueron al hospital se mostraron algo más satisfechos. Es un estudio pequeño, con pacientes que se manejaban bien con la tecnología, así que hace falta confirmarlo en ensayos más grandes.",
    resumen_en: "A pilot trial at Singapore General Hospital compared, in 30 people after knee replacement, hospital-based rehabilitation with a phone programme that guided the exercises and alerted the physiotherapist. At 12 weeks, walking speed was practically the same in both groups and adherence was similar (around 80%), although those who went to hospital were somewhat more satisfied. It is a small study in fairly tech-savvy patients, so it needs confirming in larger trials.",
    fuente: "Annals, Academy of Medicine, Singapore (Chew, Pua et al., Singapore General Hospital, 2026)",
    url: "https://annals.edu.sg/automated-telemonitored-rehab/",
    pregunta: "En el ensayo, ¿en qué fueron mejor valorados los pacientes que hicieron la rehabilitación en el hospital?",
    pregunta_en: "In the trial, in what did patients who did rehabilitation in hospital score better?",
    opciones: ["En velocidad al caminar","En satisfacción con el programa","En número de complicaciones graves","En adherencia a los ejercicios"],
    opciones_en: ["Walking speed","Satisfaction with the programme","Number of serious complications","Adherence to the exercises"],
    correcta: 1,
    explicacion: "La velocidad al caminar y la adherencia fueron casi iguales, pero la satisfacción fue algo mayor en el grupo del hospital. Al ser un ensayo piloto con 30 personas, las conclusiones son preliminares.",
    explicacion_en: "Walking speed and adherence were almost the same, but satisfaction was somewhat higher in the hospital group. As a pilot trial with 30 people, the conclusions are preliminary."
  },
  {
    fecha: "2026-11-19",
    area: "Salud mental",
    area_en: "Mental health",
    titulo: "Hacer ejercicio antes de la terapia ayuda a la mente a sacarle más partido en la depresión",
    titulo_en: "Exercising before therapy helps the mind get more out of it in depression",
    resumen: "Un ensayo internacional con 120 adultos con depresión leve o moderada (Universidad de São Paulo y Universidad de Wisconsin-Madison, con la parte clínica en Berlín) probó 12 semanas de ejercicio y después 12 semanas de terapia cognitivo-conductual. Quienes entrenaron a mayor intensidad ganaron más forma física y más velocidad mental y atención, y las mejoras de memoria se consolidaron sobre todo durante la terapia posterior. Es un estudio pequeño en el que solo 74 personas completaron todas las fases, así que los resultados deben confirmarse.",
    resumen_en: "An international trial with 120 adults with mild to moderate depression (University of São Paulo and University of Wisconsin-Madison, with the clinical part in Berlin) tested 12 weeks of exercise followed by 12 weeks of cognitive behavioural therapy. Those who trained at higher intensity gained the most fitness, mental speed and attention, and memory gains were consolidated mainly during the therapy that followed. It is a small study in which only 74 people completed every phase, so the results need confirming.",
    fuente: "Mental Health and Physical Activity (Werneck et al., USP / UW-Madison, 2026; nota de prensa FAPESP)",
    url: "https://www.eurekalert.org/news-releases/1152330",
    pregunta: "Según el estudio, ¿cuándo se consolidaron sobre todo las mejoras de memoria?",
    pregunta_en: "According to the study, when were memory gains mainly consolidated?",
    opciones: ["En la primera semana de ejercicio","Solo en el grupo que no hizo ejercicio","Al dejar la medicación antidepresiva","Durante la terapia que siguió al ejercicio"],
    opciones_en: ["In the first week of exercise","Only in the group that did not exercise","When stopping antidepressant medication","During the therapy that followed the exercise"],
    correcta: 3,
    explicacion: "Las 12 semanas de ejercicio mejoraron la forma física y prepararon el terreno, pero las ganancias de memoria se afianzaron en la fase de terapia cognitivo-conductual. Es un ensayo pequeño y con muchos abandonos, así que hace falta confirmarlo.",
    explicacion_en: "The 12 weeks of exercise improved fitness and laid the groundwork, but memory gains took hold during the cognitive behavioural therapy phase. It is a small trial with many dropouts, so it needs confirming."
  },
  {
    fecha: "2026-11-18",
    area: "Pediatría",
    area_en: "Paediatrics",
    titulo: "Ejercicio aeróbico suave en casa ayuda a adolescentes a recuperarse antes de una conmoción",
    titulo_en: "Gentle aerobic exercise at home helps teens recover sooner from a concussion",
    resumen: "Un ensayo publicado en JAMA Pediatrics (Seattle Children's y otros centros de EE. UU.) incluyó a 210 chicos y chicas de 11 a 18 años con síntomas de conmoción que duraban semanas. Quienes hicieron ejercicio aeróbico suave en casa (caminar rápido o bici estática con pulsera de actividad y un entrenador por videollamada durante 6 semanas) mejoraron sus síntomas y su calidad de vida más rápido que quienes solo hicieron estiramientos. La ventaja se notó a los 3 meses pero desapareció a los 6, cuando ambos grupos estaban igual de bien.",
    resumen_en: "A trial published in JAMA Pediatrics (Seattle Children's and other US centres) included 210 young people aged 11 to 18 with concussion symptoms lasting weeks. Those who did gentle aerobic exercise at home (brisk walking or a stationary bike, with an activity tracker and a video-call coach for 6 weeks) improved their symptoms and quality of life faster than those who only stretched. The advantage was seen at 3 months but disappeared by 6 months, when both groups were doing equally well.",
    fuente: "JAMA Pediatrics (Chrisman et al., ensayo MSTEP, Seattle Children's, 2026)",
    url: "https://jamanetwork.com/journals/jamapediatrics/article-abstract/2855372",
    pregunta: "¿Qué encontró el ensayo en adolescentes con conmoción que hicieron ejercicio aeróbico suave?",
    pregunta_en: "What did the trial find in teens with concussion who did gentle aerobic exercise?",
    opciones: ["Empeoraron sus síntomas por esforzarse demasiado pronto","No hubo ninguna diferencia en ningún momento","Mejoraron más rápido que con estiramientos, sobre todo a los 3 meses","Necesitaron el doble de tiempo para volver al colegio"],
    opciones_en: ["Their symptoms got worse from exerting themselves too early","There was no difference at any time","They improved faster than with stretching, especially at 3 months","They needed twice as long to return to school"],
    correcta: 2,
    explicacion: "A los 3 meses, el grupo de ejercicio aeróbico tenía menos síntomas y mejor calidad de vida que el de estiramientos, sin efectos adversos. A los 6 meses ambos grupos se igualaron.",
    explicacion_en: "At 3 months, the aerobic exercise group had fewer symptoms and better quality of life than the stretching group, with no adverse events. By 6 months both groups had caught up."
  },
  {
    fecha: "2026-11-17",
    area: "Neurorrehabilitación",
    area_en: "Neurorehabilitation",
    titulo: "Moverse más de 8 horas a la semana se asocia a un Parkinson que avanza más despacio",
    titulo_en: "Over 8 hours of activity a week linked to slower Parkinson's progression",
    resumen: "Un estudio publicado en Neurology (Universidad de Cincinnati) siguió durante hasta siete años a 294 personas con Parkinson leve o moderado. Quienes hacían más de 8 horas semanales de actividad física (en casa, en el trabajo o en sus aficiones) apenas perdieron memoria y capacidad de pensar con los años, y sus síntomas de movimiento empeoraron menos que en quienes se movían 4 horas o menos. Ojo: es un estudio observacional con actividad autodeclarada, así que muestra una asociación, no prueba que el ejercicio frene la enfermedad.",
    resumen_en: "A study published in Neurology (University of Cincinnati) followed 294 people with mild to moderate Parkinson's for up to seven years. Those who did more than 8 hours of physical activity a week (at home, at work or in hobbies) showed almost no decline in memory and thinking over the years, and their movement symptoms worsened less than in those who moved 4 hours or less. Note: it is an observational study with self-reported activity, so it shows an association and does not prove that exercise slows the disease.",
    fuente: "Neurology (Ryu et al., University of Cincinnati, 2026)",
    url: "https://www.aan.com/PressRoom/Home/PressRelease/5370",
    pregunta: "En este estudio, ¿qué grupo mostró un deterioro más lento de la memoria y del movimiento?",
    pregunta_en: "In this study, which group showed slower decline in memory and movement?",
    opciones: ["Quienes hacían más de 8 horas semanales de actividad física", "Quienes hacían hasta 4 horas semanales", "Quienes solo tomaban medicación, sin moverse", "No hubo diferencias entre grupos"],
    opciones_en: ["Those doing over 8 hours of physical activity a week", "Those doing up to 4 hours a week", "Those who only took medication without moving", "There were no differences between groups"],
    correcta: 0,
    explicacion: "El grupo más activo (más de 8 h/semana) casi no perdió puntuación cognitiva y empeoró menos en movimiento. Es observacional: indica asociación, no causa.",
    explicacion_en: "The most active group (over 8 h/week) barely lost cognitive score and worsened less in movement. It is observational: it shows association, not cause."
  },
  {
    fecha: "2026-11-16",
    area: "Ejercicio y prevención",
    area_en: "Exercise and prevention",
    titulo: "Fútbol y balonmano activan más la formación de hueso que caminar o ir al gimnasio",
    titulo_en: "Football and handball boost bone building more than walking or gym workouts",
    resumen: "Un metaanálisis de la Universidad Semmelweis, publicado en Sports Medicine - Open, reunió 24 estudios con 1.238 adultos sanos y analizó marcadores en sangre de formación de hueso. Los deportes intensos con sprints, saltos y cambios de dirección, como el fútbol o el balonmano recreativos, elevaron esos marcadores hasta un 45 %, mientras que caminar, el aeróbic con step o la musculación habitual tuvieron efectos pequeños o nulos. Ojo: se midieron marcadores en sangre, no la densidad ósea ni las fracturas, así que aún no prueba que proteja frente a la osteoporosis.",
    resumen_en: "A meta-analysis from Semmelweis University, published in Sports Medicine - Open, pooled 24 studies with 1,238 healthy adults and looked at blood markers of bone formation. Intense sports with sprints, jumps and changes of direction, such as recreational football or handball, raised those markers by up to 45%, while walking, step aerobics or standard gym weight training had small or no effects. Note: the study measured blood markers, not bone density or fractures, so it does not yet prove protection against osteoporosis.",
    fuente: "Sports Medicine - Open (Barna et al., Semmelweis University, 2026)",
    url: "https://www.sciencedaily.com/releases/2026/11/261110042601.htm",
    pregunta: "Según este metaanálisis, ¿qué tipo de ejercicio activó más los marcadores de formación de hueso?",
    pregunta_en: "According to this meta-analysis, which type of exercise boosted bone-formation markers the most?",
    opciones: ["Caminar a paso tranquilo", "La musculación habitual en el gimnasio", "Deportes intensos con sprints y cambios de dirección", "Los estiramientos"],
    opciones_en: ["Walking at an easy pace", "Standard gym weight training", "Intense sports with sprints and changes of direction", "Stretching"],
    correcta: 2,
    explicacion: "El fútbol y el balonmano recreativos dieron las mayores subidas (hasta un 45 %). Pero se midieron marcadores en sangre, no densidad ósea ni fracturas.",
    explicacion_en: "Recreational football and handball produced the largest rises (up to 45%). But the study measured blood markers, not bone density or fractures."
  },
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
