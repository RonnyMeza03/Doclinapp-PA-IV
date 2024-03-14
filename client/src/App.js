import React, { useState } from "react";
import Sidebar from "./sidebar";
import "./App.css";
import Inicio from "./inicio";
import Usuarios from "./Usuarios";
import Medicamentos from "./Medicamentos";
import Tratamientos from "./Tratamientos";
import Balance from "./balance";
import Ajustes from "./Ajustes";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Inicio");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Usuarios":
        return <Usuarios />;
      case "Medicamentos":
        return <Medicamentos />;
      case "Tratamientos":
        return <Tratamientos />;
      case "Balance":
        return <Balance />;
      case "Ajustes":
        return <Ajustes />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="App">
    <div
      className={`menu-icon ${sidebarOpen ? "open" : ""}`}
      onClick={toggleSidebar}
    >
    </div>
    <Sidebar isOpen={sidebarOpen} onOptionSelect={handleOptionSelect} />
    <div className="content">{renderContent()}</div>
  </div>
  );
};

export default App;
