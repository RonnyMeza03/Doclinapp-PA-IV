import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import FormularioAnalisis from './componentes/paginas/funtion-pacientes/FormularioAnalisis'
import CargarPacienteExcel from './componentes/paginas/funtion-pacientes/cargarPacienteExcel'
import Perfil from './componentes/paginas/funtion-configuracion/Perfil'
import Planes from './componentes/paginas/funtion-configuracion/Planes'
import Grupo from './componentes/paginas/funtion-configuracion/Grupo'
import DetallesGrupo from './componentes/paginas/funtion-configuracion/DetallesGrupo'
import { PremiunBronce } from './componentes/paginas/PremiunBronce'
import { PremiunPlata } from './componentes/paginas/PremiunPlata'
import { PremiunOro } from './componentes/paginas/PremiunOro'


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/Registro" element={<main><></><Registro/></main>}/>
          <Route path="/login" element={<><Login /></>} />
          <Route path="/Inicio" element={<><Information/><main><Inicio /></main></>} />
          <Route path="/premiunBronce" element={<><Information/><main><PremiunBronce/></main></>} />
          <Route path="/premiunPlata" element={<><Information/><main><PremiunPlata/></main></>} />
          <Route path="/premiunOro" element={<><Information/><main><PremiunOro/></main></>} />
          <Route path="/informes" element={<><Information/><main><Informes /></main></>} />
          <Route path="/informes/:id" element={<><Information/><main><Informes/></main></>} />
          <Route path="/Pacientes" element={<><Information/><main><Pacientes/></main></>} />
          <Route path="/Pacientes/:id" element={<><Information/><main><PacienteDetalles/></main></>} />
          <Route path="/Pacientes/:id/crearAnalisis" element={<><Information/><main><FormularioAnalisis/></main></>} />
          <Route path="/Pacientes/crear" element={<><Information/><main><FormualrioPacientes/></main></>} />
          <Route path="/Pacientes/excel" element={<><Information/><main><CargarPacienteExcel/></main></>} />
          <Route path="/estadisticas" element={<><Information/><main><Estadisticas /></main></>} />
          <Route path="/Configuracion" element={<><Information/><main><Configuracion /></main></>} />
          <Route path="/Configuracion/perfil" element={<><Information/><main><Perfil /></main></>} />
          <Route path="/Configuracion/premiun" element={<><Information/><main><Planes /></main></>} />
          <Route path="/Configuracion/grupo" element={<><Information/><main><Grupo /></main></>} />
          <Route path="/Configuracion/detallesGrupo" element={<><Information/><main><DetallesGrupo /></main></>} />
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
