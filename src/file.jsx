import { useState } from "react";
export default function from(){
    const[nb1,setnb1]=useState("")
    const [nb2,setnb2]= useState("")
    const[somme,setsomme]=useState("")
    function calculer(e){
      e.preventDefault()
      setsomme(Number(nb1)+Number(nb2));
    }
    return(
        <>
         <form onSubmit={calculer}>
            <input type="number" onKeyUp={(e)=>setnb1(e.target.value)} />
            <input type="number" onKeyUp={(e)=>setnb2(e.target.value)} />
            <button>calculer</button>
        </form>
        <p>{somme}</p>
        </>
    )
   

}