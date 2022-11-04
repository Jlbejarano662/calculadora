//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init() {
  //---------------------------variables------------------------------------
  //selecciona el elemento con el id resultado y los asigna a la variable
  var resultado = document.getElementById("resultado");
  //selecciona el elemento HTML con el id resultado y los asigna a la variable
  var reset = document.getElementById("reset");
  //selecciona el elemento HTML con el id resultado y los asigna a la variable
  var suma = document.getElementById("suma");
  //selecciona el elemento HTML con el id resta y los asigna a la variable
  var resta = document.getElementById("resta");
  //selecciona el elemento HTML con el id multiplicacion y los asigna a la variable  
  var multiplicacion = document.getElementById("multiplicacion");
  //selecciona el elemento HTML con el id division y los asigna a la variable  
  var division = document.getElementById("division");
  //selecciona el elemento HTML con el id igual y los asigna a la variable  
  var igual = document.getElementById("igual");
  //selecciona el elemento HTML con el id uno y los asigna a la variable  
  var uno = document.getElementById("uno");
  //selecciona el elemento HTML con el id resta y los asigna a la variable  
  var dos = document.getElementById("dos");
  //selecciona el elemento HTML con el id tres y los asigna a la variable  
  var tres = document.getElementById("tres");
  //selecciona el elemento HTML con el id cuatro y los asigna a la variable  
  var cuatro = document.getElementById("cuatro");
  //selecciona el elemento HTML con el id cinco y los asigna a la variable
  var cinco = document.getElementById("cinco");
  //selecciona el elemento HTML con el id seis y los asigna a la variable
  var seis = document.getElementById("seis");
  //selecciona el elemento HTML con el id siete y los asigna a la variable
  var siete = document.getElementById("siete");
  //selecciona el elemento HTML con el id ocho y los asigna a la variable
  var ocho = document.getElementById("ocho");
  //selecciona el elemento HTML con el id nueve y los asigna a la variable
  var nueve = document.getElementById("nueve");
  //selecciona el elemento HTML con el id cero y los asigna a la variable
  var cero = document.getElementById("cero");
}

//-----------------Eventos de click a los botones de número--------------
//Evento click que añade el valor 1 a la pantalla (variable resultado)
uno.onclick = function () {
  resultado.textContent += "1";
};
//Evento click que añade el valor 2 a la pantalla (variable resultado)
dos.onclick = function () {
  resultado.textContent += "2";
};
//Evento click que añade el valor 3 a la pantalla (variable resultado)
tres.onclick = function () {
  resultado.textContent += "3";
};
//Evento click que añade el valor 4 a la pantalla (variable resultado)
cuatro.onclick = function () {
  resultado.textContent += "4";
};
//Evento click que añade el valor 5 a la pantalla (variable resultado)
cinco.onclick = function () {
  resultado.textContent += "5";
};
//Evento click que añade el valor 6 a la pantalla (variable resultado)
seis.onclick = function () {
  resultado.textContent +="6";
};
//Evento click que añade el valor 7 a la pantalla (variable resultado)
siete.onclick = function () {
  resultado.textContent += "7";
};
//Evento click que añade el valor 8 a la pantalla (variable resultado)
ocho.onclick = function () {
  resultado.textContent +="8";
};
//Evento click que añade el valor 9 a la pantalla (variable resultado)
nueve.onclick = function () {
  resultado.textContent += "9";
};
//Evento click que añade el valor 0 a la pantalla (variable resultado)
cero.onclick = function () {
  resultado.textContent += "0";
};
//Evento de click al botón de limpiar que ejecuta la función limpiar
reset.onclick = function () {
  resetear();
};
//------Eventos de click a los botones de operaciones--------
// Evento click que añade la función de suma
suma.onclick = function () {
  //Guarda el valor de primer número tecleado 
  operandoa = resultado.textContent;
  //Establece que la operación es de suma
  operacion = "+";
  //Limpia la pantalla
  limpiar();
};
//Evento click que añade la función de resta
resta.onclick = function () {
  //Guarda el valor de primer número tecleado 
  operandoa = resultado.textContent;
  //Establece que la operación es de resta
  operacion = "-";
  //Limpia la pantalla
  limpiar();
};
//Evento click que añade la función de multiplicación
multiplicacion.onclick = function () {
  //Guarda el valor de primer número tecleado 
  operandoa = resultado.textContent;
  //Establece que la operación es de multiplicación
  operacion = "*";
  //Limpia la pantalla
  limpiar();
};
//Evento click que añade la función de divisón
division.onclick = function () {
  //Guarda el valor de primer número tecleado 
  operandoa = resultado.textContent;
  //Establece que la operación es de divisón
  operacion = "/";
  //Limpia la pantalla
  limpiar();
};
//Evento click al botón igual  
igual.onclick = function () {
  //Guarda el valor del segundo número tecleado
  operandob = resultado.textContent;
  //Ejecuta la función resolver.
  resolver();
};

//Limpia la pantalla cada que presionamos una operación
function limpiar() {
  resultado.textContent = "";
}
//Limpia y deja en 0 la calculadora
function resetear() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

//Determina la operación a realizar y la ejecuta
function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  //Deja en ceros la calculadora
  resetear();
  //muestra el resultado en la pantalla
  resultado.textContent = res;
}

//Evento para modo día/noche
document.querySelector('#switch').addEventListener('click', function(){
  //Añade/elimina la clase 'dark' del modo día/noche
  document.querySelector('table').classList.toggle('dark');
  //Cambia el color de los iconos día/noche
  var desactivados = document.querySelectorAll('svg')
  for(var i=0; i<desactivados.length; i++) {
    desactivados[i].classList.toggle('desactivado')
  }
}
)
