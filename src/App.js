import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from'react-router-dom';
import  Jewelery  from './Component/Jewelery/Jewelery.jsx';
import Elelctronics from './Component/Electonics/Elelctronics.jsx';
import Home from './Component/Home/Home.jsx';
function App() {
  return (
    <div className="App">
     
     <nav style={{ 
      backgroundColor: '#333', 
      padding: '10px' 
    }}>
      <ul style={{ 
        display: 'flex', 
        listStyleType: 'none', 
        margin: 0, 
        padding: 0 
      }}>

<li style={{ 
          marginRight: '20px' 
        }}>
          <Link to="/Home" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px',
            padding: '8px 12px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
        </li>

        <li style={{ 
          marginRight: '20px' 
        }}>
          <Link to="/Jewelery" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px',
            padding: '8px 12px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Jewelery
          </Link>
        </li>
        <li>
          <Link to="/electronics" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px',
            padding: '8px 12px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease' 
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Electronics
          </Link>
        </li>
        
      </ul>
    </nav>

      <Routes>
        <Route path="/Jewelery" element={<Jewelery/>} />
        <Route path="/electronics" element={<Elelctronics/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
