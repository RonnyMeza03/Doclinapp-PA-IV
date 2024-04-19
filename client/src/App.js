import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Inicio from './paginas/Inicio'
import Usuarios from './paginas/Usuarios'
import Informes from './paginas/Informes'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import './App.css'

function App() {
  const [ showNav, setShowNav] = useState
  (false)
  return (
      <Router>
      <header>
        <div>
          <FaBars onClick ={()=> setShowNav(!showNav)}/>
        </div>
      </header>

      <Navbar show={showNav} />

      <div classname="main">
        <Routes>
        <Route path="/" exact={true} component={Inicio}/>
        <Route path="/informes" exact={true} component={Informes}/>
        <Route path="/usuarios" exact={true} component={Usuarios}/>
        </Routes>
      </div>
      
      </Router>

    
  );
}

export default App;
