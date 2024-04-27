import '../css/usuarios.css'

const Usuarios = ( ) => {
  return (
    <div className="usuario-container">
      <h1>DATOS USUARIO</h1>
       
      <div className="personal-info border">
        <b>Información Personal: </b>
        <div className='separation'>
          <div className='input'>
            <p><strong>Edad:</strong></p>
            <input type="text" />
          </div>

          <div className="input">
            <p><strong>Sexo:</strong></p>
            <input type="text" />
          </div>

          <div className="input">
            <p><strong>Dirección:</strong></p>
            <input type="text" />
          </div>

          <div className="input">
            <p><strong>Teléfono:</strong></p>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className='medical-history border'>
        <b>Antecedentes Médicos:</b>
        <div className='separation'>
          <p><strong>Presión Arterial Sistólica:</strong> </p>
          <p><strong>Presión Arterial Diastólica:</strong> </p>
        </div>
        <p><strong>Niveles de Colesterol Total:</strong> </p>
        <div className='separation'>
          <p><strong>Niveles de LDL (Colesterol Malo):</strong> </p>
          <p><strong>Niveles de HDL (Colesterol Bueno):</strong> </p>
        </div>
        <div className='separation'>
        <p><strong>Niveles de Triglicéridos:</strong> </p>
        <p><strong>Historial Familiar de Enfermedades Cardiacas:</strong> </p>
        </div>
        <p><strong>Historial de Enfermedades Crónicas (ej: diabetes):</strong> </p>
      </div>

      <div className="life-style border">
        <b>Estilo de Vida:</b>
        <div className="separation">
          <p><strong>Hábito de Fumar (Si/No):</strong> </p>
          <p><strong>Frecuencia de Consumo de Alcohol:</strong> </p>
        </div>
        <div className="separation">
          <p><strong>Dieta (Alta/Baja en Grasas Saturadas y Colesterol):</strong> </p>
          <p><strong>Nivel de Actividad Física (Horas a la Semana):</strong> </p>
        </div>
      </div>

      <div className="risk-evaluation border">
        <b>Evaluación de Riesgo:</b>
        <div className="separation">
        <p><strong>Índice de Masa Corporal (IMC):</strong> </p>
        <p><strong>Niveles de Glucosa en Sangre:</strong> </p>
        </div>
      </div>
    </div>
  )
}

export default Usuarios
