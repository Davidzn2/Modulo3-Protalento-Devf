const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10)
    setTimeout(
        () => {
            if (number > 5) {
                resolve(number)
            }
            else {
                reject(new Error(`${number} es menor que 5`))
            }
        }
    )
})
promise
    .then(number => console.log(number))
    .catch(error => console.log(error))
