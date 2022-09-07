const axios = require('axios').default;
const request = require('request')


const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

// const listAuthors = () =>{
//     return request.get(URI, (error, response, body)=>{
//         if (response.statusCode == 200){
//             const authors = JSON.parse(body)
//             console.log(authors)
//         } else {
//             console.log(response.statusCode, response.statusMessage)
//         }
//     })
// }
// listAuthors()


// COMO CREAR UNA PROMESA
function getAuthors(urlToResolve){
    // AQUI CREAMOS LA PROMESA
    return new Promise((resolve, reject)=>{
        request.get(urlToResolve, (error, response, body)=>{
            if (response.statusCode == 200){
                const authors = JSON.parse(body)
                resolve(authors)
            } else {
                reject(response.statusCode, response.statusMessage)
            }
        })
    })
}
// AQUI LLAMAMOS LA PROMESA QUE CREAMOS
getAuthors('https://rickandmortyapi.com/api/character')
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))


// LLAMAMOS UNA PROMESA QUE VIENE DE UNA LIBRERIA EXTERNA (AXIOS)
// axios.get(URI)
//     .then((res)=> console.log(res.data))
//     .catch((error)=> console.log(error))