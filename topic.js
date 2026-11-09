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
    area: "Envejecimiento y cuidados",
    area_en: "Ageing and care",
    titulo: "Más ayuda en casa y formación para cuidadores retrasan el paso a una residencia",
    titulo_en: "More home help and caregiver training delay the move to a nursing home",
    resumen:
      "Un ensayo clínico realizado en Cataluña con 142 personas mayores dependientes (edad mediana, 86 años) reforzó la atención domiciliaria y formó a sus cuidadores durante 15 meses. " +
      "Frente a la atención habitual, quienes recibieron este apoyo tardaron bastante más en plantearse ingresar en una residencia (el riesgo de hacerlo se redujo aproximadamente a un tercio). " +
      "Es un estudio con una muestra pequeña; mide la disposición a ingresar, no el ingreso real, y en otras variables no hubo cambios claros.",
    resumen_en:
      "A clinical trial in Catalonia, Spain, with 142 care-dependent older adults (median age 86) stepped up home care and trained their caregivers for 15 months. " +
      "Compared with usual care, those who got this support took considerably longer to consider moving into a nursing home (the likelihood fell to about a third). " +
      "The sample is small; the study measured willingness to move, not actual admissions, and other outcomes showed no clear change.",
    fuente: "European Journal of Ageing",
    url: "https://link.springer.com/article/10.1007/s10433-026-00955-4",
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
