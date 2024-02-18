let form = document.getElementById("formulario");

const validate = (name, asunto, message) => {
  validar = true;
  const regex = /[a-z A-Z]+$/;

  //validación del nombre
  if (regex.test(name) === false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    validar = false;
  }
  //validacion del asuento
  if (regex.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    validar = false;
  }
  //validacion del mensaje
  if (regex.test(message) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje es requerido";
    validar = false;
  }
  return validar;
};
//evento click al boton submit (enviar mensaje)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("nombre").value;
  const userAsunto = document.getElementById("asunto").value;
  const userMessage = document.getElementById("mensaje").value;

  let resultado = validate(userName, userAsunto, userMessage);
  if (resultado === true) {
    document.querySelector(".resultado").innerHTML =
      "Mensaje envuiado con éxito!!!";
  }
});
