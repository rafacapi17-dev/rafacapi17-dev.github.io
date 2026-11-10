/* =====================================================================
   PRODUCCIÓN CIENTÍFICA (publicaciones propias)
   ---------------------------------------------------------------------
   Esta sección es independiente de los temas de divulgación.

   PUBLICACIONES: cada una con
     tipo:        "articulo" o "congreso"
     estudio:     tipo de estudio (p. ej. "Revisión sistemática y metaanálisis")
     titulo:      título original
     autores:     lista separada por comas (tu nombre se resalta solo)
     revista:     revista (artículos) o nombre del congreso (congresos)
     anio, mes:   fecha de publicación o del congreso
     volumen, numero, paginas: opcionales (artículos)
     formato:     solo congresos: "Comunicación oral", "Póster"…
     lugar:       solo congresos: ciudad
     doi / url:   enlace (opcional)

   EN CURSO: trabajos que aún no están publicados
     titulo, titulo_en, estudio, estudio_en, estado, estado_en, nota, nota_en
   ===================================================================== */
window.PRODUCCION = {
  publicaciones: [
    {
      tipo: "articulo",
      estudio: "Revisión sistemática y metaanálisis",
      estudio_en: "Systematic review and meta-analysis",
      titulo: "Effects of Therapeutic Exercise on Bone Health and Mineral Metabolism in Chronic Kidney Disease–Mineral and Bone Disorder: A Systematic Review and Meta-Analysis",
      autores: "Jiawei Andre Guo Liang, Rafael Jiménez López, Carmen Cruz Herrera, Alejandro Heredia Ciuró, Valentina Beron Quilindo, Jesús Zamora Tortosa, Marie Carmen Valenza",
      revista: "Physiologia",
      anio: 2026, mes: 7,
      volumen: "6", numero: "3", paginas: "48",
      doi: "10.3390/physiologia6030048",
    },
    {
      tipo: "articulo",
      estudio: "Revisión sistemática y metaanálisis",
      estudio_en: "Systematic review and meta-analysis",
      titulo: "Effectiveness of Conversational Agents on Patient-Reported Outcomes in Chronic Pain Management: A Systematic Review and Meta-Analysis",
      autores: "Jesús Zamora-Tortosa, Alejandro Heredia-Ciuró, Carmen Cruz Herrera, Rafael Jiménez López, Jiawei Guo Liang, Marie Carmen Valenza, Eva Lantarón-Caeiro",
      revista: "Healthcare",
      anio: 2026, mes: 5,
      volumen: "14", numero: "10", paginas: "1360",
      doi: "10.3390/healthcare14101360",
    },
    {
      tipo: "articulo",
      estudio: "Estudio de concordancia",
      estudio_en: "Agreement study",
      titulo: "Agreement Between Face-to-Face and Tele-Assessment of Shoulder Function and Clinical Impairment in Female Handball Players with Previous Shoulder Injury",
      autores: "Javier Martín Núñez, Andrés Calvache Mateo, Laura López López, Rafael Jiménez López, Jiawi André Guo Liang, Marie Carmen Valenza, María del Carmen García Ríos",
      revista: "Applied Sciences",
      anio: 2026, mes: 4,
      volumen: "16", numero: "8", paginas: "3858",
      doi: "10.3390/app16083858",
    },
    // Ejemplo de congreso (copia, rellena y quita las // del principio):
    // {
    //   tipo: "congreso",
    //   formato: "Comunicación oral",          // o "Póster"
    //   titulo: "Título de la comunicación",
    //   autores: "Rafael Jiménez López, ...",
    //   revista: "Nombre del congreso",
    //   lugar: "Granada",
    //   anio: 2026, mes: 5,
    //   url: "",
    // },
  ],

  enCurso: [
    {
      estudio: "Revisión sistemática",
      estudio_en: "Systematic review",
      titulo: "Concordancia entre el goniómetro de smartphone y el goniómetro universal para medir el rango de movimiento de la rodilla",
      titulo_en: "Agreement between smartphone and universal goniometers for measuring knee range of motion",
      estado: "En redacción",
      estado_en: "In preparation",
    },
    {
      estudio: "Revisión sistemática y metaanálisis",
      estudio_en: "Systematic review and meta-analysis",
      titulo: "Efectividad del ejercicio terapéutico en mujeres sometidas a cirugía bariátrica",
      titulo_en: "Effectiveness of therapeutic exercise in women after bariatric surgery",
      estado: "En revisión por pares",
      estado_en: "Under peer review",
    },
    {
      estudio: "Revisión sistemática",
      estudio_en: "Systematic review",
      titulo: "Gemelos digitales (human digital twins) para la medición de variables de salud",
      titulo_en: "Human digital twins for measuring health variables",
      estado: "En redacción",
      estado_en: "In preparation",
    },
  ],
};
