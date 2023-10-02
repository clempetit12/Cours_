/* n composant React : une fonctionJvascript exportée par défaut dans un fichier.  */

//syntaxe à l'ancienne la fonction doit avoir le nom du fichier (this accède le window)
 function FirstComponent () {
    return(
        <div>
            <h1>Firstcomponent</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni esse assumenda eum? Beatae maxime provident molestias eos odio explicabo nostrum dolorum ex, placeat eum odit quibusdam deserunt et itaque?</p>
        </div>
        )
}

// syntaxe constante (fonction fléchee) (this accède à ce qui a fait appel à la fonction ) : à privilégier 
const FirstComponentA = () => {
    
}

export default FirstComponent

