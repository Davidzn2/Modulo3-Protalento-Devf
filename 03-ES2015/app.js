function suma(x, y) {
    return x + y
}

console.log(suma(9, 8))

let resta = (x, y) => x - y

console.log(resta(9, 2))

// [1, 2, 3, 5].reduce((prev, next) =>  prev + next )


function reverseString(string){
    return string.split("").reverse().join("");
}
console.log(reverseString('iluminati'))

function countParams(...arguments){
    console.log(arguments.length)
    console.log(arguments[0])
}

countParams('ja','je', 'ji', 'jo','ju')