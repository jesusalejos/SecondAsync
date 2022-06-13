// function sum(num1,num2){
//     return num1 + num2;
// }

// function calc(num1,num2,callback) {
//     return callback(num1,num2);
// }

// console.log(calc(2,2,sum));

// function decirNombre(nombre){
//     console.log(`Tu nombre aparecerá en 3 segundos...`)
//     setTimeout (function(){
//         console.log(`${nombre}`)
//     },3000)
// }

// function proof(callback){
//     let x = prompt("nombre");
//     callback(x);
// }


function proof(callback){
    let x = prompt("nombre");
    console.log(`Tu nombre aparecerá en 3 segundos...`)    
    setTimeout (function(){
         callback(x);        
        },3000)
    
}

function decirNombre(nombre){
    
    console.log(`${nombre}`)
}

proof(decirNombre);

// function printDate(dateNow) {
//     console.log(dateNow);
// }

// function date(callback) {
//     console.log(new Date);
//     setTimeout(function(){
//         let date = new Date;
//         callback(date);
//     },3000)
// }



// date(printDate);