<<<<<<< HEAD
import { useState } from 'react';
import Navbar from './componentes/Navbar';
import Inicio from './inicio';
import Usuarios from './paginas/Usuarios';
import Informes from './paginas/Informes';
import Balance from './paginas/balance';
import Ajustes from './paginas/Ajustes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('Inicio');
  const [showNav, setShowNav] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Usuarios':
        return <Usuarios />;
      case 'Informes':
        return <Informes />;
      case 'Balance':
        return <Balance />;
      case 'Ajustes':
        return <Ajustes />;
      default:
        return <Inicio />;
    }
  };

  return (
    <Router>
      <header>
        <div>
          <FaBars onClick={() => setShowNav(!showNav)} />
        </div>
      </header>

      <Navbar show={showNav} handleOptionSelect={handleOptionSelect} />

      <div className="main">
        <Routes>
          <Route path="/"/>
          <Route path="/Informes" element={<Informes />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Balance" element={<Balance />} />
          <Route path="/Ajustes" element={<Ajustes />} />
        </Routes>
      </div>

      {renderContent()}
    </Router>
=======
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

    
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab
