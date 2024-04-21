import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Inicio from './componentes/paginas/Inicio'
import Usuarios from './componentes/paginas/Usuarios'
import Informes from './componentes/paginas/Informes'
import Estadisticas from './componentes/paginas/Estadisticas'
import Ajustes from './componentes/paginas/Ajustes'
import { FaBars } from "react-icons/fa";
import './App.css'

function App() {
  const [ showNav, setShowNav] = useState(false)
  return (
      <Router>
      <header>
        <div className='header-content'>
            <FaBars onClick ={()=> setShowNav(!showNav)}/>
        </div>
      </header>

      <Navbar show={showNav} />

      <div className="main">
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informes" element={<Informes />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/ajustes" element={<Ajustes />} />
  
        </Routes>
      </div>      
      </Router>
  );
}

export default App;
