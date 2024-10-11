import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const CargarPacienteExcel = () => {
  const navigate = useNavigate();
  const [jsonData, setJsonData] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Función para manejar la carga del archivo
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Lee la primera hoja del archivo
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

      // Convierte la hoja a JSON estructurado (con encabezados de columnas)
      const jsonSheetData = XLSX.utils.sheet_to_json(firstSheet, {
        header: true,
      });
      setJsonData(jsonSheetData); // Guarda los datos JSON en el estado
    };

    reader.readAsArrayBuffer(file); // Lee el archivo como array buffer
  };

  // Función para confirmar la previsualización
  const handleConfirm = () => {
    console.log(jsonData);
    localStorage.setItem("jsonData", JSON.stringify(jsonData));
    setIsConfirmed(true);
    alert("Datos confirmados correctamente.");
    navigate("/Pacientes");
  };

  return (
    <div>
      <h1>Cargar Paciente desde Excel</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

      {jsonData && (
        <div>
          <h2>Previsualización de datos</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          {!isConfirmed && (
            <button onClick={handleConfirm}>Confirmar Carga</button>
          )}
        </div>
      )}

      {isConfirmed && (
        <div>
          <h2>Los datos han sido confirmados</h2>
          <p>Se ha confirmado la carga de datos del paciente.</p>
        </div>
      )}
    </div>
  );
};

export default CargarPacienteExcel;
