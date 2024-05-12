// Hacer referencias a los elementos
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensagem');
const form = document.querySelector('.formcontato__form');

//validar si un elemento esta vacio 
function validarElementoVacio(elemento) {
    if (elemento.value === '') {
        return true;
    }
}

// funcion que valida si un campo es mas largo del permitido
function validarLongitudElemento(elemento, maxLength) {
    if (elemento.value.length > maxLength) {
        return true;
    }
}

// funcion que valida el correo electronico
function validarEmail(elemento) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; // Expresion regular que usa para evaluar el formato del correo
    return !expReg.test(elemento.value); // Evalua si el correo cumple con la expresion regular

}

// funcion que deja los elementos vacios cuando el formulario se envia
function resetearElementos() {
    nombre.value = '';
    email.value = '';
    asunto.value = '';
    mensaje.value = '';
}

// funcion que valida y envia el mensaje
form.addEventListener('submit', (e) => {
    console.log('entro');
    e.preventDefault(); // evita que se recargue la pagina

    if (validarElementoVacio(email) || validarElementoVacio(nombre) || validarElementoVacio(asunto) || validarElementoVacio(mensaje)) {
        alert('Todos los campos son obligatorios, no deben estar vacios');
    } else if (validarEmail(email)) {
        alert('Correo en formato incorrecto');
    } else if (validarLongitudElemento(nombre, 50) || validarLongitudElemento(asunto, 50)) {
        alert(`El nombre y el asunto deben tener maximo 50 caracteres`);
    } else if (validarLongitudElemento(mensaje, 300)) {
        alert(`El mensaje debe tener maximo 300 caracteres`);
    } else {
        alert('Mensaje enviado exitosamente');
        resetearElementos();
    }
})