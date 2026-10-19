import { useState } from "react";

export default function Form() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [ville, setville] = useState("");
  const [message, setmessage] = useState("");
  const [genre, setgenre] = useState("");
  const [lang, setlang] = useState([]);
  const [txt, settxt] = useState("");

  function afficher(e) {
    e.preventDefault();
    settxt(
      `Bonjour ${nom} ${prenom}, votre genre est ${genre} votre ville est ${ville}`
    );
  }

  return (
    <>
      <form onSubmit={afficher}>
        <input
          type="text"
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => setPrenom(e.target.value)}
        />
        <select onChange={(e) => setville(e.target.value)}>
          <option value="">---</option>
          <option value="Laayoune">Laayoune</option>
          <option value="Agadir">Agadir</option>
          <option value="Fes">Fes</option>
        </select>
        <textarea
          onChange={(e) => setmessage(e.target.value)}
          name=""
          id=""
        ></textarea>
        <input
          type="radio"
          name="genre"
          value="Female"
          onChange={(e) => setgenre(e.target.value)}
        />
        <input
          type="radio"
          name="genre"
          value="male"
          onChange={(e) => setgenre(e.target.value)}
        />

        <input type="checkbox" name="lang" value="FR" />
        <input type="checkbox" name="lang" value="AR" />
        <input type="checkbox" name="lang" value="ENG" />

        <button type="submit">envoyer</button>
      </form>

      <p>{txt}</p>
    </>
  );
}