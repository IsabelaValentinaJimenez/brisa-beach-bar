
"use strict";
/* =========================================
   BRISA BEACH BAR
   SCRIPT.JS COMPLETO
\========================================= */
const API_BRISA = {
  productos: "obtener_productos.php",
  reservas: "reservar.php",
  login: "login.php"
};
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const PAGINAS = [
  "inicio", "menu", "galeria", "espacios",
  "ubicacion", "reservas", "login", "nosotros"
];
const ESPACIOS = {
  mesa: {
    nombre: "Mesa frente al mar",
    imagen: "img/espacio-mesa-nueva.jpg",
    descripcion: "Disfrutá de una experiencia gastronómica frente al mar.",
    costo: 0,
    maxPersonas: 20,
    condiciones: "Consumo mínimo de $10 por persona."
  },
  sombrilla: {
    nombre: "Sombrilla privada",
    imagen: "img/espacio-sombrilla-nueva.jpg",
    descripcion: "Un espacio para relajarte frente al océano.",
    costo: 15,
    maxPersonas: 2,
    condiciones: "Capacidad obligatoria: exactamente 2 personas. Incluye dos sillas."
  },
  grupo: {
    nombre: "Reservaciones para grupos",
    imagen: "img/espacio-grupos-nueva.jpg",
    descripcion: "Celebraciones y reuniones especiales frente al mar.",
    costo: null,
    maxPersonas: 20,
    condiciones: "Hasta 20 personas. Precio y disponibilidad sujetos a confirmación."
  }
};
const HORARIOS = [
  "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00",
  "19:00", "20:00", "21:00", "22:00"
];
/* =========================================
   CATÁLOGO COMPLETO: 18 PRODUCTOS
\========================================= */
const CATALOGO_BRISA = [
  {
    id: 1,
    nombre: "Ceviche Mixto del Pacífico",
    categoria: "Mariscos",
    tipo: "comida",
    precio: 12.99,
    imagen: "ceviche-mixto-del-pacifico.jpg",
    descripcion: "Camarones, pescado y pulpo marinados en limón con vegetales frescos."
  },
  {
    id: 2,
    nombre: "Pescado Dorado Brisa",
    categoria: "Mariscos",
    tipo: "comida",
    precio: 14.99,
    imagen: "pescado-dorado-brisa.jpg",
    descripcion: "Pescado frito acompañado de arroz, ensalada fresca y papas."
  },
  {
    id: 3,
    nombre: "Camarones al Ajillo",
    categoria: "Mariscos",
    tipo: "comida",
    precio: 13.99,
    imagen: "camarones-al-ajillo.jpg",
    descripcion: "Camarones salteados en mantequilla, ajo y especias, acompañados de arroz."
  },
  {
    id: 4,
    nombre: "Mar y Tierra Brisa",
    categoria: "Mar y Tierra",
    tipo: "comida",
    precio: 17.99,
    imagen: "mar-y-tierra-brisa.jpg",
    descripcion: "Carne a la parrilla con camarones al ajillo, papas y vegetales."
  },
  {
    id: 5,
    nombre: "Pollo y Camarones Tropicales",
    categoria: "Mar y Tierra",
    tipo: "comida",
    precio: 14.99,
    imagen: "pollo-y-camarones-tropicales.jpg",
    descripcion: "Pechuga a la parrilla con camarones salteados y arroz especial."
  },
  {
    id: 6,
    nombre: "Fajitas Mar y Tierra",
    categoria: "Mar y Tierra",
    tipo: "comida",
    precio: 15.99,
    imagen: "fajitas-mar-y-tierra.jpg",
    descripcion: "Tiras de res y camarones con pimientos, cebolla y tortillas."
  },
  {
    id: 7,
    nombre: "Hamburguesa Tropical Brisa",
    categoria: "Comidas casuales",
    tipo: "comida",
    precio: 8.99,
    imagen: "hamburguesa-tropical-brisa.jpg",
    descripcion: "Carne a la parrilla, queso cheddar, vegetales y papas fritas."
  },
  {
    id: 8,
    nombre: "Alitas Sunset BBQ",
    categoria: "Comidas casuales",
    tipo: "comida",
    precio: 9.99,
    imagen: "alitas-sunset-bbq.jpg",
    descripcion: "Alitas bañadas en salsa BBQ o búfalo, acompañadas de papas."
  },
  {
    id: 9,
    nombre: "Club Sándwich Brisa",
    categoria: "Comidas casuales",
    tipo: "comida",
    precio: 7.99,
    imagen: "club-sandwich-brisa.jpg",
    descripcion: "Sándwich de pollo, jamón, queso, vegetales y papas fritas."
  },
  {
    id: 10,
    nombre: "Fresa Sunset",
    categoria: "Bebidas tropicales",
    tipo: "bebida",
    precio: 4.50,
    imagen: "fresa-sunset.jpg",
    descripcion: "Bebida frozen de fresas naturales, limón y hielo triturado."
  },
  {
    id: 11,
    nombre: "Piña Colada Tropical",
    categoria: "Bebidas tropicales",
    tipo: "bebida",
    precio: 4.75,
    imagen: "pina-colada-tropical.jpg",
    descripcion: "Cremosa mezcla de piña, coco y hielo, sin alcohol."
  },
  {
    id: 12,
    nombre: "Mango Paradise",
    categoria: "Bebidas tropicales",
    tipo: "bebida",
    precio: 4.50,
    imagen: "mango-paradise.jpg",
    descripcion: "Refrescante combinación de mango, maracuyá y hielo."
  },
  {
    id: 13,
    nombre: "Mojito Brisa",
    categoria: "Mocktails",
    tipo: "bebida",
    precio: 3.99,
    imagen: "mojito-brisa.jpg",
    descripcion: "Limón, hierbabuena, azúcar y agua mineral con hielo."
  },
  {
    id: 14,
    nombre: "Blue Ocean",
    categoria: "Mocktails",
    tipo: "bebida",
    precio: 4.25,
    imagen: "blue-ocean.jpg",
    descripcion: "Bebida azul tropical con limón, soda y jarabe azul sin alcohol."
  },
  {
    id: 15,
    nombre: "Atardecer del Pacífico",
    categoria: "Mocktails",
    tipo: "bebida",
    precio: 4.50,
    imagen: "atardecer-del-pacifico.jpg",
    descripcion: "Jugo de naranja, granadina sin alcohol y hielo, con efecto degradado."
  },
  {
    id: 16,
    nombre: "Sandía Fresh",
    categoria: "Bebidas naturales",
    tipo: "bebida",
    precio: 3.25,
    imagen: "sandia-fresh.jpg",
    descripcion: "Refresco natural de sandía con limón y hielo."
  },
  {
    id: 17,
    nombre: "Maracuyá Breeze",
    categoria: "Bebidas naturales",
    tipo: "bebida",
    precio: 3.50,
    imagen: "maracuya-breeze.jpg",
    descripcion: "Refrescante limonada de maracuyá con hielo."
  },
  {
    id: 18,
    nombre: "Pink Lemonade Brisa",
    categoria: "Bebidas naturales",
    tipo: "bebida",
    precio: 3.75,
    imagen: "pink-lemonade-brisa.jpg",
    descripcion: "Limonada rosada con fresas frescas y un toque cítrico."
  }
];
/* =========================================
   VARIABLES GENERALES
\========================================= */
let productos = CATALOGO_BRISA;
let carrito = {};
let filtroActual = "todo";
let espacioSeleccionado = null;
let enviandoReserva = false;
let mesCalendario = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  1
);
const dinero = numero =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(numero) || 0);
function escaparHTML(valor) {
  return String(valor ?? "").replace(/[&<>"']/g, caracter => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caracter]);
}
function fechaISO(fecha) {
  return [
    fecha.getFullYear(),
    String(fecha.getMonth() + 1).padStart(2, "0"),
    String(fecha.getDate()).padStart(2, "0")
  ].join("-");
}
function hoyLocal() {
  const hoy = new Date();
  return new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
}
function fechaBonita(fecha) {
  return new Intl.DateTimeFormat("es-SV", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(fecha);
}
function horaBonita(hora) {
  const [h, m] = hora.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h >= 12 ? "p. m." : "a. m."}`;
}
function rutaImagen(producto) {
  return producto.imagen.startsWith("img/")
    ? producto.imagen
    : `img/${producto.imagen}`;
}
/* =========================================
   NAVEGACIÓN ENTRE PÁGINAS
\========================================= */
function cerrarMenuMovil() {
  $("#nav-links")?.classList.remove("abierto");
  $("#nav-toggle")?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-abierto");
}
function actualizarNav() {
  $("#nav")?.classList.toggle("compacta", window.scrollY > 45);
}
function controlarVideos() {
  $$("video").forEach(video => {
    const pagina = video.closest(".pagina");
    const pantalla = video.closest(".reservas-pantalla");
    const paginaVisible =
      !pagina || pagina.classList.contains("activa");
    const pantallaVisible =
      !pantalla || pantalla.classList.contains("activa");
    if (paginaVisible && pantallaVisible && !document.hidden) {
      video.muted = true;
      const promesa = video.play();
      if (promesa?.catch) promesa.catch(() => {});
    } else {
      video.pause();
    }
  });
}
function actualizarRevelados() {
  requestAnimationFrame(() => {
    $$(".pagina.activa .reveal").forEach(elemento => {
      const pantalla = elemento.closest(".reservas-pantalla");
      if (pantalla && !pantalla.classList.contains("activa")) {
        return;
      }
      const rect = elemento.getBoundingClientRect();
      if (rect.top < innerHeight - 10 && rect.bottom > 0) {
        elemento.classList.add("visible");
      }
    });
  });
}
function actualizarExperiencias() {
  if (!$("#espacios")?.classList.contains("activa")) return;
  $$("#espacios .espacio-detalle").forEach(elemento => {
    const rect = elemento.getBoundingClientRect();
    if (rect.top < innerHeight - 25 && rect.bottom > 0) {
      elemento.classList.add("visible");
    }
  });
}
function irAPagina(nombre, cambiarHash = true) {
  if (!PAGINAS.includes(nombre)) nombre = "inicio";
  $$(".pagina").forEach(pagina => {
    pagina.classList.toggle("activa", pagina.id === nombre);
  });
  $$(".nav-links [data-pagina]").forEach(enlace => {
    enlace.classList.toggle(
      "nav-activo",
      enlace.dataset.pagina === nombre
    );
  });
  if (nombre === "reservas") {
    if (espacioSeleccionado) {
      mostrarFormulario(false);
    } else {
      mostrarEleccion(false);
    }
  }
  if (cambiarHash && location.hash !== `#${nombre}`) {
    history.pushState(null, "", `#${nombre}`);
  }
  document.body.classList.toggle(
    "footer-visible",
    nombre === "inicio" || nombre === "reservas"
  );
  cerrarMenuMovil();
  window.scrollTo(0, 0);
  actualizarNav();
  controlarVideos();
  actualizarRevelados();
  actualizarExperiencias();
}
let brisaEnTransicion = false;
function irAPaginaConOla(nombre) {
  if (brisaEnTransicion) return;
  if (!PAGINAS.includes(nombre)) nombre = "inicio";
  if ($(`#${nombre}`)?.classList.contains("activa") ||
      matchMedia("(prefers-reduced-motion: reduce)").matches) {
    irAPagina(nombre);
    return;
  }
  const ola = $("#brisa-transicion");
  if (!ola) { irAPagina(nombre); return; }
  brisaEnTransicion = true;
  ola.classList.remove("activa");
  void ola.offsetWidth;
  ola.classList.add("activa");
  setTimeout(() => irAPagina(nombre), 180);
  setTimeout(() => {
    ola.classList.remove("activa");
    brisaEnTransicion = false;
  }, 680);
}
function iniciarNavegacion() {
  document.addEventListener("click", evento => {
    const enlace = evento.target.closest("[data-pagina]");
    if (!enlace) return;
    evento.preventDefault();
    irAPaginaConOla(enlace.dataset.pagina);
  });
  document.addEventListener("click", evento => {
    const enlace = evento.target.closest("[data-scroll]");
    if (!enlace) return;
    evento.preventDefault();
    document.getElementById(enlace.dataset.scroll)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  });
  $("#nav-toggle")?.addEventListener("click", () => {
    const abierto = $("#nav-links").classList.toggle("abierto");
    $("#nav-toggle").setAttribute(
      "aria-expanded",
      String(abierto)
    );
    document.body.classList.toggle("menu-abierto", abierto);
  });
  window.addEventListener("scroll", () => {
    actualizarNav();
    actualizarRevelados();
    actualizarExperiencias();
  }, { passive: true });
  window.addEventListener("popstate", () => {
    irAPagina(location.hash.slice(1), false);
  });
  document.addEventListener("visibilitychange", controlarVideos);
  irAPagina(location.hash.slice(1) || "inicio", false);
}
/* =========================================
   MENÚ: TODO / COMIDAS / BEBIDAS
\========================================= */
function actualizarVistaMenu() {
  const esTodo = filtroActual === "todo";
  if ($("#menu-vista-todo")) {
    $("#menu-vista-todo").hidden = !esTodo;
  }
  if ($("#contenedor-productos")) {
    $("#contenedor-productos").hidden = esTodo;
  }
  $$(".filtro").forEach(boton => {
    boton.classList.toggle(
      "activo",
      boton.dataset.cat === filtroActual
    );
  });
}
function renderizarProductos() {
  const contenedor = $("#contenedor-productos");
  if (!contenedor) return;
  actualizarVistaMenu();
  if (filtroActual === "todo") {
    contenedor.innerHTML = "";
    return;
  }
  const filtrados = productos.filter(
    producto => producto.tipo === filtroActual
  );
  contenedor.innerHTML = filtrados.map(producto => {
    const cantidad = carrito[producto.id] || 0;
    return `
      <article class="prod">
        <span class="prod-categoria">
          ${escaparHTML(producto.categoria)}
        </span>
        <img
          src="${escaparHTML(rutaImagen(producto))}"
          alt="${escaparHTML(producto.nombre)}"
          loading="lazy"
        >
        <div class="prod-info">
          <h3>${escaparHTML(producto.nombre)}</h3>
          <p>${escaparHTML(producto.descripcion)}</p>
          <div class="prod-pie">
            <strong class="precio">
              ${dinero(producto.precio)}
            </strong>
            <div class="cant">
              <button
                type="button"
                data-restar="${producto.id}"
                aria-label="Restar ${escaparHTML(producto.nombre)}"
              >−</button>
              <strong>${cantidad}</strong>
              <button
                type="button"
                data-sumar="${producto.id}"
                aria-label="Agregar ${escaparHTML(producto.nombre)}"
              >+</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}
/* =========================================
   CARRUSEL DE LAS 18 FOTOGRAFÍAS
   SIN PRECIOS NI DESCRIPCIONES
\========================================= */
function iniciarCarruselMenu() {
  const track = $("#menu-carrusel-track");
  const puntos = $("#menu-carrusel-dots");
  if (!track || !puntos) return;

  // Alternar bebidas y comidas para lograr un catálogo variado.
  const comidas = productos.filter(p => p.tipo === "comida");
  const bebidas = productos.filter(p => p.tipo === "bebida");
  const ordenados = [];
  while (comidas.length || bebidas.length) {
    if (comidas.length) ordenados.push(comidas.shift());
    if (bebidas.length) ordenados.push(bebidas.shift());
  }
  if (!ordenados.length) return;

  // Conservar los botones existentes en el HTML.
  const ventana = document.createElement("div");
  ventana.className = "brisa-menu-ventana";
  track.parentNode.insertBefore(ventana, track);
  ventana.appendChild(track);

  track.innerHTML = ordenados.map(producto => `
    <div class="menu-showcase-slide">
      <div class="menu-showcase-photo">
        <img src="${escaparHTML(rutaImagen(producto))}"
             alt="${escaparHTML(producto.nombre)}" loading="lazy">
      </div>
    </div>`).join("");

  const slides = Array.from(track.querySelectorAll(".menu-showcase-slide"));
  let actual = 0;
  let intervalo = null;
  puntos.innerHTML = "";

  function mostrar(numero) {
    actual = (numero + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const distancia = (i - actual + slides.length) % slides.length;
      slide.classList.toggle("actual", distancia === 0);
      slide.classList.toggle("derecha", distancia === 1);
      slide.classList.toggle("izquierda", distancia === slides.length - 1);
      slide.setAttribute("aria-hidden", String(distancia !== 0));
    });
    puntos.querySelectorAll("button").forEach((boton, i) => {
      boton.classList.toggle("activo", i === actual);
      boton.setAttribute("aria-pressed", String(i === actual));
    });
  }

  function reiniciar() {
    clearInterval(intervalo);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    intervalo = setInterval(() => {
      if ($("#menu")?.classList.contains("activa") &&
          filtroActual === "todo" && !document.hidden) {
        mostrar(actual + 1);
      }
    }, 4200);
  }

  slides.forEach((slide, i) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.setAttribute("aria-label", `Ver fotografía ${i + 1}`);
    boton.addEventListener("click", () => { mostrar(i); reiniciar(); });
    puntos.appendChild(boton);
    slide.addEventListener("click", () => {
      if (i !== actual) { mostrar(i); reiniciar(); }
    });
  });

  $("#menu-carrusel-prev")?.addEventListener("click", () => {
    mostrar(actual - 1); reiniciar();
  });
  $("#menu-carrusel-next")?.addEventListener("click", () => {
    mostrar(actual + 1); reiniciar();
  });
  mostrar(0);
  reiniciar();
}

/* =========================================
   CARRITO DE PRODUCTOS
\========================================= */
function productosCarrito() {
  return productos
    .filter(producto => (carrito[producto.id] || 0) > 0)
    .map(producto => ({
      ...producto,
      cantidad: carrito[producto.id]
    }));
}
function totalMenu() {
  return productosCarrito().reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  );
}
function actualizarCarrito() {
  const cantidad = Object.values(carrito).reduce(
    (total, numero) => total + numero,
    0
  );
  if ($("#carrito-cant")) {
    $("#carrito-cant").textContent = cantidad;
  }
  if ($("#carrito-total")) {
    $("#carrito-total").textContent = dinero(totalMenu());
  }
  if ($("#barra-carrito")) {
    $("#barra-carrito").hidden = cantidad === 0;
  }
  const detalle = $("#detalle-menu-agregado");
  if (detalle) {
    const elegidos = productosCarrito();
    detalle.innerHTML = elegidos.length
      ? elegidos.map(producto => `
          <div class="menu-linea">
            <span>
              ${escaparHTML(producto.nombre)}
              × ${producto.cantidad}
            </span>
            <strong>
              ${dinero(producto.precio * producto.cantidad)}
            </strong>
          </div>
        `).join("")
      : "<p>Todavía no has agregado productos.</p>";
  }
  actualizarResumen();
}
function cambiarCantidad(id, cambio) {
  const producto = productos.find(
    elemento => elemento.id === Number(id)
  );
  if (!producto) return;
  const cantidad = Math.max(
    0,
    Math.min(99, (carrito[producto.id] || 0) + cambio)
  );
  if (cantidad === 0) {
    delete carrito[producto.id];
  } else {
    carrito[producto.id] = cantidad;
  }
  renderizarProductos();
  actualizarCarrito();
}
function iniciarMenu() {
  $$(".filtro").forEach(boton => {
    boton.addEventListener("click", () => {
      filtroActual = boton.dataset.cat;
      renderizarProductos();
    });
  });
  $("#contenedor-productos")?.addEventListener("click", evento => {
    const sumar = evento.target.closest("[data-sumar]");
    const restar = evento.target.closest("[data-restar]");
    if (sumar) cambiarCantidad(sumar.dataset.sumar, 1);
    if (restar) cambiarCantidad(restar.dataset.restar, -1);
  });
  $("#btn-completar-reserva")?.addEventListener("click", () => {
    irAPagina("reservas");
  });
  renderizarProductos();
  iniciarCarruselMenu();
}
/* =========================================
   DESTACADOS DE INICIO
\========================================= */
function iniciarDestacados() {
  const contenedor = $("#destacados-lista");
  if (!contenedor) return;
  const destacados = [productos[0], productos[3], productos[10]];
  contenedor.innerHTML = destacados.map(producto => `
    <article class="brisa-featured-item">
      <h3>${escaparHTML(producto.nombre)}</h3>
      <p>${escaparHTML(producto.descripcion)}</p>
      <strong>${dinero(producto.precio)}</strong>
    </article>
  `).join("");
}
/* =========================================
   RESERVACIONES: PANTALLAS
\========================================= */
function mostrarEleccion(subir = true) {
  $("#reservas-eleccion")?.classList.add("activa");
  $("#reservas-formulario-pantalla")?.classList.remove("activa");
  if (subir) window.scrollTo(0, 0);
  controlarVideos();
  actualizarRevelados();
}
function mostrarFormulario(subir = true) {
  $("#reservas-eleccion")?.classList.remove("activa");
  $("#reservas-formulario-pantalla")?.classList.add("activa");
  if (subir) window.scrollTo(0, 0);
  actualizarResumen();
  controlarVideos();
  actualizarRevelados();
}
function elegirEspacio(tipo) {
  if (!ESPACIOS[tipo]) return;
  espacioSeleccionado = tipo;
  const espacio = ESPACIOS[tipo];
  $("#tipo").value = tipo;
  $("#espacio-elegido-titulo").textContent = espacio.nombre;
  $("#resumen-espacio").textContent = espacio.nombre;
  $("#resumen-descripcion").textContent = espacio.descripcion;
  /* LAS NUEVAS FOTOGRAFÍAS TAMBIÉN SE USAN
     EN EL RESUMEN DE RESERVACIÓN */
  $("#resumen-imagen").src = espacio.imagen;
  $("#resumen-imagen").alt = espacio.nombre;
  $("#resumen-condiciones").textContent = espacio.condiciones;
  actualizarOpcionesPersonas();
  irAPagina("reservas");
  mostrarFormulario();
}
/* =========================================
   PERSONAS
\========================================= */
function actualizarOpcionesPersonas() {
  const campo = $("#inputPersonas");
  if (!campo || !espacioSeleccionado) return;
  const maximo = ESPACIOS[espacioSeleccionado].maxPersonas;
  campo.min = espacioSeleccionado === "sombrilla" ? "2" : "1";
  campo.max = String(maximo);
  campo.placeholder = espacioSeleccionado === "sombrilla" ? "Exactamente 2 personas" : `De 1 a ${maximo} personas`;
  if (espacioSeleccionado === "sombrilla") {
    campo.value = "2";
    campo.readOnly = true;
  } else {
    campo.readOnly = false;
    if (campo.value && (+campo.value < 1 || +campo.value > maximo)) campo.value = "";
  }
  $("#ayuda-personas").textContent = espacioSeleccionado === "sombrilla"
    ? "Capacidad obligatoria: exactamente 2 personas."
    : `Capacidad máxima: ${maximo} personas.`;
  actualizarResumen();
}
/* =========================================
   CALENDARIO
\========================================= */
function renderizarCalendario() {
  const contenedor = $("#cal-dias");
  if (!contenedor) return;
  const anio = mesCalendario.getFullYear();
  const mes = mesCalendario.getMonth();
  $("#cal-mes").textContent = new Intl.DateTimeFormat("es-SV", {
    month: "long",
    year: "numeric"
  }).format(mesCalendario);
  const primerDia = new Date(anio, mes, 1);
  const ultimoDia = new Date(anio, mes + 1, 0).getDate();
  const desplazamiento = (primerDia.getDay() + 6) % 7;
  const hoy = hoyLocal();
  const seleccionada = $("#inputFecha").value;
  contenedor.innerHTML = "";
  for (let i = 0; i < desplazamiento; i++) {
    const vacio = document.createElement("span");
    vacio.className = "calendario-vacio";
    contenedor.appendChild(vacio);
  }
  for (let dia = 1; dia <= ultimoDia; dia++) {
    const fecha = new Date(anio, mes, dia);
    const iso = fechaISO(fecha);
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = dia;
    boton.disabled = fecha < hoy;
    if (iso === seleccionada) {
      boton.classList.add("seleccionado");
    }
    boton.addEventListener("click", () => {
      $("#inputFecha").value = iso;
      $("#fecha-elegida-texto").textContent = fechaBonita(fecha);
      renderizarCalendario();
      renderizarHorarios();
      actualizarResumen();
    });
    contenedor.appendChild(boton);
  }
  const anterior = $("#cal-prev");
  if (anterior) {
    anterior.disabled =
      anio === hoy.getFullYear() && mes === hoy.getMonth();
  }
}
function cambiarMes(cambio) {
  const nuevo = new Date(
    mesCalendario.getFullYear(),
    mesCalendario.getMonth() + cambio,
    1
  );
  const hoy = hoyLocal();
  const limite = new Date(
    hoy.getFullYear(),
    hoy.getMonth() + 12,
    1
  );
  if (
    nuevo < new Date(hoy.getFullYear(), hoy.getMonth(), 1) ||
    nuevo > limite
  ) return;
  mesCalendario = nuevo;
  renderizarCalendario();
}
/* =========================================
   HORARIOS
\========================================= */
function renderizarHorarios() {
  const contenedor = $("#horarios-grid");
  if (!contenedor) return;
  const fecha = $("#inputFecha").value;
  const elegida = $("#inputHora").value;
  const ahora = new Date();
  contenedor.innerHTML = HORARIOS.map(hora => {
    let deshabilitado = false;
    if (fecha === fechaISO(ahora)) {
      const [h, m] = hora.split(":").map(Number);
      const llegada = new Date(ahora);
      llegada.setHours(h, m, 0, 0);
      deshabilitado = llegada <= ahora;
    }
    return `
      <button
        type="button"
        class="horario-btn ${elegida === hora && !deshabilitado ? "seleccionado" : ""}"
        data-hora="${hora}"
        ${deshabilitado ? "disabled" : ""}
      >
        ${horaBonita(hora)}
      </button>
    `;
  }).join("");
  const elegido = contenedor.querySelector(
    `.horario-btn[data-hora="${elegida}"]`
  );
  if (elegida && (!elegido || elegido.disabled)) {
    $("#inputHora").value = "";
  }
}
/* =========================================
   RESUMEN DINÁMICO
\========================================= */
function actualizarResumen() {
  if (!$("#resumen-total")) return;
  const espacio = ESPACIOS[espacioSeleccionado];
  const fecha = $("#inputFecha")?.value;
  const hora = $("#inputHora")?.value;
  const personas = $("#inputPersonas")?.value;
  $("#resumen-fecha").textContent = fecha
    ? fechaBonita(new Date(`${fecha}T12:00:00`))
    : "Por seleccionar";
  $("#resumen-hora").textContent = hora
    ? horaBonita(hora)
    : "Por seleccionar";
  $("#resumen-personas").textContent = personas
    ? `${personas} ${Number(personas) === 1 ? "persona" : "personas"}`
    : "Por seleccionar";
  $("#resumen-costo").textContent = espacio
    ? espacio.costo === null
      ? "Por confirmar"
      : dinero(espacio.costo)
    : dinero(0);
  $("#resumen-menu").textContent = dinero(totalMenu());
  $("#resumen-total").textContent =
    espacio?.costo === null
      ? `${dinero(totalMenu())} + costo por confirmar`
      : dinero((espacio?.costo || 0) + totalMenu());
}
/* =========================================
   MENSAJES Y RESPUESTAS DEL SERVIDOR
\========================================= */
function mostrarMensajeReserva(mensaje, tipo = "error") {
  const elemento = $("#mensajeReserva");
  if (!elemento) return;
  elemento.textContent = mensaje;
  elemento.className = `mensaje-form ${tipo}`;
  elemento.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
function respuestaExitosa(datos) {
  if (!datos || typeof datos !== "object") return false;
  if (datos.success === true || datos.exito === true) {
    return true;
  }
  if (datos.ok === true) return true;
  if (typeof datos.status === "string") {
    return ["ok", "success", "exito"].includes(
      datos.status.toLowerCase()
    );
  }
  return false;
}
/* =========================================
   ENVÍO DE RESERVACIONES A PHP
\========================================= */
function iniciarReservaciones() {
  $$(".elegir-reserva, .elegir-desde-espacios").forEach(boton => {
    boton.addEventListener("click", () => {
      elegirEspacio(boton.dataset.tipo);
    });
  });
  $("#volver-espacios")?.addEventListener("click", () => {
    espacioSeleccionado = null;
    mostrarEleccion();
  });
  $("#cal-prev")?.addEventListener("click", () => cambiarMes(-1));
  $("#cal-next")?.addEventListener("click", () => cambiarMes(1));
  $("#horarios-grid")?.addEventListener("click", evento => {
    const boton = evento.target.closest("[data-hora]");
    if (!boton || boton.disabled) return;
    $("#inputHora").value = boton.dataset.hora;
    renderizarHorarios();
    actualizarResumen();
  });
  $("#inputPersonas")?.addEventListener("input", evento => {
    const campo = evento.target;
    campo.value = campo.value.replace(/[^\d]/g, "");
    if (campo.value && +campo.value > +campo.max) campo.value = campo.max;
    actualizarResumen();
  });
  $("#nombre")?.addEventListener("input", evento => {
    evento.target.value = evento.target.value.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]/g, "").replace(/\s{2,}/g, " ");
  });
  $("#inputTelefono")?.addEventListener("input", evento => {
    evento.target.value = evento.target.value.replace(/\D/g, "").slice(0, 9);
  });
  renderizarCalendario();
  renderizarHorarios();
  $("#formularioReserva")?.addEventListener(
    "submit",
    async evento => {
      evento.preventDefault();
      if (enviandoReserva) return;
      if (!espacioSeleccionado) {
        mostrarMensajeReserva("Primero elegí un espacio.");
        return;
      }
      const nombre = $("#nombre").value.trim();
      const telefono = $("#inputTelefono").value.trim();
      const fecha = $("#inputFecha").value;
      const hora = $("#inputHora").value;
      const personas = Number($("#inputPersonas").value);
      if (!fecha || fecha < fechaISO(hoyLocal())) {
        mostrarMensajeReserva("Seleccioná una fecha válida.");
        return;
      }
      if (!HORARIOS.includes(hora)) {
        mostrarMensajeReserva("Seleccioná un horario.");
        return;
      }
      if (fecha === fechaISO(new Date())) {
        const ahora = new Date();
        const [h, m] = hora.split(":").map(Number);
        const llegada = new Date(ahora);
        llegada.setHours(h, m, 0, 0);
        if (llegada <= ahora) {
          mostrarMensajeReserva(
            "Ese horario ya pasó. Elegí otro."
          );
          renderizarHorarios();
          return;
        }
      }
      if (
        !Number.isInteger(personas) ||
        personas < 1 ||
        personas > ESPACIOS[espacioSeleccionado].maxPersonas ||
        (espacioSeleccionado === "sombrilla" && personas !== 2)
      ) {
        mostrarMensajeReserva(
          "Seleccioná una cantidad válida de personas."
        );
        return;
      }
      if (nombre.length < 3 || !/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/.test(nombre)) {
        mostrarMensajeReserva("El nombre debe tener al menos 3 letras y no puede contener números.");
        $("#nombre").focus();
        return;
      }
      if (!/^\d{8,9}$/.test(telefono)) {
        mostrarMensajeReserva("Ingresá un teléfono de 8 o 9 números, sin guiones.");
        $("#inputTelefono").focus();
        return;
      }
      const espacio = ESPACIOS[espacioSeleccionado];
      const datos = {
        nombre,
        telefono,
        fecha,
        hora,
        personas,
        tipo: espacioSeleccionado,
        productos: productosCarrito().map(producto => ({
          id: producto.id,
          cantidad: producto.cantidad,
          precio: producto.precio
        })),
        total: (espacio.costo ?? 0) + totalMenu()
      };
      const boton = $("#btn-enviar-reserva");
      try {
        enviandoReserva = true;
        boton.disabled = true;
        boton.textContent = "ENVIANDO RESERVACIÓN...";
        const respuesta = await fetch(API_BRISA.reservas, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(datos)
        });
        const texto = await respuesta.text();
        let resultado;
        try {
          resultado = JSON.parse(texto);
        } catch {
          throw new Error(
            "El servidor no devolvió una respuesta JSON válida."
          );
        }
        if (!respuesta.ok || !respuestaExitosa(resultado)) {
          throw new Error(
            resultado?.mensaje ||
            resultado?.message ||
            resultado?.error ||
            "No se pudo registrar la reservación."
          );
        }
        mostrarMensajeReserva(
          resultado?.mensaje ||
          "¡Tu solicitud fue registrada correctamente!",
          "exito"
        );
        carrito = {};
        actualizarCarrito();
        renderizarProductos();
        $("#nombre").value = "";
        $("#inputTelefono").value = "";
        $("#inputFecha").value = "";
        $("#inputHora").value = "";
        $("#inputPersonas").value = "";
        $("#fecha-elegida-texto").textContent =
          "Seleccioná un día del calendario.";
        mesCalendario = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        );
        renderizarCalendario();
        renderizarHorarios();
        actualizarResumen();
      } catch (error) {
        console.error("Error al reservar:", error);
        mostrarMensajeReserva(
          error.message || "No se pudo conectar con el servidor."
        );
      } finally {
        enviandoReserva = false;
        boton.disabled = false;
        boton.textContent = "CONFIRMAR MI RESERVACIÓN →";
      }
    }
  );
}
/* =========================================
   INICIO DE SESIÓN
\========================================= */
function iniciarLogin() {
  $("#formularioLogin")?.addEventListener(
    "submit",
    async evento => {
      evento.preventDefault();
      const usuario = $("#usuario").value.trim();
      const contrasena = $("#contrasena").value;
      const mensaje = $("#mensajeLogin");
      mensaje.textContent = "";
      mensaje.className = "mensaje-form";
      if (!usuario || !contrasena) {
        mensaje.textContent =
          "Ingresá tu usuario y contraseña.";
        mensaje.classList.add("error");
        return;
      }
      try {
        const respuesta = await fetch(API_BRISA.login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ usuario, contrasena })
        });
        const datos = await respuesta.json();
        if (!respuesta.ok || !respuestaExitosa(datos)) {
          throw new Error(
            datos?.mensaje ||
            datos?.message ||
            "Credenciales incorrectas."
          );
        }
        mensaje.textContent =
          datos?.mensaje || "Inicio de sesión correcto.";
        mensaje.classList.add("exito");
        if (
          typeof datos.redirect === "string" &&
          datos.redirect.trim()
        ) {
          window.location.href = datos.redirect;
        }
      } catch (error) {
        mensaje.textContent =
          error.message || "No se pudo iniciar sesión.";
        mensaje.classList.add("error");
      }
    }
  );
}
/* =========================================
   GALERÍA CON CARRUSEL 3D
\========================================= */
function iniciarGaleria() {
  const slides = $$(".galeria-slide");
  const indicadores = $("#galeria-indicadores");
  const contador = $("#galeria-contador");
  const carrusel = $(".galeria-carrusel");
  if (!slides.length || !indicadores) return;
  let actual = 0;
  let pausado = false;
  let temporizador = null;
  function mostrarSlide(numero) {
    actual = (numero + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const distancia =
        (i - actual + slides.length) % slides.length;
      slide.classList.toggle("actual", distancia === 0);
      slide.classList.toggle("derecha", distancia === 1);
      slide.classList.toggle(
        "izquierda",
        distancia === slides.length - 1
      );
      slide.setAttribute(
        "aria-hidden",
        String(distancia !== 0)
      );
    });
    if (contador) {
      contador.textContent =
        `${String(actual + 1).padStart(2, "0")} / ` +
        `${String(slides.length).padStart(2, "0")}`;
    }
    indicadores.querySelectorAll("button").forEach((boton, i) => {
      boton.classList.toggle("activo", i === actual);
      boton.setAttribute("aria-pressed", String(i === actual));
    });
  }
  slides.forEach((slide, i) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.setAttribute(
      "aria-label",
      `Ver fotografía ${i + 1}`
    );
    boton.addEventListener("click", () => {
      mostrarSlide(i);
      iniciarAuto();
    });
    indicadores.appendChild(boton);
    slide.addEventListener("click", () => {
      if (i !== actual) {
        mostrarSlide(i);
        iniciarAuto();
        return;
      }
      const imagen = slide.querySelector("img");
      if (!imagen) return;
      $("#lightbox-img").src = imagen.src;
      $("#lightbox-img").alt = imagen.alt;
      $("#lightbox").hidden = false;
    });
  });
  function detenerAuto() {
    if (temporizador) clearInterval(temporizador);
    temporizador = null;
  }
  function iniciarAuto() {
    detenerAuto();
    if (
      pausado ||
      document.hidden ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    temporizador = setInterval(() => {
      if ($("#galeria")?.classList.contains("activa")) {
        mostrarSlide(actual + 1);
      }
    }, 5500);
  }
  $("#galeria-prev")?.addEventListener("click", () => {
    mostrarSlide(actual - 1);
    iniciarAuto();
  });
  $("#galeria-next")?.addEventListener("click", () => {
    mostrarSlide(actual + 1);
    iniciarAuto();
  });
  $("#galeria-pausa")?.addEventListener("click", evento => {
    pausado = !pausado;
    evento.currentTarget.textContent = pausado
      ? "REPRODUCIR ▶"
      : "PAUSAR II";
    iniciarAuto();
  });
  carrusel?.addEventListener("keydown", evento => {
    if (
      evento.key !== "ArrowLeft" &&
      evento.key !== "ArrowRight"
    ) return;
    evento.preventDefault();
    mostrarSlide(
      actual + (evento.key === "ArrowRight" ? 1 : -1)
    );
    iniciarAuto();
  });
  let inicioX = 0;
  carrusel?.addEventListener("touchstart", evento => {
    inicioX = evento.changedTouches[0].screenX;
  }, { passive: true });
  carrusel?.addEventListener("touchend", evento => {
    const diferencia =
      evento.changedTouches[0].screenX - inicioX;
    if (Math.abs(diferencia) > 45) {
      mostrarSlide(
        actual + (diferencia < 0 ? 1 : -1)
      );
      iniciarAuto();
    }
  }, { passive: true });
  $("#cerrar-lightbox")?.addEventListener("click", () => {
    $("#lightbox").hidden = true;
  });
  $("#lightbox")?.addEventListener("click", evento => {
    if (evento.target.id === "lightbox") {
      evento.target.hidden = true;
    }
  });
  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      $("#lightbox").hidden = true;
    }
  });
  document.addEventListener("visibilitychange", iniciarAuto);
  mostrarSlide(0);
  iniciarAuto();
}
/* =========================================
   INICIALIZACIÓN DE TODA LA PÁGINA
\========================================= */
document.addEventListener("DOMContentLoaded", () => {
  if ($("#anio-footer")) {
    $("#anio-footer").textContent =
      String(new Date().getFullYear());
  }
  iniciarNavegacion();
  iniciarMenu();
  iniciarDestacados();
  iniciarReservaciones();
  iniciarLogin();
  iniciarGaleria();
  actualizarCarrito();
  actualizarRevelados();
  actualizarExperiencias();
  controlarVideos();
});
