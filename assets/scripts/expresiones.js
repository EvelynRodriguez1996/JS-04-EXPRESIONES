// console.log("Estoy vivo");

/*
Operador

Un elemento que nos permite realizar una operación entre dos o mas elementos.

- Operadores aritmetico (+, -, *, /)
- operadores de asignación (= / asignación)
- Operadores de cadenas (tolowerCase, toUpperCase, trim, toString, concat)
- Operadores logicos (&&, ||, !)
- Operadores de comparación (<, >, <=, >=, == igualdad, === igualdad estricta)


*/

/*Operadores aritmeticos

Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas,

    suma (+)
    resta (-)
    multiplicacion (*)
    division (/)
    residuo o modulo (%)
    exponenciacion (**)
    incremento (++)
    decremento (--)

*/

let numero01=10;
let numero02=2;
let numero03="5";

//operaciones
suma=numero01+numero02; //12
resta=numero01-numero02; //8
multiplicacion=numero01*numero02;
division= numero01/numero02;
residuo=numero01%numero02;
exponenciacion= numero01 ** numero02;//es obsoleto porque hay un metodo para esto

//NOTA: cuando usamos incrementos el valor se reasigna (suma y reasigna en la misma operación)
numero01++;// 11, forma extensa: numero01 = numero01 + 1;
numero02--;// 1

numero01+=10; //se incrementara de 10 en 10, suma y reasigna

//ejemplo
//operacionCompleja= 10+5 / 2(5-6);

//impresiones de pantalla
console.log("Suma de 10 + 2 ",suma);//1 forma de mostrar la suma
console.log("Suma de 10 + 2 ",numero01+numero02);// segunda forma
console.log("Suma de 10 + 2 ",10+2);//tercera forma

console.log("Suma de 10 - 2 ",resta);





//Suma (+): se utiliza para sumar dos numeros.
let resultado=5+3; //resultado sera 8

//Resta (-): se utiliza para restar un numero de otro.
let resultado1=10-4; //resultado sera 6

//Multiplicación (*): se utiliza para multiplicar dos numeros.
let resultado2=6*3; //resultado sera 18

//División (/): Se utiliza para dividir un numero de otro. La división por cero produce un valor especial llamado "Infinity" (infinito)
let resultado3=15/3; //resultado sera 5

//Modulo (%): Se utiliza para obtener el resto de una división entre dos numeros
let resultado4= 10%3; //resultado contendra el valor de 1

//Incremento (++): se utiliza para aumentar en 1 el valor de una variable
let numero=5;
numero++;
//ahora numero contendra el valor 6

//Decremento (--): se utiliza para disminuir en 1 el valor de la variable
let numero1=8;
numero--; //ahora el numero contendra el valor de 7


//Doble igual - igualdad abstracta
5=="5" //true ya que javascript convierte la cadena "5" a un numero antes de la comparación.

//Triple igual - igualdad estricta (Buena practica)
5==="5" //false, porque no son del mismo tipo y los tipos tambien difieren.


let gradosCelsius=prompt("Ingrese la temperatura en grados Celsius");

function conversionTemperatura (Celsius){
    let gradosFaherenheit=Celsius*9/5+32;
    return gradosFaherenheit;
}

console.log(gradosCelsius+" grados Celsius es igual a "+conversionTemperatura(gradosCelsius)+" grados Faherenheit");


/*
Operadores de comparación

operados que nos permiten compara dos datos y al hacerlo obtendremos un valor booleano (true o false)

- mayor que (>)
- menor que (<)
- mayor o igual que (>=)
- menor o igual que (<=)
- igual (==)
- estrictamente igual (===)
- no es igual (!=)
- no es estrictamente igual (!==)


Igual (==)

Sirva para comparar que dos valores sean iguales

*/

let numeroComparacion1=23;
let numeroComparacion2=13;
let numeroComparacion3=13;
let numeroComparacion4="13";

// 13 == "13" // true
// 13 === "13" //false
// 23 > 12 //true
// 23 < 12 false

if (edadAlex>=18){
    console.log("Puede ir a la pachanga");
} else {
    console.log("Te quedas en casa");
}

//dos negaciones es una afirmación
//!vamos a comer (no vamos a comer)
//! no me gusta java (si me gusta java)


/*

Operadores de asignación

Son los operadores que se utilizan para asignar un valor a una variable. Se usa el operador =

let edad = 31;
let saldo = 0;

*/

/*
Operadores logicos

Nos devuleven un resultado a partir de que se cumpla una condicion (o no) una condicion, el resultado es booleano (true o false).

    - AND &&: sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso


*/

let tengoUnCrush=true;
let miCrushMeQuiere=true;

if (tengoUnCrush&&miCrushMeQuiere){
    console.log("Estoy feliz");
} else {
    console.log("Mod triste")
}

/*

    - OR ||: sirve para determinar si dos expresiones son falsas. Si cualquiera de las afirmaciones es verdadera, todo es verdadera. Si las dos son falsas, todo es falso.

*/

if (hayChilaquilesVerdes|| hayCarneEnSuJugo){
    console.log("Evelyn desayuna chido");
} else {
    console.log("Evelyn no desayuna chido");
}

/*
NOT (!): Regresa lo contrario de lo que evaluamos

*/

if((edadEvelyn>=18 && saldoAlex!=0)|| (edadEvelyn>=18 && amigosQueInviten==true)){
    
}