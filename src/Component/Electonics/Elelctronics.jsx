import React from 'react'
import { fetchElectricity } from '../../Service/fakestoreCategories'
import Styles from "./Elelctronics.module.css"
function Elelctronics() {

const [data,setData]= React.useState([])

React.useEffect(() => {
    fetchElectricity()
     .then(res => res.json()) 
   .then(res => setData(res))
}, [])
  return (<>
    <h1>Electronics</h1>
    <div className={Styles.container}>
      
        {data.map((item) => (
            <div key={item.id} className={Styles.item}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
            </div>
        ))}
    </div>
    </>)
}

export default Elelctronics