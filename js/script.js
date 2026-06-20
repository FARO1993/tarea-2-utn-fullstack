const formulario = document.querySelector('#form-registro');
const inputNombre = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edad');
const mensaje = document.querySelector('#mensaje');
const EDAD_MINIMA = 18;

/**
 * Valida los datos del formulario y muestra un mensaje
 * dinámico según si la persona es mayor o no.
 * @param {Event} event - Evento de envío del formulario
 */
function validarRegistro(event) {
  event.preventDefault();

  const nombre = inputNombre.value.trim();
  const edad = Number(inputEdad.value);
  const esMayorDeEdad = edad >= EDAD_MINIMA;

  if (esMayorDeEdad) {
    mensaje.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento.`;
    mensaje.classList.add('positivo');
    mensaje.classList.remove('negativo');
  } else {
    mensaje.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`;
    mensaje.classList.add('negativo');
    mensaje.classList.remove('positivo');
  }

  mensaje.classList.add('visible');
}

formulario.addEventListener('submit', validarRegistro);