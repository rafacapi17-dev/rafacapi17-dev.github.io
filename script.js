(function () {
  // ---------- Idioma (ES / EN) ----------
  let idioma = "es";
  try { idioma = new URLSearchParams(location.search).get("lang") || localStorage.getItem("idioma") || "es"; } catch (e) {}
  if (idioma !== "en") idioma = "es";
  const EN = idioma === "en";
  const LOCALE = EN ? "en-GB" : "es-ES";
  const TXT = {
    es: {
      temas: "Temas", preguntaDia: "Pregunta del día", temaDia: "Tema del día", leerNoticia: "Leer la noticia", anteriores: "Temas de días anteriores", ocultarAnteriores: "Ocultar días anteriores", sobreMi: "Sobre mí", otraPregunta: "Ver otra pregunta", cerrar: "Cerrar",
      todos: "Todos", leerMas: "Leer más", minLectura: "min de lectura", videoProx: "Vídeo próximamente",
      verTemas: (n, c) => `Ver los ${n} temas de ${c}`, vacio: "No hay temas en esta categoría.",
      proximamente: "Próximamente", enPreparacion: "Estoy preparando este tema. Vuelve pronto para leerlo.",
      video: "Vídeo", videos: (n) => `${n} vídeo${n > 1 ? "s" : ""}`, imagenes: (n) => `${n} ${n > 1 ? "imágenes" : "imagen"}`,
      reproducir: "Reproducir", reproducirVideo: "Reproducir vídeo", preguntaExtra: "Pregunta adicional",
      mostrarResp: "Mostrar respuesta", respuesta: "Respuesta", correcto: "Correcto.", incorrecto: "No es correcto.",
      correcta: "Correcta", tuResp: "Tu respuesta", verFuente: "Ver fuente",
      avisoVideo: "Estoy preparando un vídeo sobre este tema. Aparecerá aquí en cuanto se publique.", irCanal: "Ir al canal de YouTube",
      imgs: "Imágenes", vidsRel: "Vídeos relacionados", refs: "Referencias y enlaces", correo: "Correo",
      aModoOscuro: "Cambiar a modo oscuro", aModoClaro: "Cambiar a modo claro", tituloVideo: "Vídeo de YouTube",
      publicaciones: "Publicaciones", prodEtq: "Producción científica", prodIntro: "Artículos y comunicaciones a congresos de los que soy autor. Esta sección recoge mi trabajo de investigación; los temas de arriba son divulgación.",
      articulo: "Artículo", articulos: "Artículos", congreso: "Congreso", congresos: "Congresos", todas: "Todas", enCursoEtq: "En curso", enCursoTit: "Trabajos en marcha",
      sinCongresos: "Pronto añadiré aquí mis comunicaciones a congresos.", copiarRef: "Copiar referencia", refCopiada: "Referencia copiada ✓", publicados: "Artículos publicados", enMarcha: "En curso",
      archivo: "Archivo", archivoTit: "Archivo del Tema del día", archivoIntro: "Todos los hallazgos publicados cada noche, del más reciente al más antiguo.",
      archivoCompleto: "Archivo completo", buscarArchivo: "Buscar en el archivo…", todasAreas: "Todas las áreas", nTemas: (n) => `${n} tema${n === 1 ? "" : "s"}`,
      buscar: "Buscar", buscarPh: "Escribe una palabra: dolor, glía, ejercicio…", sinRes: "No hay resultados para esa búsqueda.", nRes: (n) => `${n} resultado${n === 1 ? "" : "s"}`, atajo: "Pulsa / en cualquier momento para buscar.",
      ponteAPrueba: "Ponte a prueba: pregunta del día", verRespuesta: "Ver tu respuesta de hoy", racha: "Racha", mejor: "Mejor", rachaTit: "Días seguidos acertando la pregunta del día (se guarda en este navegador)",
      compartir: "Compartir", copiarEnlace: "Copiar enlace", copiado: "Enlace copiado ✓", indice: "En este tema", enlaceTema: "Tema", temaDelDia: "Tema del día",
      error: "<strong>No se ha podido leer el contenido (data.js).</strong><br>Revisa el último cambio: suele ser una coma o unas comillas que faltan, o un carácter suelto escrito sin querer.",
    },
    en: {
      temas: "Topics", preguntaDia: "Question of the day", temaDia: "Topic of the day", leerNoticia: "Read the story", anteriores: "Previous days' topics", ocultarAnteriores: "Hide previous days", sobreMi: "About me", otraPregunta: "Show another question", cerrar: "Close",
      todos: "All", leerMas: "Read more", minLectura: "min read", videoProx: "Video coming soon",
      verTemas: (n, c) => `See all ${n} topics in ${c}`, vacio: "There are no topics in this category.",
      proximamente: "Coming soon", enPreparacion: "I'm working on this topic. Check back soon to read it.",
      video: "Video", videos: (n) => `${n} video${n > 1 ? "s" : ""}`, imagenes: (n) => `${n} image${n > 1 ? "s" : ""}`,
      reproducir: "Play", reproducirVideo: "Play video", preguntaExtra: "Bonus question",
      mostrarResp: "Show answer", respuesta: "Answer", correcto: "Correct.", incorrecto: "Not quite.",
      correcta: "Correct", tuResp: "Your answer", verFuente: "View source",
      avisoVideo: "I'm preparing a video on this topic. It will appear here as soon as it's published.", irCanal: "Go to the YouTube channel",
      imgs: "Images", vidsRel: "Related videos", refs: "References and links", correo: "Email",
      aModoOscuro: "Switch to dark mode", aModoClaro: "Switch to light mode", tituloVideo: "YouTube video",
      publicaciones: "Publications", prodEtq: "Research output", prodIntro: "Journal articles and conference contributions I have authored. This section covers my research; the topics above are science communication.",
      articulo: "Article", articulos: "Articles", congreso: "Conference", congresos: "Conferences", todas: "All", enCursoEtq: "In progress", enCursoTit: "Work in progress",
      sinCongresos: "My conference contributions will be added here soon.", copiarRef: "Copy reference", refCopiada: "Reference copied ✓", publicados: "Published articles", enMarcha: "In progress",
      archivo: "Archive", archivoTit: "Topic of the day archive", archivoIntro: "Every finding published each night, newest first.",
      archivoCompleto: "Full archive", buscarArchivo: "Search the archive…", todasAreas: "All areas", nTemas: (n) => `${n} topic${n === 1 ? "" : "s"}`,
      buscar: "Search", buscarPh: "Type a word: pain, glia, exercise…", sinRes: "No results for that search.", nRes: (n) => `${n} result${n === 1 ? "" : "s"}`, atajo: "Press / anytime to search.",
      ponteAPrueba: "Test yourself: question of the day", verRespuesta: "See today's answer", racha: "Streak", mejor: "Best", rachaTit: "Days in a row answering the question of the day correctly (saved in this browser)",
      compartir: "Share", copiarEnlace: "Copy link", copiado: "Link copied ✓", indice: "In this topic", enlaceTema: "Topic", temaDelDia: "Topic of the day",
      error: "<strong>The content (data.js) could not be loaded.</strong><br>Check the last change: usually a missing comma or quotation mark, or a stray character.",
    },
  }[idioma];
  // Devuelve la versión inglesa de un campo (campo_en) si existe y estamos en inglés
  const tx = (o, k) => (o ? (EN && o[k + "_en"] != null && o[k + "_en"] !== "" ? o[k + "_en"] : o[k]) : "");

  document.documentElement.lang = idioma;
  if (!(window.TOPIC_DIA || []).length) document.querySelectorAll('[data-i18n="temaDia"]').forEach((el) => (el.dataset.i18n = "preguntaDia"));
  document.querySelectorAll("[data-i18n]").forEach((el) => { if (typeof TXT[el.dataset.i18n] === "string") el.textContent = TXT[el.dataset.i18n]; });

  const btnIdioma = document.getElementById("btnIdioma");
  btnIdioma.textContent = EN ? "ES" : "EN";
  btnIdioma.lang = EN ? "es" : "en";
  btnIdioma.title = EN ? "Leer en español" : "Read in English";
  btnIdioma.onclick = () => {
    try { localStorage.setItem("idioma", EN ? "es" : "en"); } catch (e) {}
    const u = new URL(location.href);
    u.searchParams.delete("lang");
    if (!EN) u.searchParams.set("lang", "en");
    location.replace(u.toString());
  };

  // ---------- Modo claro / oscuro ----------
  const raiz = document.documentElement;
  const btnTema = document.getElementById("btnTema");
  const ponerEtiquetaTema = () => btnTema.setAttribute("aria-label", raiz.dataset.tema === "oscuro" ? TXT.aModoClaro : TXT.aModoOscuro);
  if (!raiz.dataset.tema) raiz.dataset.tema = matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
  ponerEtiquetaTema();
  btnTema.title = btnTema.getAttribute("aria-label");
  btnTema.onclick = () => {
    raiz.dataset.tema = raiz.dataset.tema === "oscuro" ? "claro" : "oscuro";
    try { localStorage.setItem("tema", raiz.dataset.tema); } catch (e) {}
    ponerEtiquetaTema();
    btnTema.title = btnTema.getAttribute("aria-label");
  };

  if (!window.SITE) {
    document.querySelector("main").insertAdjacentHTML("afterbegin",
      '<div style="margin:2rem 0;padding:1rem 1.25rem;border:1px solid #9b2c2c;border-left:4px solid #9b2c2c;background:#f8eeee;color:#5a1a1a;font-size:.95rem">' + TXT.error + "</div>");
  }
  const S = window.SITE || {};
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (t) => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  // Tonos sobrios para las portadas sin imagen (uno por categoría)
  const TONOS = ["#e4e0d6", "#dde3e8", "#e2e5dc", "#e8e0dc", "#e0dde6", "#e6e3d3", "#dae3e1"];
  const REDES = { email: TXT.correo, youtube: "YouTube", instagram: "Instagram", x: "X", tiktok: "TikTok", github: "GitHub", web: "Web", linkedin: "LinkedIn", orcid: "ORCID", researchgate: "ResearchGate" };
  const nombreCat = (c) => (EN && S.categorias_en && S.categorias_en[c]) || c;

  // ---------- Básicos ----------
  document.title = "RafaelJL · " + (S.nombreWeb_en && EN ? S.nombreWeb_en : S.nombreWeb || "");
  $("etiqueta").textContent = tx(S, "etiqueta");
  $("titulo").textContent = tx(S, "titular") || tx(S, "nombreWeb");
  $("intro").textContent = tx(S, "intro");
  $("sobreMi").textContent = tx(S, "sobreMi");
  if (S.foto) { $("foto").src = S.foto; $("foto").alt = S.autor || ""; $("foto").hidden = false; }
  $("enlaces").innerHTML = (S.enlaces || []).filter((e) => e.url)
    .map((e) => `<li><a href="${esc(e.url)}" ${e.tipo === "email" ? "" : 'target="_blank" rel="noopener"'}>${esc(REDES[e.tipo] || e.tipo)}</a></li>`).join("");
  $("pie").textContent = `© ${new Date().getFullYear()} RafaelJL · ${tx(S, "nombreWeb")}`;

  const fmtFecha = (f) => {
    if (!f) return "";
    const d = new Date(f + "T12:00:00");
    return isNaN(d) ? f : d.toLocaleDateString(LOCALE, { day: "numeric", month: "long", year: "numeric" });
  };
  // Texto largo: línea en blanco = párrafo, "## " = subtítulo, "- " o "* " = lista, "1. " = lista numerada, "> " = cita, **negrita**
  const enLinea = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const formatear = (texto) => {
    const lineas = String(texto || "").replace(/\r/g, "").split("\n");
    let html = "", parrafo = [], lista = [], tipo = "ul";
    const cerrarP = () => { if (parrafo.length) { html += `<p>${enLinea(parrafo.join(" "))}</p>`; parrafo = []; } };
    const cerrarL = () => { if (lista.length) { html += `<${tipo}>${lista.map((l) => `<li>${enLinea(l)}</li>`).join("")}</${tipo}>`; lista = []; } };
    const enLista = (t, texto) => { cerrarP(); if (lista.length && tipo !== t) cerrarL(); tipo = t; lista.push(texto); };
    for (const bruta of lineas) {
      const l = bruta.trim();
      if (!l) { cerrarP(); cerrarL(); continue; }
      if (l.startsWith("## ")) { cerrarP(); cerrarL(); html += `<h4>${enLinea(l.slice(3))}</h4>`; continue; }
      if (/^[-*•] /.test(l)) { enLista("ul", l.slice(2)); continue; }
      if (/^\d+[.)] /.test(l)) { enLista("ol", l.replace(/^\d+[.)] /, "")); continue; }
      if (l.startsWith("> ")) { cerrarP(); cerrarL(); html += `<blockquote>${enLinea(l.slice(2))}</blockquote>`; continue; }
      cerrarL(); parrafo.push(l);
    }
    cerrarP(); cerrarL();
    return html;
  };
  const minutos = (t) => Math.max(1, Math.round(String(t || "").split(/\s+/).filter(Boolean).length / 200));

  const ytThumb = (id) => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
  const ytBoton = (id, titulo) =>
    `<button class="yt" data-yt="${esc(id)}" aria-label="${TXT.reproducirVideo}: ${esc(titulo)}"><img src="${ytThumb(id)}" alt="" loading="lazy"><span class="play">${TXT.reproducir}</span></button>`;

  // ---------- Tema del día (topic.js, lo actualiza el resumen nocturno) ----------
  const topics = (window.TOPIC_DIA || []).filter((t) => t && t.titulo);
  const fmtCorta = (f) => { const d = new Date(f + "T12:00:00"); return isNaN(d) ? f : d.toLocaleDateString(LOCALE, { day: "numeric", month: "short" }); };
  const BASE = location.origin + location.pathname;
  const urlDe = (hash) => BASE + (EN ? "?lang=en" : "") + "#" + hash;
  const compartir = (url, titulo) => {
    const u = encodeURIComponent(url), tt = encodeURIComponent(titulo);
    return `<div class="compartir"><span class="compartir-etq">${TXT.compartir}</span>` +
      `<a href="https://wa.me/?text=${encodeURIComponent(titulo + " " + url)}" target="_blank" rel="noopener">WhatsApp</a>` +
      `<a href="https://x.com/intent/post?text=${tt}&url=${u}" target="_blank" rel="noopener">X</a>` +
      `<a href="https://www.linkedin.com/sharing/share-offsite/?url=${u}" target="_blank" rel="noopener">LinkedIn</a>` +
      `<button type="button" class="copiar" data-url="${esc(url)}">${TXT.copiarEnlace}</button></div>`;
  };
  document.addEventListener("click", async (e) => {
    const b = e.target.closest(".copiar");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.url); }
    catch (err) {
      const i = document.createElement("textarea"); i.value = b.dataset.url;
      (b.closest("dialog") || document.body).appendChild(i); i.select(); document.execCommand("copy"); i.remove();
    }
    b.textContent = TXT.copiado; b.classList.add("ok");
    setTimeout(() => { b.textContent = TXT.copiarEnlace; b.classList.remove("ok"); }, 1800);
  });

  // ---------- Minijuego: pregunta del día con racha (guardada en el navegador) ----------
  const RKEY = "quizRafaelJL";
  const leerR = () => { try { return JSON.parse(localStorage.getItem(RKEY)) || { resp: {}, mejor: 0 }; } catch (e) { return { resp: {}, mejor: 0 }; } };
  const guardarR = (r) => { try { localStorage.setItem(RKEY, JSON.stringify(r)); } catch (e) {} };
  const conQuiz = topics.filter((t) => t.pregunta && (t.opciones || []).length);
  const calcRacha = (r) => {
    let n = 0;
    for (let i = 0; i < conQuiz.length; i++) {
      const x = r.resp[conQuiz[i].fecha];
      if (!x) { if (i === 0) continue; break; }
      if (!x.ok) break;
      n++;
    }
    return n;
  };
  const textoRacha = (r) => { const rc = calcRacha(r); return `${TXT.racha}: <b>${rc}</b> · ${TXT.mejor}: <b>${Math.max(r.mejor || 0, rc)}</b>`; };
  const pintarQuiz = (cont, q, clave) => {
    const ops = (EN && q.opciones_en && q.opciones_en.length ? q.opciones_en : q.opciones) || [];
    const r = leerR();
    cont.innerHTML = `
      <div class="quiz-cab"><span>${TXT.preguntaDia}</span><span class="racha" title="${esc(TXT.rachaTit)}">${textoRacha(r)}</span></div>
      <p class="quiz-preg">${esc(tx(q, "pregunta"))}</p>
      <ol class="opciones">${ops.map((o, k) => `<li><button type="button" data-k="${k}"><span>${esc(o)}</span><span class="marca-res"></span></button></li>`).join("")}</ol>
      <div class="respuesta" hidden></div>`;
    const resolver = (elegida, nuevo) => {
      const ok = elegida === q.correcta;
      cont.querySelectorAll(".opciones button").forEach((x, k) => {
        x.disabled = true;
        const m = x.querySelector(".marca-res");
        if (k === q.correcta) { x.classList.add("bien"); m.textContent = TXT.correcta; }
        else if (k === elegida) { x.classList.add("mal"); m.textContent = TXT.tuResp; }
        else x.classList.add("atenuada");
      });
      const resp = cont.querySelector(".respuesta");
      resp.innerHTML = `<strong>${ok ? TXT.correcto : TXT.incorrecto}</strong><p>${esc(tx(q, "explicacion"))}</p>`;
      resp.hidden = false;
      if (nuevo) {
        const r2 = leerR();
        r2.resp[clave] = { k: elegida, ok };
        r2.mejor = Math.max(r2.mejor || 0, calcRacha(r2));
        guardarR(r2);
        const el = cont.querySelector(".racha");
        el.innerHTML = textoRacha(r2);
        if (ok) el.classList.add("sube");
      }
    };
    const prev = r.resp[clave];
    if (prev) resolver(prev.k, false);
    cont.querySelector(".opciones").onclick = (e) => {
      const b = e.target.closest("button");
      if (b && !b.disabled) resolver(+b.dataset.k, true);
    };
  };

  if (topics.length) {
    const t = topics[0], previos = topics.slice(1, 8);
    // Pregunta: la del tema del día; si aún no tiene, una del banco de preguntas de data.js
    let q = null, clave = "";
    if (t.pregunta && (t.opciones || []).length) { q = t; clave = t.fecha; }
    else if ((S.preguntas || []).length) {
      const d = new Date(), i = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5) % S.preguntas.length;
      q = S.preguntas[i]; clave = "banco-" + d.toISOString().slice(0, 10);
    }
    const yaResp = q && leerR().resp[clave];
    $("pregunta").classList.add("topic");
    $("pregunta").innerHTML = `
      <div class="pregunta-cab"><span>${TXT.temaDia}</span><span>${esc(fmtFecha(t.fecha))}</span></div>
      ${tx(t, "area") ? `<span class="topic-area">${esc(tx(t, "area"))}</span>` : ""}
      <h2 id="pTexto">${esc(tx(t, "titulo"))}</h2>
      <p class="topic-resumen">${esc(tx(t, "resumen"))}</p>
      ${t.url ? `<p class="topic-fuente"><a href="${esc(t.url)}" target="_blank" rel="noopener">${TXT.leerNoticia} →</a>${t.fuente ? ` <span>· ${esc(t.fuente)}</span>` : ""}</p>` : ""}
      ${q ? `<div class="quiz-wrap"><button type="button" class="quiz-abrir" id="quizAbrir">${yaResp ? TXT.verRespuesta : TXT.ponteAPrueba} <span aria-hidden="true">→</span></button><div class="quiz" id="quiz" hidden></div></div>` : ""}
      <div class="topic-pie">
        ${previos.length ? `<button class="otra" type="button" id="btnAnteriores" aria-expanded="false">${TXT.anteriores}</button>` : ""}
        <a class="otra" href="#archivo">${TXT.archivoCompleto} →</a>
      </div>
      ${previos.length ? `<ul class="topic-anteriores" id="listaAnteriores" hidden>${previos.map((x) => `<li><a class="ant" href="#dia-${esc(x.fecha)}"><span class="ant-fecha">${esc(fmtCorta(x.fecha))}</span>${esc(tx(x, "titulo"))}</a></li>`).join("")}</ul>` : ""}`;
    const btnAnt = $("btnAnteriores");
    if (btnAnt) btnAnt.onclick = () => {
      const abierta = $("listaAnteriores").hidden;
      $("listaAnteriores").hidden = !abierta;
      btnAnt.setAttribute("aria-expanded", String(abierta));
      btnAnt.textContent = abierta ? TXT.ocultarAnteriores : TXT.anteriores;
    };
    if (q) $("quizAbrir").onclick = () => { $("quizAbrir").remove(); $("quiz").hidden = false; pintarQuiz($("quiz"), q, clave); };
  }
  // ---------- Pregunta del día (solo si no hay tema del día) ----------
  const preguntas = topics.length ? [] : S.preguntas || [];
  if (topics.length) { /* el recuadro ya muestra el tema del día */ }
  else if (!preguntas.length) { $("pregunta").remove(); document.querySelector('a[href="#pregunta"]')?.remove(); }
  else {
    const hoy = new Date();
    const indiceHoy = Math.floor(Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()) / 864e5) % preguntas.length;
    let actual = indiceHoy;
    const fechaHoy = hoy.toLocaleDateString(LOCALE, { day: "numeric", month: "long", year: "numeric" });

    const mostrar = (i) => {
      const q = preguntas[i];
      $("hoy").textContent = i === indiceHoy ? fechaHoy : TXT.preguntaExtra;
      $("pTexto").textContent = tx(q, "pregunta");
      $("pRespuesta").hidden = true;
      const ops = (EN && q.opciones_en && q.opciones_en.length ? q.opciones_en : q.opciones) || [];
      $("pOpciones").innerHTML = ops.length
        ? ops.map((o, k) => `<li><button type="button" data-k="${k}"><span>${esc(o)}</span><span class="marca-res"></span></button></li>`).join("")
        : `<li><button type="button" class="ver" data-k="ver">${TXT.mostrarResp}</button></li>`;
      $("pOpciones").onclick = (e) => {
        const b = e.target.closest("button");
        if (!b || b.disabled) return;
        let titulo = TXT.respuesta;
        if (b.dataset.k !== "ver") {
          const elegida = +b.dataset.k, ok = elegida === q.correcta;
          titulo = ok ? TXT.correcto : TXT.incorrecto;
          $("pOpciones").querySelectorAll("button").forEach((x, k) => {
            x.disabled = true;
            const m = x.querySelector(".marca-res");
            if (k === q.correcta) { x.classList.add("bien"); m.textContent = TXT.correcta; }
            else if (k === elegida) { x.classList.add("mal"); m.textContent = TXT.tuResp; }
            else x.classList.add("atenuada");
          });
        } else b.closest("li").remove();
        $("pRespuesta").innerHTML = `<strong>${titulo}</strong><p>${esc(tx(q, "explicacion"))}</p>` +
          (q.fuente ? `<p><a href="${esc(q.fuente)}" target="_blank" rel="noopener">${TXT.verFuente}</a></p>` : "");
        $("pRespuesta").hidden = false;
      };
    };
    mostrar(actual);
    if (preguntas.length < 2) $("pOtra").remove();
    else $("pOtra").onclick = () => { actual = (actual + 1) % preguntas.length; mostrar(actual); };
  }

  // ---------- Producción científica (produccion.js) ----------
  const P = window.PRODUCCION;
  if (P && ((P.publicaciones || []).length || (P.enCurso || []).length)) {
    $("publicaciones").hidden = false;
    const pubs = (P.publicaciones || []).slice().sort((a, b) => (b.anio || 0) - (a.anio || 0) || (b.mes || 0) - (a.mes || 0));
    const nArt = pubs.filter((x) => x.tipo !== "congreso").length, nCon = pubs.filter((x) => x.tipo === "congreso").length;
    const curso = P.enCurso || [];
    $("prodCifras").innerHTML = `<div><dt>${TXT.publicados}</dt><dd>${nArt}</dd></div>` + (nCon ? `<div><dt>${TXT.congresos}</dt><dd>${nCon}</dd></div>` : "") + (curso.length ? `<div><dt>${TXT.enMarcha}</dt><dd>${curso.length}</dd></div>` : "");
    const yo = /(Rafael\s+)?Jim[eé]nez[\s-]+L[oó]pez(,?\s+R\.?)?/i;
    const autoresHtml = (a) => esc(a).replace(yo, (m) => `<strong class="yo">${m}</strong>`);
    const mesTxt = (x) => x.mes ? new Date(x.anio, x.mes - 1, 15).toLocaleDateString(LOCALE, { month: "short" }).replace(".", "") : "";
    const enlaceDe = (x) => x.doi ? "https://doi.org/" + x.doi : x.url || "";
    const referencia = (x) => {
      const fuente = x.tipo === "congreso"
        ? `${x.revista}${x.lugar ? ", " + x.lugar : ""}${x.formato ? ` [${x.formato}]` : ""}`
        : `${x.revista}${x.volumen ? ", " + x.volumen : ""}${x.numero ? `(${x.numero})` : ""}${x.paginas ? ", " + x.paginas : ""}`;
      return `${x.autores} (${x.anio}). ${x.titulo}. ${fuente}.${enlaceDe(x) ? " " + enlaceDe(x) : ""}`;
    };
    let fProd = "todas";
    const pintarProd = () => {
      const lista = pubs.filter((x) => fProd === "todas" || (fProd === "congreso" ? x.tipo === "congreso" : x.tipo !== "congreso"));
      $("prodFiltros").innerHTML = [["todas", TXT.todas, pubs.length], ["articulo", TXT.articulos, nArt], ["congreso", TXT.congresos, nCon]]
        .map(([k, n, c]) => `<button type="button" role="tab" data-p="${k}" aria-selected="${k === fProd}">${n} <span class="cuenta">${c}</span></button>`).join("");
      $("pubLista").innerHTML = lista.length ? lista.map((x) => {
        const cong = x.tipo === "congreso", link = enlaceDe(x);
        const fuente = cong
          ? `<span class="pub-revista">${esc(x.revista || "")}</span>${x.lugar ? ` · ${esc(x.lugar)}` : ""}`
          : `<span class="pub-revista">${esc(x.revista || "")}</span>${x.volumen ? ` · ${esc(x.volumen)}${x.numero ? `(${esc(x.numero)})` : ""}` : ""}${x.paginas ? `, ${esc(x.paginas)}` : ""}`;
        return `<li class="pub ${cong ? "es-congreso" : "es-articulo"}">
          <div class="pub-fecha"><span class="pub-anio">${esc(x.anio || "")}</span><span class="pub-mes">${esc(mesTxt(x))}</span></div>
          <div class="pub-cuerpo">
            <div class="pub-etqs"><span class="pub-tipo">${cong ? TXT.congreso : TXT.articulo}</span>${tx(x, "estudio") || x.formato ? `<span class="pub-estudio">${esc(tx(x, "estudio") || x.formato)}</span>` : ""}</div>
            <h3>${link ? `<a href="${esc(link)}" target="_blank" rel="noopener">${esc(tx(x, "titulo"))}</a>` : esc(tx(x, "titulo"))}</h3>
            <p class="pub-autores">${autoresHtml(x.autores || "")}</p>
            <p class="pub-fuente">${fuente}</p>
            <div class="pub-acciones">
              ${x.doi ? `<a href="${esc(link)}" target="_blank" rel="noopener">DOI: ${esc(x.doi)}</a>` : link ? `<a href="${esc(link)}" target="_blank" rel="noopener">${TXT.verFuente}</a>` : ""}
              <button type="button" class="copiar-ref" data-ref="${esc(referencia(x))}">${TXT.copiarRef}</button>
            </div>
          </div>
        </li>`;
      }).join("") : `<li class="pub-vacio">${fProd === "congreso" ? TXT.sinCongresos : TXT.vacio}</li>`;
    };
    $("prodFiltros").addEventListener("click", (e) => { const b = e.target.closest("button[data-p]"); if (b) { fProd = b.dataset.p; pintarProd(); } });
    $("pubLista").addEventListener("click", async (e) => {
      const b = e.target.closest(".copiar-ref"); if (!b) return;
      try { await navigator.clipboard.writeText(b.dataset.ref); } catch (err) {}
      b.textContent = TXT.refCopiada; b.classList.add("ok");
      setTimeout(() => { b.textContent = TXT.copiarRef; b.classList.remove("ok"); }, 1800);
    });
    pintarProd();
    if (curso.length) {
      $("enCurso").hidden = false;
      $("cursoLista").innerHTML = curso.map((x) => `<li>
        <div class="pub-etqs"><span class="curso-estado">${esc(tx(x, "estado") || TXT.enMarcha)}</span>${tx(x, "estudio") ? `<span class="pub-estudio">${esc(tx(x, "estudio"))}</span>` : ""}</div>
        <p class="curso-titulo">${esc(tx(x, "titulo"))}</p>${tx(x, "nota") ? `<p class="curso-nota">${esc(tx(x, "nota"))}</p>` : ""}</li>`).join("");
    }
  } else { document.querySelector('a[href="#publicaciones"]')?.remove(); }

  // ---------- Temas ----------
  const temas = (S.temas || []).slice().sort((a, b) => String(b.fecha || "").localeCompare(String(a.fecha || "")));
  temas.forEach((t) => (t.id = slug(t.titulo))); // el enlace de cada tema usa siempre el título en español
  const cats = [...new Set(temas.map((t) => t.categoria).filter(Boolean))];
  const tono = (c) => TONOS[Math.max(0, cats.indexOf(c)) % TONOS.length];
  let filtro = "Todos";

  const imgProx = S.imagenProximamente || "";
  const portada = (t) => {
    if (t.proximamente && imgProx) return `<div class="portada prox"><img src="${esc(imgProx)}" alt="${TXT.proximamente}" loading="lazy" onerror="this.remove()"></div>`;
    if (t.portada) return `<div class="portada"><img src="${esc(t.portada)}" alt="" loading="lazy">${t.youtubeId ? `<span class="play">${TXT.video}</span>` : ""}</div>`;
    if (t.youtubeId) return `<div class="portada"><img src="${ytThumb(t.youtubeId)}" alt="" loading="lazy"><span class="play">${TXT.video}</span></div>`;
    return `<div class="portada vacia" style="--tono:${tono(t.categoria)}"><span>${esc(nombreCat(t.categoria || ""))}</span></div>`;
  };
  const meta = (t, extra) => `<div class="meta">${t.categoria ? `<span class="cat">${esc(nombreCat(t.categoria))}</span>` : ""}<span>${esc(fmtFecha(t.fecha))}</span>${extra || ""}</div>`;

  const pintarFiltros = () => {
    if (cats.length < 2) { $("filtros").innerHTML = ""; return; }
    $("filtros").innerHTML = ["Todos", ...cats]
      .map((c) => `<button type="button" role="tab" data-c="${esc(c)}" aria-selected="${c === filtro}">${esc(c === "Todos" ? TXT.todos : nombreCat(c))}</button>`).join("");
  };
  // En "Todos" se ve el tema más reciente de cada categoría; el resto se despliega con un botón
  const deCategoria = (c) => temas.filter((x) => (x.categoria || "") === (c || ""));
  const pintarTemas = () => {
    const lista = filtro === "Todos"
      ? temas.filter((t) => deCategoria(t.categoria)[0] === t)
      : temas.filter((t) => t.categoria === filtro);
    $("rejilla").innerHTML = lista.length ? lista.map((t, i) => {
      const nF = (t.fotos || []).length, nV = (t.videos || []).length + (t.youtubeId ? 1 : 0);
      const extras = [nV && TXT.videos(nV), !t.youtubeId && t.videoProximamente && TXT.videoProx, nF && TXT.imagenes(nF)].filter(Boolean).join(" · ");
      const dest = i === 0 && filtro === "Todos" && lista.length > 2 ? " destacada" : "";
      const total = deCategoria(t.categoria).length;
      const serie = filtro === "Todos" && t.categoria && total > 1
        ? `<button type="button" class="mas-serie" data-c="${esc(t.categoria)}">${esc(TXT.verTemas(total, nombreCat(t.categoria)))} <span aria-hidden="true">↓</span></button>` : "";
      return `
       <div class="item${dest}">
        <button class="tarjeta${dest}" data-id="${t.id}">
          ${portada(t)}
          <div class="info">
            ${meta(t)}
            <h3>${esc(tx(t, "titulo"))}</h3>
            <p>${esc(tx(t, "resumen"))}</p>
            ${extras ? `<span class="extras">${extras}</span>` : ""}
            ${t.proximamente ? `<span class="etq-prox">${TXT.proximamente}</span>` : t.texto ? `<span class="leer-mas">${TXT.leerMas} <span aria-hidden="true">→</span></span>` : ""}
          </div>
        </button>
        ${serie}
       </div>`;
    }).join("") : `<p class="vacio">${TXT.vacio}</p>`;
  };
  $("filtros").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-c]");
    if (!b) return;
    filtro = b.dataset.c; pintarFiltros(); pintarTemas();
  });
  $("rejilla").addEventListener("click", (e) => {
    const m = e.target.closest(".mas-serie");
    if (m) { filtro = m.dataset.c; pintarFiltros(); pintarTemas(); $("temas").scrollIntoView({ behavior: "smooth" }); return; }
    const b = e.target.closest(".tarjeta");
    if (b) location.hash = "tema-" + b.dataset.id;
  });
  pintarFiltros(); pintarTemas();

  // ---------- Vista de un tema (enlace propio: #tema-titulo) ----------
  const modal = $("modal");
  const abrir = (t) => {
    const titulo = tx(t, "titulo");
    if (t.proximamente) {
      $("modalCont").innerHTML = `
      <article class="articulo" tabindex="-1">
        ${meta(t)}
        <h2>${esc(titulo)}</h2>
        ${tx(t, "resumen") ? `<p class="entradilla">${esc(tx(t, "resumen"))}</p>` : ""}
        ${imgProx ? `<div class="m-media prox"><img src="${esc(imgProx)}" alt="${TXT.proximamente}" onerror="this.remove()"></div>` : ""}
        <p class="aviso-prox">${TXT.enPreparacion}</p>
      </article>`;
      document.title = `${titulo} · RafaelJL`;
      if (!modal.open) modal.showModal();
      modal.classList.remove("lectura");
      modal.querySelector(".articulo").focus({ preventScroll: true });
      modal.scrollTop = 0;
      return;
    }
    let media = "";
    if (t.youtubeId) media = `<div class="m-media">${ytBoton(t.youtubeId, titulo)}</div>`;
    else if (t.portada) media = `<div class="m-media"><img src="${esc(t.portada)}" alt=""></div>`;
    const credito = tx(t, "portadaCredito");
    if (media && !t.youtubeId && credito) media += `<p class="credito">${t.portadaCreditoUrl ? `<a href="${esc(t.portadaCreditoUrl)}" target="_blank" rel="noopener">${esc(credito)}</a>` : esc(credito)}</p>`;

    const texto = tx(t, "texto");
    const parrafos = formatear(texto);
    const canal = ((S.enlaces || []).find((e) => e.tipo === "youtube") || {}).url;
    const avisoTxt = typeof t.videoProximamente === "string" ? tx(t, "videoProximamente") : TXT.avisoVideo;
    const aviso = !t.youtubeId && t.videoProximamente
      ? `<div class="aviso-video"><span class="aviso-etq">${TXT.video}</span><p>${esc(avisoTxt)}</p>${canal ? `<a href="${esc(canal)}" target="_blank" rel="noopener">${TXT.irCanal}</a>` : ""}</div>` : "";
    const fotos = (t.fotos || []).length
      ? `<h3>${TXT.imgs}</h3><div class="galeria">${t.fotos.map((f) => `<a href="${esc(f)}" target="_blank" rel="noopener"><img src="${esc(f)}" alt="" loading="lazy"></a>`).join("")}</div>` : "";
    const vids = (t.videos || []).length
      ? `<h3>${TXT.vidsRel}</h3><div class="mini-videos">${t.videos.map((id) => `<div class="m-media">${ytBoton(id, titulo)}</div>`).join("")}</div>` : "";
    const links = (t.enlaces || []).length
      ? `<h3>${TXT.refs}</h3><ul class="m-enlaces">${t.enlaces.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(tx(l, "texto") || l.url)}</a></li>`).join("")}</ul>` : "";
    const entradilla = tx(t, "subtitulo") || tx(t, "resumen");

    $("modalCont").innerHTML = `
      <article class="articulo" tabindex="-1">
        ${meta(t, texto ? `<span>${minutos(texto)} ${TXT.minLectura}</span>` : "")}
        <h2>${esc(titulo)}</h2>
        ${entradilla ? `<p class="entradilla">${esc(entradilla)}</p>` : ""}
        ${compartir(urlDe("tema-" + t.id), titulo)}
        ${media}${aviso}
        <div class="cuerpo-texto">${parrafos}</div>
        ${fotos}${vids}${links}
        <div class="compartir-final"><p>${esc(titulo)}</p>${compartir(urlDe("tema-" + t.id), titulo)}</div>
      </article>`;
    document.title = `${titulo} · RafaelJL`;
    if (!modal.open) modal.showModal();
    modal.classList.add("lectura");
    ponerIndice();
    modal.querySelector(".articulo").focus({ preventScroll: true });
    modal.scrollTop = 0;
    progreso();
  };

  // Índice lateral (si el artículo tiene 3 o más apartados)
  const ponerIndice = () => {
    const art = $("modalCont").querySelector(".articulo");
    const hs = [...art.querySelectorAll(".cuerpo-texto h4")];
    if (hs.length < 3) return;
    hs.forEach((h, i) => (h.id = "sec-" + (i + 1)));
    const nav = document.createElement("nav");
    nav.className = "indice";
    nav.setAttribute("aria-label", TXT.indice);
    nav.innerHTML = `<span class="indice-etq">${TXT.indice}</span><ol>${hs.map((h) => `<li><a href="#${h.id}" data-sec="${h.id}">${esc(h.textContent)}</a></li>`).join("")}</ol>`;
    art.querySelector(".cuerpo-texto").before(nav);
    nav.onclick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      e.preventDefault();
      document.getElementById(a.dataset.sec).scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) nav.querySelectorAll("a").forEach((a) => a.classList.toggle("activo", a.dataset.sec === en.target.id));
    }), { root: modal, rootMargin: "0px 0px -70% 0px" });
    hs.forEach((h) => io.observe(h));
  };

  // Barra de progreso de lectura
  const barra = $("progresoBar");
  const progreso = () => {
    const max = modal.scrollHeight - modal.clientHeight;
    barra.style.transform = `scaleX(${max > 0 ? Math.min(1, modal.scrollTop / max) : 0})`;
  };
  modal.addEventListener("scroll", progreso, { passive: true });

  const abrirVista = (html, titulo) => {
    $("modalCont").innerHTML = html;
    document.title = `${titulo} · RafaelJL`;
    modal.classList.remove("lectura");
    if (!modal.open) modal.showModal();
    modal.scrollTop = 0;
  };

  // ---------- Buscador general ----------
  const norm = (x) => String(x || "").split("").map((c) => c.normalize("NFD")[0]).join("").toLowerCase();
  const limpio = (x) => String(x || "").replace(/\*\*/g, "").replace(/^(## |[-*•] |> |\d+[.)] )/gm, "").replace(/\s+/g, " ").trim();
  const indiceBusqueda = [
    ...temas.filter((t) => !t.proximamente || tx(t, "resumen")).map((t) => ({
      hash: "tema-" + t.id, etq: nombreCat(t.categoria || "") || TXT.enlaceTema, fecha: t.fecha, titulo: tx(t, "titulo"),
      cuerpo: limpio([tx(t, "subtitulo"), tx(t, "resumen"), tx(t, "texto")].filter(Boolean).join(" ")),
    })),
    ...topics.map((t) => ({ hash: "dia-" + t.fecha, etq: TXT.temaDelDia, fecha: t.fecha, titulo: tx(t, "titulo"), cuerpo: limpio(`${tx(t, "area")}. ${tx(t, "resumen")}`) })),
  ].map((x) => ({ ...x, nT: norm(x.titulo), nC: norm(x.cuerpo) }));
  const resaltar = (texto, terminos) => {
    const n = norm(texto), marcas = new Array(texto.length).fill(false);
    terminos.forEach((w) => { let i = n.indexOf(w); while (i >= 0) { for (let j = i; j < i + w.length; j++) marcas[j] = true; i = n.indexOf(w, i + w.length); } });
    let out = "", abierto = false;
    for (let i = 0; i < texto.length; i++) {
      if (marcas[i] && !abierto) { out += "<mark>"; abierto = true; }
      if (!marcas[i] && abierto) { out += "</mark>"; abierto = false; }
      out += esc(texto[i]);
    }
    return out + (abierto ? "</mark>" : "");
  };
  const fragmento = (x, terminos) => {
    const i = Math.max(0, ...terminos.map((w) => x.nC.indexOf(w)).filter((i) => i >= 0).slice(0, 1));
    const ini = Math.max(0, i - 70), fin = Math.min(x.cuerpo.length, i + 150);
    return (ini > 0 ? "…" : "") + resaltar(x.cuerpo.slice(ini, fin), terminos) + (fin < x.cuerpo.length ? "…" : "");
  };
  const abrirBuscar = () => {
    abrirVista(`
      <div class="articulo vista">
        <div class="meta"><span class="cat">${TXT.buscar}</span></div>
        <h2>${TXT.buscar}</h2>
        <input class="campo-buscar" id="qBuscar" type="search" placeholder="${esc(TXT.buscarPh)}" autocomplete="off" aria-label="${TXT.buscar}">
        <p class="buscar-info" id="qInfo">${TXT.atajo}</p>
        <ul class="resultados" id="qRes"></ul>
      </div>`, TXT.buscar);
    const inp = $("qBuscar");
    inp.oninput = () => {
      const terminos = norm(inp.value).split(/\s+/).filter((w) => w.length > 1);
      if (!terminos.length) { $("qRes").innerHTML = ""; $("qInfo").textContent = TXT.atajo; return; }
      const res = indiceBusqueda
        .filter((x) => terminos.every((w) => x.nT.includes(w) || x.nC.includes(w)))
        .map((x) => ({ x, p: terminos.reduce((a, w) => a + (x.nT.includes(w) ? 3 : 0) + (x.nC.split(w).length - 1), 0) }))
        .sort((a, b) => b.p - a.p).slice(0, 40);
      $("qInfo").textContent = res.length ? TXT.nRes(res.length) : TXT.sinRes;
      $("qRes").innerHTML = res.map(({ x }) => `<li><a href="#${esc(x.hash)}">
        <span class="meta"><span class="cat">${esc(x.etq)}</span><span>${esc(fmtFecha(x.fecha))}</span></span>
        <strong>${resaltar(x.titulo, terminos)}</strong><span class="frag">${fragmento(x, terminos)}</span></a></li>`).join("");
    };
    setTimeout(() => inp.focus(), 50);
  };

  // ---------- Archivo del tema del día ----------
  const abrirArchivo = (fecha) => {
    const areas = [...new Set(topics.map((t) => tx(t, "area")).filter(Boolean))].sort((a, b) => a.localeCompare(b, LOCALE));
    abrirVista(`
      <div class="articulo vista archivo">
        <div class="meta"><span class="cat">${TXT.temaDelDia}</span><span>${TXT.nTemas(topics.length)}</span></div>
        <h2>${TXT.archivoTit}</h2>
        <p class="entradilla">${TXT.archivoIntro}</p>
        <div class="archivo-filtros">
          <input class="campo-buscar" id="aQ" type="search" placeholder="${esc(TXT.buscarArchivo)}" aria-label="${esc(TXT.buscarArchivo)}">
          <select id="aArea" aria-label="${esc(TXT.todasAreas)}"><option value="">${TXT.todasAreas}</option>${areas.map((a) => `<option>${esc(a)}</option>`).join("")}</select>
        </div>
        <ol class="archivo-lista" id="aLista">${topics.map((t) => `
          <li id="dia-${esc(t.fecha)}" data-area="${esc(tx(t, "area"))}" data-txt="${esc(norm(tx(t, "titulo") + " " + tx(t, "resumen") + " " + tx(t, "area")))}">
            <details${t.fecha === fecha ? " open" : ""}>
              <summary><span class="ant-fecha">${esc(fmtCorta(t.fecha))}</span><span><span class="topic-area">${esc(tx(t, "area"))}</span><strong>${esc(tx(t, "titulo"))}</strong></span></summary>
              <div class="archivo-cuerpo">
                <p>${esc(tx(t, "resumen"))}</p>
                ${t.url ? `<p class="topic-fuente"><a href="${esc(t.url)}" target="_blank" rel="noopener">${TXT.leerNoticia} →</a>${t.fuente ? ` <span>· ${esc(t.fuente)}</span>` : ""}</p>` : ""}
                ${compartir(urlDe("dia-" + t.fecha), tx(t, "titulo"))}
              </div>
            </details>
          </li>`).join("")}</ol>
        <p class="vacio" id="aVacio" hidden>${TXT.sinRes}</p>
      </div>`, TXT.archivoTit);
    const filtrar = () => {
      const terminos = norm($("aQ").value).split(/\s+/).filter(Boolean), area = $("aArea").value;
      let n = 0;
      $("aLista").querySelectorAll("li").forEach((li) => {
        const ok = (!area || li.dataset.area === area) && terminos.every((w) => li.dataset.txt.includes(w));
        li.hidden = !ok; if (ok) n++;
      });
      $("aVacio").hidden = n > 0;
    };
    $("aQ").oninput = filtrar; $("aArea").onchange = filtrar;
    if (fecha) { const li = document.getElementById("dia-" + fecha); if (li) setTimeout(() => li.scrollIntoView({ block: "center" }), 60); }
  };
  const cerrar = () => { if (modal.open) modal.close(); };
  modal.addEventListener("close", () => {
    document.title = "RafaelJL · " + tx(S, "nombreWeb");
    $("modalCont").innerHTML = "";
    modal.classList.remove("lectura");
    if (/^#(tema-|dia-|archivo|buscar)/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
  });
  $("cerrar").onclick = cerrar;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrar();
    const yt = e.target.closest(".yt");
    if (yt) yt.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(yt.dataset.yt)}?autoplay=1&rel=0" title="${TXT.tituloVideo}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  });
  const deHash = () => {
    const h = decodeURIComponent(location.hash);
    const m = h.match(/^#tema-(.+)$/);
    const t = m && temas.find((x) => x.id === m[1]);
    if (t) return abrir(t);
    const d = h.match(/^#dia-(\d{4}-\d{2}-\d{2})$/);
    if (h === "#archivo" || d) return abrirArchivo(d && d[1]);
    if (h === "#buscar") return abrirBuscar();
    cerrar();
  };
  $("btnBuscar").onclick = () => { location.hash = "buscar"; };
  $("btnBuscar").setAttribute("aria-label", TXT.buscar); $("btnBuscar").title = TXT.buscar + " ( / )";
  document.addEventListener("keydown", (e) => {
    if (e.key !== "/" || e.metaKey || e.ctrlKey || /input|textarea|select/i.test(document.activeElement.tagName)) return;
    e.preventDefault(); location.hash = "buscar";
  });
  // Cuenta en GoatCounter las vistas de cada tema, del archivo y del buscador
  const contarVista = () => {
    const h = location.hash;
    if (!/^#(tema-|dia-|archivo|buscar)/.test(h) || !window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({ path: "/" + h.slice(1), title: document.title });
  };
  window.addEventListener("hashchange", () => setTimeout(contarVista, 50));
  window.addEventListener("hashchange", deHash);
  deHash();
})();

// Aparición suave de tarjetas y secciones al entrar en pantalla
(function () {
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  function marcar() {
    document.querySelectorAll(".rejilla > *:not(.revelar), .sobre:not(.revelar)").forEach(function (el, i) {
      el.classList.add("revelar"); el.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(el);
    });
  }
  marcar();
  var rej = document.getElementById("rejilla");
  if (rej) new MutationObserver(marcar).observe(rej, { childList: true });
})();
