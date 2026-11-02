// Productos
const productos = [
  { id: 1, nombre: "Laptop Lenovo V15 G4 Core i3", categoria: "Laptops", precio: 1899, imagen: "img/productos/laptop-lenovo-v15.jpg" },
  { id: 2, nombre: "Laptop HP 15 Core i5 táctil", categoria: "Laptops", precio: 2699, imagen: "img/productos/laptop-hp-15-tactil.jpg" },
  { id: 3, nombre: "Laptop HP Pavilion 15 Ryzen 5", categoria: "Laptops", precio: 2499, imagen: "img/productos/laptop-hp-pavilion.jpg" },
  { id: 4, nombre: "Laptop gamer Lenovo LOQ Core i5", categoria: "Laptops", precio: 3899, imagen: "img/productos/laptop-lenovo-loq.jpg" },
  { id: 5, nombre: "Monitor Teros 22\" Full HD", categoria: "Monitores", precio: 399, imagen: "img/productos/monitor-teros-22.jpg" },
  { id: 6, nombre: "Monitor Advance 27\" Full HD", categoria: "Monitores", precio: 649, imagen: "img/productos/monitor-advance-27.jpg" },
  { id: 7, nombre: "Mouse inalámbrico Logitech M170", categoria: "Mouse", precio: 39, imagen: "img/productos/mouse-logitech-m170.jpg" },
  { id: 8, nombre: "Mouse gamer Genius Scorpion M700", categoria: "Mouse", precio: 69, imagen: "img/productos/mouse-genius-m700.jpg" },
  { id: 9, nombre: "Teclado gamer Halion Asgard RGB", categoria: "Teclados", precio: 149, imagen: "img/productos/teclado-halion-asgard.jpg" },
  { id: 10, nombre: "Combo teclado y mouse inalámbrico Teros", categoria: "Teclados", precio: 59, imagen: "img/productos/teclado-mouse-teros.jpg" },
  { id: 11, nombre: "Audífonos inalámbricos Philips Bass+", categoria: "Audífonos", precio: 119, imagen: "img/productos/audifonos-philips.jpg" },
  { id: 12, nombre: "Audífonos gamer Teros TE-8171N", categoria: "Audífonos", precio: 99, imagen: "img/productos/audifonos-teros-gamer.jpg" }
];

let carrito = [];

// Elementos de la página
const listaProductos = document.getElementById("lista-productos");
const sinResultados = document.getElementById("sin-resultados");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtro-categoria");

