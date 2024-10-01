import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Inicio from './componentes/paginas/Inicio'
import FormualrioPacientes from './componentes/paginas/FormularioPacientes'
import Informes from './componentes/paginas/Informes'
import Estadisticas from './componentes/paginas/Estadisticas'
import Configuracion from './componentes/paginas/Configuracion'
import { FaBars } from "react-icons/fa";
import './App.css'
import Login from './componentes/paginas/Login'
import Principal from './componentes/paginas/Principal'
import Registro from './componentes/paginas/Registro'
import Pacientes from './componentes/paginas/Pacientes'
import PacienteDetalles from './componentes/paginas/funtion-pacientes/PacienteDetalles'


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<main><></><Principal/></main>}/>
          <Route path="/Registro" element={<main><></><Registro/></main>}/>
          <Route path="/login" element={<><Login /></>} />
          <Route path="/Inicio" element={<><Information/><main><Inicio /></main></>} />
          <Route path="/informes" element={<><Information/><main><Informes /></main></>} />
          <Route path="/informes/:id" element={<><Information/><main><Informes/></main></>} />
          <Route path="/Pacientes" element={<><Information/><main><Pacientes/></main></>} />
          <Route path="/Pacientes/:id" element={<><Information/><main><PacienteDetalles/></main></>} />
          <Route path="/Pacientes/crear" element={<><Information/><main><FormualrioPacientes/></main></>} />
          <Route path="/estadisticas" element={<><Information/><main><Estadisticas /></main></>} />
          <Route path="/Configuracion" element={<><Information/><main><Configuracion /></main></>} />
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
