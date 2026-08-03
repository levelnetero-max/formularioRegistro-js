// ============================================
// FORMULARIO INTERACTIVO - script.js
// ============================================

// Capturamos el botón y le agregamos el evento click
const btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", validarFormulario);

// FUNCIÓN PRINCIPAL creada por el estudiante
function validarFormulario() {

  // 1. VARIABLES: obtenemos los valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value.trim();
  const edadTexto = document.getElementById("edad").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = Number(edadTexto); // convertimos el texto a número

  const mensajeError = document.getElementById("mensajeError");
  const resultado = document.getElementById("resultado");

  // Antes de validar, limpiamos mensajes anteriores
  mensajeError.textContent = "";
  resultado.classList.add("oculto");

  // 2. VALIDACIONES con operadores de comparación y condicionales

  // Verificar que ningún campo esté vacío
  if (nombre === "" || edadTexto === "" || correo === "") {
    mensajeError.textContent = "Error: todos los campos son obligatorios.";
    return;
  }

  // Verificar que la edad sea un número válido y mayor o igual a 18
  if (isNaN(edad) || edad < 18) {
    mensajeError.textContent = "Error: debes ser mayor o igual a 18 años.";
    return;
  }

  // Verificar que el correo contenga el símbolo @
  if (!correo.includes("@")) {
    mensajeError.textContent = "Error: el correo debe contener el símbolo @.";
    return;
  }

  // 3. Si todo es válido, mostramos el resultado
  mostrarResultado(nombre, edad, correo);
}

// Segunda función: se encarga de mostrar el resultado en pantalla
function mostrarResultado(nombre, edad, correo) {
  const resultado = document.getElementById("resultado");

  document.getElementById("bienvenida").textContent = "Bienvenido " + nombre;
  document.getElementById("datoEdad").textContent = "Edad: " + edad + " años";
  document.getElementById("datoCorreo").textContent = "Correo: " + correo;
  document.getElementById("datoEstado").textContent = "Estado: Registro válido";

  // Cambiar el color de fondo de la sección de resultado
  resultado.style.backgroundColor = "#d4f5d4";

  // Mostramos la sección (estaba oculta con la clase "oculto")
  resultado.classList.remove("oculto");
}
