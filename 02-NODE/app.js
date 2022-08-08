let cowsay = require("cowsay");


function screamingCow(word, eyes, tongue){
    return (
        cowsay.say({
            text: word.toUpperCase(),
            e: eyes,
            T: tongue
        })
    )
}

console.log(screamingCow('Holaaa', 'OO', 'U'))
console.log(screamingCow('Callate!', '--', 'V'))
console.log(screamingCow('Perdon', 'XX', ''))


function suma(x,y){
    return (x + y)
}

console.log(suma(8,9))
console.log(suma(7,11))
console.log(suma(12,-25))