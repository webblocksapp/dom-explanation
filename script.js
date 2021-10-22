/**
 * Paradigma de programación orientada a objetos (POO)
 *
 * - ¿Qué es la POO?
 * Es un paradigma dónde las características de un elemento
 * o fenómeno de la vida real son representados en un
 * algoritmo mediante un objeto que agrupa
 * propiedades y acciones.
 *
 * Ejemplo 1:
 * - Elemento u objeto: Persona
 * -- Propiedades o características
 *    --> primer nombre     | firstName
 *    --> segundo nombre    | secondName
 *    --> apellido          | lastName
 *    --> edad              | age
 *    --> número de tel.    | cellphoneNumber
 * -- Acciones o Métodos (también pueden haber eventos)
 *    --> saludar           | greet
 *    --> correr            | run
 *    --> leer              | read
 *    --> dormir            | sleep
 *    --> obtener dinero    | getMoney
 */

const persona1 = {
  firstName: "Pepito",
  secondName: "Felipe",
  lastName: "Pérez",
  age: 15,
  cellphoneNumber: "+57 311 222 32 32",
  greet: function () {
    console.log("Hola");
  },
  run: function () {
    console.log("Estoy corriendo");
  },
  read: function () {
    console.log("Estoy leyendo");
  },
  sleep: function () {
    console.log("Estoy durmiendo");
  },
  getMoney: function () {
    return 1000;
  },
};

const persona2 = {
  firstName: "Mayra",
  secondName: "Alejandra",
  lastName: "Diavanera",
  age: 20,
  cellphoneNumber: "+57 311 222 32 32",
  greet: function () {
    console.log("Hola");
  },
  run: function () {
    console.log("Estoy corriendo");
  },
  read: function () {
    console.log("Estoy leyendo");
  },
  sleep: function () {
    console.log("Estoy durmiendo");
  },
  getMoney: function () {
    return 2000;
  },
};

//Llamado de las propiedades de un objeto
console.log(persona2.firstName + " " + persona2.lastName);

//Llamado de la acción de un objeto
persona2.greet();

//Solicitar un valor a la persona 2
const dinero = persona2.getMoney();
console.log("El dinero de " + persona2.firstName + " es de " + dinero);

/**
 * El lenguaje de javascript tiene un objeto llamado
 * console
 */
console.log("Hola yo soy una acción llamada log");
console.error("Hola, yo soy una acción o método llamado error");
console.warn("Hola, yo soy un método llamado warning");

/**
 * Otro objeto importante de javascript es el objeto llamado
 * document.
 *
 * Este objeto nos permite acceder al html desde
 * javascript.
 */

const element1 = document.getElementById("element-1");
element1.innerText = "Cambiaré mi texto";
element1.style.color = "red";
element1.style.border = "1px solid black";
element1.style.background = "#000";
console.log(element1);
