import { usestate } from "react"
export default function Form(){
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = usestate("")
    const [txt, settxt] = useState("")
    function afficher(e){
        e.preventDefault ()
        settxt(`${nom} ${prenom}`)
    }
    
    return (
        <>
        <form onSubmit={afficher}>
            <input type="text" onKeyUp={(e)=>setNom(e.target.value)} />
            <input type="text" onKeyUp={(e)=>setPrenom(e.target.value)} />
            <button>envoyer</button>
        </form>
        <p>{txt}</p>
        </>
    )
}
