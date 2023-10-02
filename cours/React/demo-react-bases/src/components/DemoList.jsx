const DemoList = () => {

    const mesPrenoms = ["Jonh", "Albert", "Rose" ]
    console.table(mesPrenoms);
    
    return (
        <>
        <h1 style={{backgroundColor: "red"}}>Demo Listing component </h1>
        <hr />
        <ul>
            {mesPrenoms.map((prenom,i) => <li key={i}>{prenom}</li>)}
            {mesPrenoms.filter(word => word.length > 4)}
        </ul>
        </>
    )
}

export default DemoList