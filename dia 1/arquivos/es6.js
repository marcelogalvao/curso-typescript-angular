
// let, const


// function hello(str){
//     let nome = str;
//     const constante = "valor 1";

//     nome = "valor 2";

//     return nome;
// }

// console.log( hello('meu nome') );


// string interpolation
// function hello(str) {
//     // const texto = 'Oi, ' + str;
//     const texto = `Oi, ${str}!`;
//     return texto;
// }

// console.log( hello('Fulano') );


//  arrow function
// var sayHello = name => `Hello, ${name}!`;
// // function sayHello(name){
// //     return `Hello, ${name}!`;
// // }

// console.log( sayHello('José') );


// var sayHello = name => {
//     let pre = 'Hello ';
//     return pre + name;
// }
// // function sayHello(name){
// //     let pre = 'Hello ';
// //     return pre + name;
// // }

// console.log( sayHello('José 2') );


var sayHello = (name, idade) => {
    return name + ', ' + idade;
}
// function sayHello(name, idade){
//     return name + ', ' + idade;
// }

console.log( sayHello('José', 22) );
