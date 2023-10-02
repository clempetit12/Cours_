const boutonComponent = (cequejeveuxrecup) => {
    //?? sil n'y a aps de texte derriere la valuer par defaut est titi
    let textBouton = cequejeveuxrecup.textBouton?? 'titi'
return (
    <>
    <button>{textBouton}</button>
    </>
);
}

export default boutonComponent