import React from 'react'
import { fetchBooks } from '../../Service/fakestoreCategories';
import Styles from './Book.module.css'

function Book() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
      let data = localStorage.getItem("books"); 
      let fiveMinutesAgo = null;
      let storedDate = null;
      const timeString = localStorage.getItem("bookTime");
  
      if (timeString) {
          storedDate = new Date(timeString);
          
          const currentDate = new Date();
          fiveMinutesAgo = new Date(currentDate.getTime() - 5 * 60 * 1000); 
      }
  
      if (data && timeString && storedDate && storedDate.getTime() >= fiveMinutesAgo.getTime()) {
          setData(JSON.parse(data)); 
      } else {


        fetchBooks()
              .then(res => res.json())
              .then(res => {
                  setData(res); 
                  localStorage.setItem('books', JSON.stringify(res)); 
                  localStorage.setItem('bookTime', new Date().toISOString()); 
              });
      }
  }, []);
  
  return (<>
      <h1>Books</h1>
      <div className={Styles.container}>

          {data.map((item) => (
              <div key={item.id} className={Styles.item}>
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                  <img src={item.image} alt={item.title} />
              </div>
          ))}
      </div>
  </>)
}

export default Book