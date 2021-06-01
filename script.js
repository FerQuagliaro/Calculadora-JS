
//Variables globales
var memory = "0", current = "0", operation = 0;
const maxChar = 10;
//obtener el display del DOM
const display = document.querySelector('.display p');

//Añadir el valor a la pantalla
function addValue(dig){

if ((eval(current) === 0) && (current.indexOf(".") === -1)) {
        current = dig;
        } else {
            current += dig;
        }

     display.innerHTML = current;
}
// Añadir decimal
function addDecimal() {
  if (current.length === 0) {
      current = "0.";
  } else
    if (current.indexOf(".") === -1){
      current += ".";
    }

  display.innerHTML = current;
}

// -
function plusMinus() {
   if(current.indexOf("-") === 0) {
      current = current.substring(1);
    } else {
      current = "-" + current;
    }
    if (eval(current) === 0 && current.indexOf(".") === -1) {
      current = "0";
    }

  display.innerHTML = current;
}

//Borrar todod
function allClear() {

  current = "0";
  Operation = 0;
  memory = "0";

 display.innerHTML = current;
}

// añadir operacion
function addOperation(op) {
  if (operation !== 0) {
    calculate();
  }

  if (op.indexOf("*") > -1) { operation = 1};
  if (op.indexOf("/") > -1) { operation = 2};
  if (op.indexOf("+") > -1) { operation = 3};
  if (op.indexOf("-") > -1) { operation = 4};

  memory = current; //guardar la variable en la memoria
  current = ""; //

  display.innerHTML = current;

}

function percent(){
 // si quiere calcular el porcentaje
    if(eval(memory) === 0){
        current = current / 100;
    } else {
       current = (current / 100) * memory;
    }

 display.innerHTML = current;
}

// Funcion calcular
function calculate() {
  if (operation === 1) {
    current = eval(memory) * eval(current);
  }
  if (operation === 2) {
  if (eval(current) !== 0) {
      current = eval(memory) / eval(current);
    } else {
      current = "Error";
    }
  }
  if (operation === 3) {
    current = eval(memory) + eval(current);
  }
  if (operation === 4) {
    current = eval(memory) - eval(current);
  }

//Resetear memoria y current
  current = current + "";
  operation = 0;
  memory = "0";


  display.innerHTML = current;


}
