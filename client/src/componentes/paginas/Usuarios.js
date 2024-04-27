import '../css/usuarios.css'

const Usuarios = ( ) => {
  return (
    <div className="usuario-container">
      <h1>REGISTRO DE DATOS</h1>
       
      <form action="">
        <div className="personal-info border">
          <b>Información Personal: </b>

          <div className='separation'>
            <div className="input">
              <p><strong>Nombre:</strong></p>
              <input type="text" />
            </div>

            <div className='input'>
              <p><strong>Edad:</strong></p>
              <input type="text" />
            </div>

            <div className="input">
              <p><strong>Sexo:</strong></p>
              <input type="text" />
            </div>
          </div>

          <div className="separation">
            <div className="input">
                <p><strong>Dirección:</strong></p>
                <input type="text" />
              </div>

              <div className="input">
                <p><strong>Teléfono:</strong></p>
                <input type="text" />
              </div>

              <div></div> {/*DIV DE RELLENO*/}
              <div></div> {/*DIV DE RELLENO*/}
          </div>
        </div>



        <div className='medical-history border'>
          <b>Antecedentes Médicos:</b>
            <div className="separation">
              <div className="input">
                <p><strong>Niveles de Colesterol Total:</strong> </p>
                <input type="text" />
              </div>

              <div className="input">
                <p><strong>Niveles de LDL (Colesterol Malo):</strong> </p>
                <input type="text" />
              </div>

              <div className="input">
              <p><strong>Niveles de HDL (Colesterol Bueno):</strong> </p>
              <input type="text" />
              </div>
            </div>


          <div className="separation">
            <div className="input">
              <p><strong>Niveles de Triglicéridos:</strong> </p>
              <input type="text" />
            </div>

            <div className="input">
              <p><strong>Historial Familiar de Enfermedades Cardiacas:</strong> </p>
              <input type="text" />
            </div>
          </div>

          <div className="separation">
            <div className="input">
              <p><strong>Historial de Enfermedades Crónicas (ej: diabetes):</strong> </p>
              <input type="text" />
            </div>
          </div>
        </div>



        <div className="life-style border">
          <b>Estilo de Vida:</b>
          
          <div className="separation">
            <div className="input">
              <p><strong>Hábito de Fumar (Si/No):</strong> </p>
              <input type="text" />
            </div>

            <div className="input">
              <p><strong>Frecuencia de Consumo de Alcohol:</strong> </p>
              <input type="text" />
            </div>
          </div>

          <div className="separation">
            <div className="input">
              <p><strong>Dieta (Alta/Baja en Grasas Saturadas y Colesterol):</strong> </p>
              <input type="text" />
            </div>

            <div className="input">
              <p><strong>Nivel de Actividad Física (Horas a la Semana):</strong> </p>
              <input type="text" />
            </div>
          </div>
        </div>



        <div className="risk-evaluation border">
          <b>Evaluación de Riesgo:</b>

          <div className="separation">
            <div className="input">
              <p><strong>Índice de Masa Corporal (IMC):</strong> </p>
              <input type="text" />
            </div>
            
            <div className="input">
              <p><strong>Niveles de Glucosa en Sangre:</strong> </p>
              <input type="text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Usuarios