const monPrenom = "Clémence";
const maClasse = "text-danger";
const age = 21;


const DemovarInject = () => {
  console.log("hello");
  return (
    <>
      {age >= 18 && (
        <>
          <p> Je suis vrai</p>
          <p>Je suis majeur</p>
        </>
      )}
      <p className={maClasse + " bloc"}>
        Mon prénom est <b>{monPrenom}</b>
      </p>
      <p className={age >= 18 ? "text-danger" : "text-success"}>
        Il est <b>{age >= 18 ? "majeur" : "mineur"}</b>
      </p>
    </>
  );
};

export default DemovarInject;
