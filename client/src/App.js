import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Inicio from './componentes/paginas/Inicio'
import Usuarios from './componentes/paginas/Usuarios'
import Informes from './componentes/paginas/Informes'
import Estadisticas from './componentes/paginas/Estadisticas'
import Ajustes from './componentes/paginas/Ajustes'
import { FaBars } from "react-icons/fa";
import './App.css'
import Dialogo from './componentes/paginas/function-informes/Dialogo'
import Login from './componentes/paginas/Login'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<main><Login /></main>}/>
          <Route path="/Inicio" element={<><Information/><main><Inicio /></main></>} />
          <Route path="/informes" element={<><Information/><main><Informes /></main></>} />
          <Route path="/informes/:id" element={<><Information/><main><Informes/></main></>} />
          <Route path="/usuarios" element={<><Information/><main><Usuarios /></main></>} />
          <Route path="/estadisticas" element={<><Information/><main><Estadisticas /></main></>} />
          <Route path="/ajustes" element={<><Information/><main><Ajustes /></main></>} />
        </Routes>   
      </Router>
  );
}

function Information() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
    <header>
    <div className='header-content'>
      <FaBars onClick = {()=> setShowNav(!showNav)}/>
    </div>
    </header>
    <Navbar show={showNav} />
    </>
  );
}

export default App;
