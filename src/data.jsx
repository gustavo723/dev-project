import data from "./MOCK_DATA.json"
export default function Comp1 () {
  return (
    <table>    
        <thead>
            <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>gender</th>
                <th>ip_address</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((p,i)=>{
                    return(
                       <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.first_name}</td>
                            <td>{p.last_name}</td>
                            <td>{p.email}</td>
                            <td>{p.gender}</td>
                            <td>{p.ip_address}</td>
                       </tr>   
                    )
                })
            }
        </tbody> 
        </table>
    
  )
}
