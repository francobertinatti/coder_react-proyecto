/* eslint-disable no-template-curly-in-string */
const promesa = new Promise((resolve, reject) => {
    const aceptor = Math.round(Math.random() * 100);
    console.log(aceptor);
    if (aceptor > 50) {
        resolve({ value: "se acepta la promesa" });
    }
    reject({ value: "se rechazar la promesa" });
})

promesa.then(
    result => console.log(`se resolvio correctamente: ${result.value}`),
    error => console.log(`hubo un error: ${error.value} `)

)




// const promesa = new Promise((accept, reject) => {
//     const aceptor = Math.round(Math.random() * 100); //Valores entre 0 y 100 (entero)
//     console.log(aceptor);
//     if (aceptor > 50) {
//         accept({ value: "Se acepta la promesa" });
//     }
//     reject({ value: "Se rechaza la promesa" });
// });

// promesa.then(
//     result => console.log(`Se resolvió bien: ${result.value}`),
//     error => console.log(`Hubo un error: ${error.value}`)
// )

//Otra forma
// promesa
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));