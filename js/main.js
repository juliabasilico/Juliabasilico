console.log(document);

setTimeout(() => {
  alert("Solo por hoy! 10% off en todos los productos.");
}, 3000);



const carrito = []
 const articulos= [
  {id: 1, nombre: "v60", precio: 7700},
  {id: 2, nombre: "prensa francesa", precio: 9070},
  {id: 3, nombre: "tamper", precio: 4300},
  {id: 4, nombre: "moka", precio: 13300},
  {id: 5, nombre: "jarrito pitcher", precio: 5090},
  {id: 6, nombre: "taza café ", precio: 2900},
 ];


 const ListaDeArticulos = document.getElementById("productos_tienda");

 for (const articulo of articulos) {
  console.log(articulo);
 }

function agregarAlCarrito(id) {
  console.log(`producto id: ${id}`);
  
  
  const articulo = articulos.find((articulo) => articulo.id === id);
  if (articulo) {
    carrito.push(articulo);
  }
  console.log(carrito);
  }
  

document.addEventListener('DOMContentLoaded', function() {
  let productos = document.getElementsByClassName("producto"); 
  

  console.log(productos);
  console.log(productos[0].innerHTML);
  console.log(productos[1].innerHTML);
  console.log(productos[2].innerHTML);
  console.log(productos[3].innerHTML);
  console.log(productos[4].innerHTML);
  console.log(productos[5].innerHTML);
  
 /* Document.getelementbyid("nombre").value = "julia"; */



const productListContainer = document.getElementById("productos_tienda"); 

articulos.forEach((articulo)=> {
  const productElement =document.createElement("div");
  productElement.innerHTML= `
  <p>${articulo.nombre} - $${articulo.precio} </p>
  <button onclick="agregarAlCarrito(${articulo.id})"> Agregar al carrito </button>
`;
productListContainer.appendChild(productElement);
});
});



const botonVerCarrito = document.getElementById("verCarrito");

botonVerCarrito.addEventListener("click", function() {
  // Comprueba si el carrito está vacío
  if (carrito.length === 0) {
    alert("El carrito está vacío");
  } else {
    
    let mensaje = "Productos en el carrito:\n";
    carrito.forEach((producto) => {
      mensaje += `${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
    alert("con tu compra online te llevas de regalo una muestra de nuestros cafés");

const cafes = [
  { id: 1, nombre: 'Etiopía', Acidez: 'alta' },
  { id: 2, nombre: 'Brasil', Acidez: 'baja' },
  { id: 3, nombre: 'Colombia', Acidez: 'alta' },
  { id: 4, nombre: 'Ecuador', Acidez: 'media' },
  { id: 5, nombre: 'Nueva Zelanda', Acidez: 'media' },
];

function filtrarCafesPorAcidez(acidez) {
  const acidezMin = acidez.toLowerCase();
  const cafesFiltrados = cafes.filter(cafe => cafe.Acidez.toLowerCase() === acidezMin);
  
  if (cafesFiltrados.length > 0) {
    const nombresCafesFiltrados = cafesFiltrados.map(cafe => cafe.nombre).join(', ');
    alert(`Cafés con acidez ${acidez}: ${nombresCafesFiltrados}`);
  } else {
    alert(`No se encontraron cafés con acidez ${acidez}.`);
  }
}

const acidezDeseada = prompt('Ingresa el nivel de acidez que deseas filtrar (alta, baja, media):').trim();
filtrarCafesPorAcidez(acidezDeseada);

const elegir = prompt("¿Cuál eliges?");
  }
});


const botonVaciarCarrito = document.getElementById("vaciarCarrito");


botonVaciarCarrito.addEventListener("click", function() {
 
  carrito.length = 0;
  
  alert("El carrito ha sido vaciado");
});

localStorage.setItem("saludo", "Hola!")

const saludo = localStorage.getItem("saludo");

setTimeout(() => {
  console.log(saludo);
}, 3000);

const articulosJSON = JSON.stringify (articulos);

console.log(articulos);
/*

const contenedor= document.querySelector('#listado');

fetch('/articulos.json')
.then (Respuesta => Respuesta.json())
.then (data => {
  data.forEach(item=> {
  const li = document.createElement('li');
  li.innerHTML = `
  <h4>
    ${item.nombre}
  </h4>
  <p>
    ${item.precio}
  </p>`
  contenedor.appendChild(li);
});
})




const guardarArticulos = (articulos, articulos => {
  localStorage.setItem(articulos,articulos);
})

guardarArticulos('articulos', json.stringify(articulos));
for (const articulo of articulos) {
  guardarArticulos(articulo.nombre, JSON.stringify(producto));
 }
*/
const contactForm = document.querySelector('#contact_form');
const userName = document.querySelector('#user_name');
const userSurname = document.querySelector('#user_surname');
const userEmail = document.querySelector('#user_email');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(userName.value);
  console.log(userSurname.value);
  console.log(userEmail.value);
  const body = {
    service_id: 'service_ye3pisq',
    template_id: 'template_0el7m87',
    user_id: 'alyUfWBgokFgLIDZH',
    template_params: {
      'to_name': userName.value,
      'from_name': userEmail.value,
    }
  };
  await sendEmail(body); 
});




const sendEmail = async (body) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    console.log(response); 
  } catch (error) {
    console.error(error);
    
  }
};


