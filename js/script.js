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
  const edadTexto = inputEdad.value.trim();

  if (nombre === '' || edadTexto === '') {
    mensaje.textContent = '⚠️ Por favor completá tu nombre y tu edad antes de continuar.';
    mensaje.classList.add('negativo');
    mensaje.classList.remove('positivo');
    mensaje.classList.add('visible');
    return;
  }

  const edad = Number(edadTexto);

  if (isNaN(edad)) {
    mensaje.textContent = '⚠️ La edad ingresada no es válida.';
    mensaje.classList.add('negativo');
    mensaje.classList.remove('positivo');
    mensaje.classList.add('visible');
    return;
  }

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