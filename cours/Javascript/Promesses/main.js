const p =new Promise((resolve, reject) => {
    let test = true
    setTimeout(()=> {
        if (test) {
            resolve({data : "les données envoyées par la promise", message : "ok "})
        } else {
            reject({message : "Message d'erreur en cas d'échec de la promise"})
        }
    }, 5000)
})

//Flux d'execution

/* p.then((response)=> {
result.innerHTML = response.data
}).catch(err => {
    result.innerHTML = err.message
}) */

const result = document.querySelector(".result")
result.innerHTML= "En cours d'execution"

const get_promise_async = async () => {
    // pour récupérer le rejet on peut utiliser un try catch
    try {
        const resultat = await p 
        console.log(resultat)
        result.innerHTML = resultat.data
    } catch(ex) {
console.log(ex)
result.innerHTML = ex.message
    }
}

get_promise_async()