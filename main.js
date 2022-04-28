const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Retorno da API : ${JSON.stringify(data)}`)
            return data
        })
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))        
}

getUsers()