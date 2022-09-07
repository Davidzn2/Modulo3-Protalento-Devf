function getAlumnis() {
    fetch('https://crudcrud.com/api/612887ede4ee49398b5ed75643047dc0/talentos')
        .then(response => response.json())
        .then(data => {
            let alumnis = data
            console.log(alumnis)
            let alumni_container = document.getElementById('alumni_list')
            alumni_container.innerHTML = `
                <ul>
                    ${alumnis.map((alumni) => {
                return `<li>
                            Nombre: ${alumni.nombre}, Edad: ${alumni.edad}
                        </li> 
                        <button onclick="deleteAlumni('${alumni._id}')">
                            Delete
                        </button>`
            })
                }
                </ul>
            `
        })

}

function createAlumni() {
    let nombre_alumni = document.getElementById('alumno_nombre').value
    let edad_alumni = document.getElementById('alumno_edad').value
    let nacionalidad_alumni = document.getElementById('alumno_nacionalidad').value

    fetch('https://crudcrud.com/api/612887ede4ee49398b5ed75643047dc0/talentos', {
        method: "POST",
        body: JSON.stringify({
            "nombre": nombre_alumni,
            "edad": edad_alumni,
            "nacionalidad": nacionalidad_alumni
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
}

function deleteAlumni(toDelete) {
    fetch(`https://crudcrud.com/api/612887ede4ee49398b5ed75643047dc0/talentos/${toDelete}`, {
        method: "DELETE"
    })
        // .then(response => response.json())
        // .then(json => console.log(json))
        .then(() => getAlumnis())
        .catch(error => console.log(error))
}

function runAlumni() {
    getAlumnis()
    createAlumni()
}
getAlumnis()