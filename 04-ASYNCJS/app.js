function funAsincrona(callback) {
    setTimeout(function() {
        console.log('Soy asincrono')
        callback()
    }, 2000)
}
console.log('Iniciando')
funAsincrona(function() {
    console.log('Terminando')
})
