import React from 'react'
import { fetchElectricity } from '../../Service/fakestoreCategories'
import Styles from "./Elelctronics.module.css"
function Elelctronics() {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        let data = localStorage.getItem("Electronics"); 
        let fiveMinutesAgo = null;
        let storedDate = null;
        const timeString = localStorage.getItem("Time");
    
        if (timeString) {
            storedDate = new Date(timeString);
            
            const currentDate = new Date();
            fiveMinutesAgo = new Date(currentDate.getTime() - 5 * 60 * 1000); 
        }
    
        if (data && timeString && storedDate && storedDate.getTime() >= fiveMinutesAgo.getTime()) {
            setData(JSON.parse(data)); 
        } else {
            fetchElectricity()
                .then(res => res.json())
                .then(res => {
                    setData(res); 
                    localStorage.setItem('Electronics', JSON.stringify(res)); 
                    localStorage.setItem('Time', new Date().toISOString()); 
                });
        }
    }, []);
    
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