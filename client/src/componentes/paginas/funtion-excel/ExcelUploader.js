import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelUploader = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      
      // Lee la primera hoja del archivo
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      
      // Convierte la hoja a un JSON legible
      const sheetData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
      setFileData(sheetData); // Guarda los datos en el estado
    };
    
    reader.readAsArrayBuffer(file); // Lee el archivo como array buffer
  };

  return (
    <div>
      <h1>Cargar archivo Excel</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      
      {fileData && (
        <div>
          <h2>Contenido del archivo:</h2>
          <table border="1">
            <tbody>
              {fileData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
