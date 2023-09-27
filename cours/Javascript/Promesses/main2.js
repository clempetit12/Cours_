//URL de l'API que nous allons interroger
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1"

//Utilisation du fetch

fetch(apiUrl)
    .then(response => {
        //Vérifier si la response est ok (HTTP 200) site http.cats
        if (!response.ok){
            throw new Error(`La requête a échouée avec un status ${response.status} `)
        }
// Parser la response en JSON
return response.json()
    }).then (data => {
        //Traitement des données de la reponse
        console.log("Données reçues : ", data);
    }).catch(error => {
        //Gestion des erreurs
       console.error("une erreur :", error)

    })
