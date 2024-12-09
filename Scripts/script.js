// var nombre = "Steivin";
// let edad = 23;
// const PI = 3.14159;

// function saludar() {
//     console.log("Hola " + nombre + " tienes " + edad + " años ");
// }

// saludar(nombre, edad)

let nombre = "Steivin";
let edad = 23;
let pais = "Colombia";

function descripcion() {
    console.log("Hola me llamo ", nombre, "tengo", edad, "años", "y vivo en", pais)
}

descripcion(nombre, edad, pais)

let num = parseInt(prompt("ingrese un numero"));
if (num % 2 === 0) {
    console.log("El numero es par")
} else {
    console.log("el numero es impar")
}

for (let index = 1; index <= 20; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
    } else if (index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(index);
    }
}

let frutas =["manzana", "mango", "pera", "uva", "kiwi"];
frutas.push("naranja")

for (let fruta of frutas){
    console.log(fruta);
}

let sumar = (a, b) => a + b
let numeros = [2, 3, 5, 4, 3]
let promedio = (array) => {
    let suma = 0
    for (const numero of array){
        suma += numero
    }
    return suma / array.length
}

console.log(sumar(3, 5));
console.log(promedio(numeros));

let persona = {
    nombre: "Yisus",
    edad: 30,
    profesion: "Ingeniero",
    presentarse: function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.profesion}.`;
    }
};

console.log(persona.presentarse());