const contadorCarrito = document.getElementById("contador-carrito");
const itemsCarrito = document.getElementById("items-carrito");
const tablaCarrito = document.getElementById("tabla-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const totalCarrito = document.getElementById("total-carrito");
const btnVaciar = document.getElementById("btn-vaciar");
const btnComprar = document.getElementById("btn-comprar");

const formulario = document.getElementById("form-contacto");
const cajaAviso = document.getElementById("aviso");

// Mostrar productos
function formatearPrecio(numero) {
  return "S/ " + numero.toFixed(2);
}

function mostrarProductos(lista) {
  if (lista.length === 0) {
    listaProductos.innerHTML = "";
    sinResultados.classList.remove("d-none");
    return;
  }
  sinResultados.classList.add("d-none");

  let html = "";
  for (let i = 0; i < lista.length; i++) {
    const producto = lista[i];
    html += `
      <div class="col-sm-6 col-lg-4 col-xl-3">
        <div class="card producto h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body d-flex flex-column">
            <span class="categoria">${producto.categoria}</span>
            <h5 class="card-title">${producto.nombre}</h5>
            <div class="pie-tarjeta">
              <span class="precio">${formatearPrecio(producto.precio)}</span>
              <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${producto.id})">
                <i class="bi bi-cart-plus"></i> Agregar
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }
  listaProductos.innerHTML = html;
}

// Buscador y filtro
function buscarProductos() {
  const texto = buscador.value.toLowerCase().trim();
  const categoria = filtroCategoria.value;
  const resultado = [];

  for (const producto of productos) {
    const coincideNombre = producto.nombre.toLowerCase().includes(texto);
    const coincideCategoria = categoria === "todas" || producto.categoria === categoria;

    if (coincideNombre && coincideCategoria) {
      resultado.push(producto);
    }
  }

  mostrarProductos(resultado);
}

// Carrito
function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  const itemExistente = carrito.find((item) => item.id === id);

  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }

  guardarCarrito();
  mostrarCarrito();
  mostrarMensaje("Se agregó \"" + producto.nombre + "\" al carrito.");
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id);
  guardarCarrito();
  mostrarCarrito();
  mostrarMensaje("Producto eliminado del carrito.");
}

function calcularTotal() {
  let total = 0;
  carrito.forEach((item) => {
    total += item.precio * item.cantidad;
  });
  return total;
}

function contarProductos() {
  let cantidad = 0;
  carrito.forEach((item) => {
    cantidad += item.cantidad;
  });
  return cantidad;
}

function mostrarCarrito() {
  contadorCarrito.textContent = contarProductos();
  totalCarrito.textContent = formatearPrecio(calcularTotal());

  if (carrito.length === 0) {
    tablaCarrito.classList.add("d-none");
    carritoVacio.classList.remove("d-none");
    itemsCarrito.innerHTML = "";
    return;
  }
  tablaCarrito.classList.remove("d-none");
  carritoVacio.classList.add("d-none");

  let filas = "";
  carrito.forEach((item) => {
    filas += `
      <tr>
        <td>
          <div class="producto-carrito">
            <img src="${item.imagen}" alt="${item.nombre}">
            <span>${item.nombre}</span>
          </div>
        </td>
        <td>${formatearPrecio(item.precio)}</td>
        <td>${item.cantidad}</td>
        <td>${formatearPrecio(item.precio * item.cantidad)}</td>
        <td>
          <button class="btn btn-outline-danger btn-sm" onclick="eliminarDelCarrito(${item.id})" title="Eliminar">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>`;
  });
  itemsCarrito.innerHTML = filas;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const guardado = localStorage.getItem("carrito");
  if (guardado) {
    carrito = JSON.parse(guardado);
  }
}

function vaciarCarrito() {
  if (carrito.length === 0) {
    mostrarMensaje("El carrito ya está vacío.", "error");
    return;
  }
  if (confirm("¿Seguro que deseas vaciar el carrito?")) {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
    mostrarMensaje("Se vació el carrito.");
  }
}

function finalizarCompra() {
  if (carrito.length === 0) {
    mostrarMensaje("Agrega productos antes de comprar.", "error");
    return;
  }
  const total = formatearPrecio(calcularTotal());
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
  bootstrap.Modal.getInstance(document.getElementById("modalCarrito")).hide();
  mostrarMensaje("¡Gracias por tu compra! Total pagado: " + total);
}

// Validar formulario
function marcarCampo(campo, esValido) {
  if (esValido) {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
  } else {
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
  }
}

function validarFormulario(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const telefono = document.getElementById("telefono");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");

  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const formatoCelular = /^9[0-9]{8}$/;

  const nombreValido = nombre.value.trim().length >= 3;
  const correoValido = formatoCorreo.test(correo.value.trim());
  const telefonoValido = formatoCelular.test(telefono.value.trim());
  const asuntoValido = asunto.value !== "";
  const mensajeValido = mensaje.value.trim().length >= 10;

  marcarCampo(nombre, nombreValido);
  marcarCampo(correo, correoValido);
  marcarCampo(telefono, telefonoValido);
  marcarCampo(asunto, asuntoValido);
  marcarCampo(mensaje, mensajeValido);

  if (nombreValido && correoValido && telefonoValido && asuntoValido && mensajeValido) {
    mostrarMensaje("Gracias, " + nombre.value.trim() + ". Tu mensaje fue enviado correctamente.");
    formulario.reset();
    const campos = formulario.querySelectorAll(".form-control, .form-select");
    campos.forEach((campo) => campo.classList.remove("is-valid"));
  } else {
    mostrarMensaje("Revisa los campos marcados en rojo.", "error");
  }
}

// Mensajes
let temporizador;

function mostrarMensaje(texto, tipo = "ok") {
  cajaAviso.textContent = texto;
  cajaAviso.classList.remove("d-none");

  if (tipo === "error") {
    cajaAviso.classList.add("error");
  } else {
    cajaAviso.classList.remove("error");
  }

  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    cajaAviso.classList.add("d-none");
  }, 3000);
}

// Eventos
buscador.addEventListener("input", buscarProductos);
filtroCategoria.addEventListener("change", buscarProductos);
formulario.addEventListener("submit", validarFormulario);
btnVaciar.addEventListener("click", vaciarCarrito);
btnComprar.addEventListener("click", finalizarCompra);

// Cerrar el menú en celulares
document.querySelectorAll("#menu .nav-link").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Al cargar la página
cargarCarrito();
mostrarProductos(productos);
mostrarCarrito();
