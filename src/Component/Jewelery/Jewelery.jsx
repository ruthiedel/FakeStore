import React from 'react'
import Styles from './Jewelery.module.css'
import { fetchJewelery } from '../../Service/fakestoreCategories'


function Jewelery() {
    const [jewelery, setJewelery] = React.useState([])
    React.useEffect(() => {
        fetchJewelery() 
        .then(res => res.json()) 
       .then(res => setJewelery(res))
       .catch(err => console.log(err))
    }, [])
  return (
    <div className={Styles.jewelerycontainer}>

      {jewelery.map((item) => (
        <div key={item.id} className={Styles.jeweleryitem}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  )
}

export default Jewelery