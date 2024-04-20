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
  );
}

export default App;
