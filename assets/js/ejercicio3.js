const suma = () => {
  //obtenemos los valores de los inputs
  const firtsValue = document.getElementById("valor1").value;
  const secondValue = document.getElementById("valor2").value;
  //suma de ambos valores
  const resultadoSuma = Number(firtsValue) + Number(secondValue);
  //se imprime el resultado
  document.querySelector(".resultado").innerHTML = resultadoSuma;
};
// se hace llamado a boton sumar
const buttonSumar = document.getElementById("btn-sumar");
//indicamos que al realiar evento click sobre boton sumar ejcute la funcion suma
buttonSumar.addEventListener("click", suma);

const resta = () => {
  //obtenemos los valores de los inputs
  const firtsValue = document.getElementById("valor1").value;
  const secondValue = document.getElementById("valor2").value;
  //resta de ambos valores
  const resultadoResta = Number(firtsValue) - Number(secondValue);
  //validamos si el resultado de la resta es menos a 0 nos muestre por pantalla 0 en el caso contrario
  // nos devuelve el numero de la resta
  if (resultadoResta < 0) {
    document.querySelector(".resultado").innerHTML = "0";
  } else document.querySelector(".resultado").innerHTML = resultadoResta;
};
// se hace llamado a boton restar
const buttonRestar = document.getElementById("btn-restar");
//indicamos que al realiar evento click sobre boton restar ejcute la funcion resta
buttonRestar.addEventListener("click", resta);
