const productos = [
     {
        nombre: "Gafas-Buriram",
        descripcion: "Las gafas Buriram de Carrera son un modelo deportivo y colorido, con montura de poliamida, detalles antideslizantes y lentes espejadas. Inspiradas en el circuito tailandés, combinan estilo y funcionalidad.",
        precio: "227,00 €",
        imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/1/1/116c79a7235ec492b299ed9a476ff115.jpg",
        link: "https://shop.ducati.com/es/es/catalog/product/view/id/17820/s/gafas-buriram/category/70/#"
      },
      {
        nombre: "Gafas-Le Mans",
        descripcion: "Las gafas Le Mans de Carrera tienen un diseño cuadrado y envolvente, fabricadas en poliamida con lentes fotocromáticas y detalles antideslizantes. Ideales para conducción y uso con casco, combinan versatilidad, funcionalidad y estilo.",
        precio: "197,00 €",
        imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/d/f/df9dc90baad7edcff1505db2478d3db1.jpg",
        link: "https://shop.ducati.com/es/es/catalog/product/view/id/17817/s/gafas-le-mans/category/70/"
      },
      {
        nombre: "Gafas-Donington",
        descripcion: "Las gafas Donington de Carrera destacan por su diseño moderno y lentes rojas, inspiradas en el circuito inglés. Fabricadas en poliamida con detalles antideslizantes, son prácticas para conducir o usar con casco, sin sacrificar estilo.",
        precio: "138,00 €",
        imagen: "https://shop.ducati.com/media/catalog/product/cache/fc554565915d457a9453e38c652964e1/5/2/528c5ec644728f1fffa0b27d412c24ef.jpg",
        link: "https://shop.ducati.com/es/es/catalog/product/view/id/17814/s/gafas-donington/category/70/"
      },
      {
        nombre: "Gafas-Daytona",
        descripcion: "Gafas Daytona Ducati x Carrera: Diseño original con montura amarilla y lentes verdes polarizadas (antirreflejos). Fabricadas en poliamida con detalles antideslizantes, son ideales para moto (aptas para casco) y llevan el estilo Ducati en cada detalle.",
        precio: "168,00 €",
        imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/c/8/c86149a47a969d45aa157dd86f54be83.jpg",
        link: "https://shop.ducati.com/es/es/catalog/product/view/id/17811/s/gafas-daytona/category/70/"
      },
      {
      nombre: "Gafas-Suzuka",
      descripcion: "Gafas Suzuka Ducati x Carrera: Fusión de tecnología Carrera y diseño Ducati. Con montura de poliamida, lentes rojas y detalles antideslizantes, son aptas para casco y combinan rendimiento y estilo motero.",
      precio: "168,00 €",
      imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/9/3/93df7c21cb5e326022762b02d48b7285.jpg",
      link: "https://shop.ducati.com/es/es/catalog/product/view/id/17808/s/gafas-suzuka/category/70/"
    },
    {
    nombre: "Gafas-Jarama",
    descripcion: "Lentes azules polarizadas antirreflejos, montura deportiva de poliamida con detalles antideslizantes. Ideales para motoristas, compatibles con casco y con el icónico diseño Ducati. Tecnología Carrera con estilo racing.",
    precio: "178,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/7/f/7f42a42832cf04c1aee49375a7052fd9.jpg",
    link: "https://shop.ducati.com/es/es/catalog/product/view/id/17805/s/gafas-jarama/category/70/"
    },
    {
    nombre: "SUNGLASSES ZELTWEG PBT - CARRERA DUCATI",
    descripcion: "Modelo inspirado en la Panigale, con lentes redondeadas multicapa y montura transparente exclusiva para el equipo Lenovo. Diseño compacto con extremidades de goma pulida para uso bajo casco. Tecnología Carrera con ADN Ducati.",
    precio: "138,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/9/8/987713700.jpg",
    link: "https://shop.ducati.com/es/es/accessories/sunglasses/sunglasses-zeltweg-pbt-carrera-ducati.html"
    },
    {
    nombre: "SUNGLASSES ARAGON - CARRERA DUCATI",
    descripcion: "Diseño aerodinámico tipo máscara inspirado en las motos Ducati. Montura de poliamida con lentes rojas multicapa y detalles de goma para máxima comodidad. Compatibles con casco, combinan alto rendimiento y estilo racing.",
    precio: "178,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/9/8/987713701.jpg",
    link: "https://shop.ducati.com/es/es/accessories/sunglasses/sunglasses-aragon-carrera-ducati.html"
    },
    {
    nombre: "Gafas-Montmelo",
    descripcion: "Diseño racing inspirado en las Panigale, con lentes rojas multicapa y montura negra de poliamida. Ultra ligeras y cómodas para usar bajo el casco, combinan alto rendimiento y estilo motero.",
    precio: "138,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/2/7/272beb2823782646b4268a7fce2c40e7.jpg",
    link: "https://shop.ducati.com/es/es/accessories/sunglasses/gafas-montmelo.html"
    },
    {
    nombre: "Gafas-Zeltweg Unisex",
    descripcion: "Las gafas de sol Zeltweg diseñadas por Carrera para Ducati, destacan por su estilo icónico gracias a las amplias lentes rojas multicapa de forma redonda y la montura negra",
    precio: "138,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/fc554565915d457a9453e38c652964e1/a/e/ae9631076623a2d94a4b979a6a10bda0.jpg",
    link: "https://shop.ducati.com/es/es/accessories/sunglasses/gafas-zeltweg-unisex.html"
    },
    {
    nombre: "Gafas-Silverstone Unisex",
    descripcion: "Nacidas de la colaboración entre Ducati y Carrera, las gafas de sol Silverstone aseguran una perfecta vestibilidad incluso debajo del casco de la moto.",
    precio: "138,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/fc554565915d457a9453e38c652964e1/d/d/dd658c205838bdee7dc2dd7a064839f4.jpg",
    link: "https://shop.ducati.com/es/es/accessories/sunglasses/gafas-silverstone-unisex.html"
    },
    {
    nombre: "Gafas-Assen",
    descripcion: "Este accesorio para sol combina la tecnología de Carrera con el carácter distintivo de la icónica marca legendaria Ducati. ",
    precio: "178,00 €",
    imagen: "https://shop.ducati.com/media/catalog/product/cache/23cd926b895fc55bd69b2ffdf40a769d/d/7/d7f7e32adbe5ca0c30cbad4e921b971d.jpg",
    link: "https://shop.ducati.com/es/es/accessories/sunglasses/gafas-assen.html"
    },
];

// Llenar catálogo en pantalla
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('catalogo-container');
  productos.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
      <a href="${prod.link}" target="_blank">
        <img src="${prod.imagen}" alt="${prod.nombre}">
      </a>
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <p><strong>${prod.precio}</strong></p>
      <button onclick="agregarAlCarrito('${prod.nombre}')">Agregar al carrito</button>
    `;
    container.appendChild(div);
  });

  actualizarIconoCarrito();
});

// Carrito con localStorage
function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarIconoCarrito();
}

function agregarAlCarrito(nombreProducto) {
  const producto = productos.find(p => p.nombre === nombreProducto);
  if (producto) {
    const carrito = getCarrito(); 
    carrito.push(producto);
    guardarCarrito(carrito);
  }
}

function actualizarIconoCarrito() {
  const carrito = getCarrito();
  const countElem = document.getElementById("cart-count");
  if (countElem) {
    countElem.textContent = carrito.length;
  }
}
