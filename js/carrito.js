// carrito.js

function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarIconoCarrito();
}

function agregarProductoAlCarrito(producto) {
  const carrito = getCarrito();
  carrito.push(producto);
  guardarCarrito(carrito);
}

function actualizarIconoCarrito() {
  const carrito = getCarrito();
  const count = carrito.length;
  const countElem = document.getElementById("cart-count");
  if (countElem) countElem.textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarIconoCarrito();
  renderizarCarrito();
});

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarrito() {
  const carrito = obtenerCarrito();
  const contenedor = document.getElementById("carrito-container");
  contenedor.innerHTML = "";

  const resumen = {};

  carrito.forEach((producto) => {
    resumen[producto.nombre] = resumen[producto.nombre] || { ...producto, cantidad: 0 };
    resumen[producto.nombre].cantidad++;
  });

  let total = 0;

  Object.values(resumen).forEach(producto => {
    const precio = parseFloat(producto.precio.replace(",", "."));
    total += precio * producto.cantidad;

    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="producto-info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p><strong>${producto.precio}</strong> x ${producto.cantidad}</p>
      </div>
      <div class="producto-controles">
        <button onclick="sumar('${producto.nombre}')">+</button>
        <button onclick="restar('${producto.nombre}')">-</button>
        <button onclick="eliminar('${producto.nombre}')">🗑️</button>
      </div>
    `;
    contenedor.appendChild(div);
  });

  document.getElementById("total").textContent = total.toFixed(2) + " €";
}

function sumar(nombre) {
  const carrito = obtenerCarrito();
  const producto = carrito.find(p => p.nombre === nombre);
  if (producto) {
    carrito.push(producto);
    guardarCarrito(carrito);
    renderizarCarrito();
  }
}

function restar(nombre) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex(p => p.nombre === nombre);
  if (index !== -1) {
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    renderizarCarrito();
  }
}

function eliminar(nombre) {
  if (confirm(`¿Estás seguro de que deseas eliminar "${nombre}" del carrito?`)) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(p => p.nombre !== nombre);
    guardarCarrito(carrito);
    renderizarCarrito();
  }
}

document.getElementById("pagar-btn").addEventListener("click", () => {
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    alert("No hay productos en el carrito. Por favor, selecciona algunos productos antes de pagar.");
    return;
  }

  const username = localStorage.getItem("username") || "Usuario";
  if (username === "Usuario") {
    alert("Por favor, crea una cuenta o inicia sesión para continuar con el pago.");
    return;
  }

  document.getElementById("form-pago").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById("form-pago").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Pago procesado correctamente! Gracias por tu compra.");
  localStorage.removeItem("carrito");
  renderizarCarrito();
  document.getElementById("form-pago").reset();
  document.getElementById("form-pago").style.display = "none";
});

function cerrarSesion() {
  const confirmar = confirm("¿Estás seguro de que quieres cerrar sesión?");
  if (confirmar) {
    localStorage.removeItem('username');
    return true;
  }
  return false;
}
