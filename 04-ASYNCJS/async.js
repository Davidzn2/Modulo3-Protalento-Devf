// setTimeout(function(){
//     console.log('Soy Asincrono')
// },5000)

// function saludar(name){
//     console.log('holaa', name)
// }
// function procesarData(callback){
//     console.log('Voy a setear el nombre')
//     let name = 'David'
//     callback(name)
// }
// procesarData(saludar)


// console.log('2 y 3 van a cola de ejecucion')
// console.log(1)
// setTimeout(function(){
//     return console.log(2)
// }, 3000)
// setTimeout(function(){
//     return console.log(3)
// }, 2000)
// console.log(4)

console.log(1)
setTimeout(function(){
    return console.log(2)
},2000)
for(let i = 0; i < 999; i ++){
    console.log(i)
}
console.log(3)