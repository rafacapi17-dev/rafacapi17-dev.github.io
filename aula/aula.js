(function () {
  const A = window.AULA || {};
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
  const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  $("anio").textContent = new Date().getFullYear();

  // Modo claro / oscuro (compartido con la web principal)
  const raiz = document.documentElement;
  $("btnTema").onclick = () => {
    raiz.dataset.tema = raiz.dataset.tema === "oscuro" ? "claro" : "oscuro";
    try { localStorage.setItem("tema", raiz.dataset.tema); } catch (e) {}
  };

  const chapa = (estado) => estado === "disponible"
    ? `<span class="estado ok">Disponible</span>` : `<span class="estado prox">Próximamente</span>`;

  // Charlas
  $("charlasLista").innerHTML = (A.charlas || []).map((c, i) => `
    <article class="tarjeta ${c.estado === "disponible" ? "" : "es-prox"}">
      <div class="tarjeta-cab"><span class="pixel num">${String(i + 1).padStart(2, "0")}</span>${chapa(c.estado)}</div>
      <h3>${esc(c.titulo)}</h3>
      <p>${esc(c.resumen)}</p>
      <p class="datos">${[c.edad, c.duracion].filter(Boolean).map(esc).join(" · ")}</p>
      ${c.enlace && c.estado === "disponible" ? `<a class="enlace" href="${esc(c.enlace)}">${esc(c.textoEnlace || "Ver")} →</a>` : ""}
    </article>`).join("");

  // Otros experimentos (los que aún no están)
  $("expLista").innerHTML = (A.experimentos || []).filter((x) => x.id !== "reaccion").map((x) => `
    <article class="tarjeta mini ${x.estado === "disponible" ? "" : "es-prox"}">
      <div class="tarjeta-cab">${chapa(x.estado)}</div>
      <h3>${esc(x.titulo)}</h3><p>${esc(x.resumen)}</p>
    </article>`).join("");

  // Experimento: tiempo de reacción
  const zona = $("zona");
  let estado = "inicio", t0 = 0, temp = null;
  let datos = leer("aulaReaccion", { mejor: null, intentos: 0 });
  const pintarMarcas = () => { $("rMejor").textContent = datos.mejor ? datos.mejor + " ms" : "—"; $("rIntentos").textContent = datos.intentos; };
  const POSE = (n) => `../img/gallo/gallo-${n}.png`;
  const pose = (n) => { const i = $("rPose"); if (i) i.src = POSE(n); };
  ["entusiasmado", "pensando", "camina"].forEach((n) => { const i = new Image(); i.src = POSE(n); });
  const poner = (e, titulo, texto) => { estado = e; zona.dataset.estado = e; $("rTitulo").textContent = titulo; $("rTexto").textContent = texto; };
  const valorar = (ms) => ms < 200 ? "¡Reflejos de portero! ⚡" : ms < 260 ? "¡Muy rápido!" : ms < 330 ? "Dentro de lo normal. ¿Lo mejoras?" : "Un poco lento… ¿tienes sueño? 😴";
  const accion = () => {
    if (estado === "inicio" || estado === "resultado" || estado === "pronto") {
      pose("fonendo");
      poner("espera", "Espera…", "Mantén el dedo preparado y no toques todavía.");
      temp = setTimeout(() => { poner("ya", "¡YA!", "¡Toca!"); t0 = performance.now(); }, 1500 + Math.random() * 2500);
    } else if (estado === "espera") {
      clearTimeout(temp);
      pose("pensando");
      poner("pronto", "¡Demasiado pronto!", "Tu cerebro se ha adelantado. Toca para intentarlo otra vez.");
    } else if (estado === "ya") {
      const ms = Math.round(performance.now() - t0);
      datos.intentos++;
      if (!datos.mejor || ms < datos.mejor) datos.mejor = ms;
      guardar("aulaReaccion", datos); pintarMarcas();
      pose(ms < 260 ? "entusiasmado" : ms < 330 ? "de-pie" : "camina");
      poner("resultado", ms + " ms", valorar(ms) + " Toca para repetir.");
    }
  };
  zona.addEventListener("pointerdown", (e) => { e.preventDefault(); accion(); });
  zona.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); accion(); } });
  pintarMarcas();

  // ¿Mito o ciencia?
  const mitos = A.mitos || [];
  const resp = {};
  const pintarMarcador = () => {
    const n = Object.keys(resp).length, ok = Object.values(resp).filter(Boolean).length;
    $("marcador").innerHTML = n ? `<span class="pixel">Aciertos ${ok}/${n}</span>${n === mitos.length ? `<span>${ok === n ? "¡Pleno! Tienes alma de investigador 🐓" : ok >= n / 2 ? "¡Bien hecho!" : "Ahora ya sabes más que antes, que es de lo que se trata."}</span>` : ""}` : "";
  };
  $("mitosLista").innerHTML = mitos.map((m, i) => `
    <div class="mito" data-i="${i}">
      <div class="mito-cara">
        <span class="pixel num">#${i + 1}</span>
        <p class="mito-frase">“${esc(m.frase)}”</p>
        <div class="mito-botones"><button type="button" data-r="mito">Mito</button><button type="button" data-r="ciencia">Ciencia</button></div>
      </div>
      <div class="mito-dorso" hidden>
        <span class="veredicto ${m.ciencia ? "v-ciencia" : "v-mito"}">${m.ciencia ? "Ciencia" : "Mito"}</span>
        <p class="tu-resp"></p>
        <p>${esc(m.explicacion)}</p>
      </div>
    </div>`).join("");
  $("mitosLista").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-r]"); if (!b) return;
    const card = b.closest(".mito"), m = mitos[+card.dataset.i];
    const ok = (b.dataset.r === "ciencia") === m.ciencia;
    resp[card.dataset.i] = ok;
    card.classList.add("girada", ok ? "acierto" : "fallo");
    card.querySelector(".mito-cara").hidden = true;
    card.querySelector(".mito-dorso").hidden = false;
    card.querySelector(".tu-resp").textContent = ok ? "¡Has acertado!" : "Esta vez no…";
    pintarMarcador();
  });

  // Trayectoria y hoja de ruta
  $("camino").innerHTML = (A.trayectoria || []).map((x) => `<li><span class="pixel">${esc(x.cuando)}</span><p>${esc(x.que)}</p></li>`).join("");
  $("ruta").innerHTML = (A.hojaDeRuta || []).map((x) => `<li class="${x.hecho ? "hecho" : ""}"><span class="caja" aria-hidden="true">${x.hecho ? "■" : "□"}</span>${esc(x.que)}</li>`).join("");
})();
