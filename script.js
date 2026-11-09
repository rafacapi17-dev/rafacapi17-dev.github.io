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
  if (topics.length) {
    const t = topics[0], previos = topics.slice(1, 8);
    const enlace = (x, clase) => x.url ? `<a class="${clase}" href="${esc(x.url)}" target="_blank" rel="noopener">` : `<span class="${clase}">`;
    const cierre = (x) => (x.url ? "</a>" : "</span>");
    $("pregunta").classList.add("topic");
    $("pregunta").innerHTML = `
      <div class="pregunta-cab"><span>${TXT.temaDia}</span><span>${esc(fmtFecha(t.fecha))}</span></div>
      ${tx(t, "area") ? `<span class="topic-area">${esc(tx(t, "area"))}</span>` : ""}
      <h2 id="pTexto">${esc(tx(t, "titulo"))}</h2>
      <p class="topic-resumen">${esc(tx(t, "resumen"))}</p>
      ${t.url ? `<p class="topic-fuente"><a href="${esc(t.url)}" target="_blank" rel="noopener">${TXT.leerNoticia} →</a>${t.fuente ? ` <span>· ${esc(t.fuente)}</span>` : ""}</p>` : ""}
      ${previos.length ? `<button class="otra" type="button" id="btnAnteriores" aria-expanded="false">${TXT.anteriores}</button>
      <ul class="topic-anteriores" id="listaAnteriores" hidden>${previos.map((x) => `<li>${enlace(x, "ant")}<span class="ant-fecha">${esc(fmtCorta(x.fecha))}</span>${esc(tx(x, "titulo"))}${cierre(x)}</li>`).join("")}</ul>` : ""}`;
    const btnAnt = $("btnAnteriores");
    if (btnAnt) btnAnt.onclick = () => {
      const abierta = $("listaAnteriores").hidden;
      $("listaAnteriores").hidden = !abierta;
      btnAnt.setAttribute("aria-expanded", String(abierta));
      btnAnt.textContent = abierta ? TXT.ocultarAnteriores : TXT.anteriores;
    };
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
      document.title = `${titulo} · ${tx(S, "nombreWeb")}`;
      if (!modal.open) modal.showModal();
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
        ${media}${aviso}
        <div class="cuerpo-texto">${parrafos}</div>
        ${fotos}${vids}${links}
      </article>`;
    document.title = `${titulo} · ${tx(S, "nombreWeb")}`;
    if (!modal.open) modal.showModal();
    modal.querySelector(".articulo").focus({ preventScroll: true });
    modal.scrollTop = 0;
  };
  const cerrar = () => { if (modal.open) modal.close(); };
  modal.addEventListener("close", () => {
    document.title = tx(S, "nombreWeb");
    $("modalCont").innerHTML = "";
    if (location.hash.startsWith("#tema-")) history.replaceState(null, "", location.pathname + location.search + "#temas");
  });
  $("cerrar").onclick = cerrar;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrar();
    const yt = e.target.closest(".yt");
    if (yt) yt.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(yt.dataset.yt)}?autoplay=1&rel=0" title="${TXT.tituloVideo}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  });
  const deHash = () => {
    const m = location.hash.match(/^#tema-(.+)$/);
    const t = m && temas.find((x) => x.id === decodeURIComponent(m[1]));
    if (t) abrir(t); else cerrar();
  };
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
