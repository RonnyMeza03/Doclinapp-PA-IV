class Paciente {
  constructor(
    nombre,
    apellido,
    edad,
    sexo,
    sistolica,
    ldl,
    hdl,
    trigliceridos,
    familiares,
    enfermedades,
    fumar,
    alcohol,
    dieta,
    actividad,
    masa,
    glucosa,
    colesterol,
    diastolica,
    altura
  ) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._sexo = sexo;
    this._sistolica = sistolica;
    this._ldl = ldl;
    this._hdl = hdl;
    this._trigliceridos = trigliceridos;
    this._familiares = familiares;
    this._enfermedades = enfermedades;
    this._fumar = fumar;
    this._alcohol = alcohol;
    this._dieta = dieta;
    this._actividad = actividad;
    this._masa = masa;
    this._glucosa = glucosa;
    this._colesterol = colesterol;
    this._diastolica = diastolica;
    this._altura = altura;
  }

  // Métodos get
  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get edad() {
    return this._edad;
  }

  get sexo() {
    return this._sexo;
  }

  get sistolica() {
    return this._sistolica;
  }

  get ldl() {
    return this._ldl;
  }

  get hdl() {
    return this._hdl;
  }

  get trigliceridos() {
    return this._trigliceridos;
  }

  get familiares() {
    return this._familiares;
  }

  get enfermedades() {
    return this._enfermedades;
  }

  get fumar() {
    return this._fumar;
  }

  get alcohol() {
    return this._alcohol;
  }

  get dieta() {
    return this._dieta;
  }

  get actividad() {
    return this._actividad;
  }

  get masa() {
    return this._masa;
  }

  get glucosa() {
    return this._glucosa;
  }

  get colesterol() {
    return this._colesterol;
  }

  get diastolica() {
    return this._diastolica;
  }

  get altura() {
    return this._altura;
  }

  // Métodos set
  set altura(altura) {
    this._altura = altura;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  set edad(edad) {
    this._edad = edad;
  }

  set sexo(sexo) {
    this._sexo = sexo;
  }

  set sistolica(sistolica) {
    this._sistolica = sistolica;
  }

  set ldl(ldl) {
    this._ldl = ldl;
  }

  set hdl(hdl) {
    this._hdl = hdl;
  }

  set trigliceridos(trigliceridos) {
    this._trigliceridos = trigliceridos;
  }

  set familiares(familiares) {
    this._familiares = familiares;
  }

  set enfermedades(enfermedades) {
    this._enfermedades = enfermedades;
  }

  set fumar(fumar) {
    this._fumar = fumar;
  }

  set alcohol(alcohol) {
    this._alcohol = alcohol;
  }

  set dieta(dieta) {
    this._dieta = dieta;
  }

  set actividad(actividad) {
    this._actividad = actividad;
  }

  set masa(masa) {
    this._masa = masa;
  }

  set glucosa(glucosa) {
    this._glucosa = glucosa;
  }

  set colesterol(colesterol) {
    this._colesterol = colesterol;
  }

  set diastolica(diastolica) {
    this._diastolica = diastolica;
  }

  analizarHipertension = function () {
    const resultadoFumar = { resultado: 0 };
    const sistolica = { resultado: 0 };
    const alcohol = { resultado: 0 };
    const diabetes = this.analizarDiabetes2();
    if (this._sistolica < 140) {
      const x = ((140 - this._sistolica) * 100) / 140;
      sistolica.resultado = 100 - x.toFixed(2);
    } else {
      sistolica.resultado = 100;
    }

    switch (this._alcohol) {
      case "Alta":
        alcohol.resultado = 100;
        break;
      case "Moderada":
        alcohol.resultado = 60;
        break;
      case "Baja":
        alcohol.resultado = 30;
        break;
      case "Ninguna":
        alcohol.resultado = 0;
        break;
      default:
        break;
    }

    switch (this._fumar) {
      case "Activo":
        resultadoFumar.resultado = 100;
        break;
      case "Medio":
        resultadoFumar.resultado = 50;
        break;
      case "Nada":
        resultadoFumar.resultado = 0;
        break;
      default:
        break;
    }
    const resultado =
      diabetes * 0.2 +
      sistolica.resultado * 0.3 +
      alcohol.resultado * 0.3 +
      resultadoFumar.resultado * 0.2;
    return resultado.toFixed(2);
  };

  analizarHiperlipidemia = function () {
    const colesterol = { resultado: 0 };
    const ldl = { resultado: 0 };
    const trigliceridos = { resultado: 0 };
    if (this._colesterol < 200) {
      const x = ((200 - this._colesterol) * 100) / 200;
      colesterol.resultado = 100 - x.toFixed(2);
    } else {
      colesterol.resultado = 100;
    }
    if (this._ldl < 130) {
      const y = ((130 - this._ldl) * 100) / 200;
      ldl.resultado = 100 - y.toFixed(2);
    } else {
      ldl.resultado = 100;
    }
    if (this._trigliceridos < 150) {
      const z = ((150 - this._trigliceridos) * 100) / 150;
      trigliceridos.resultado = 100 - z.toFixed(2);
    } else {
      trigliceridos.resultado = 100;
    }
    const hdl = ((40 - this._hdl) * 100) / 40;
    const resultado =
      colesterol.resultado * 0.5 +
      ldl.resultado * 0.2 +
      trigliceridos.resultado * 0.2 +
      hdl * 0.1;
    console.log("hiperlipidemia: " + resultado);
    return resultado.toFixed(2);
  };

  analizarCoronaria = function () {
    const colesterol = { resultado: 0 };
    const ldl = { resultado: 0 };
    const sistolica = { resultado: 0 };
    const diastolica = { resultado: 0 };
    const tabaquismo = { porcentaje: 0 };
    const probActividad = { resultado: 0 };
    const familiares = this.analizarCongenita();
    if (this._colesterol < 200) {
      const x = ((200 - this._colesterol) * 100) / 200;
      colesterol.resultado = 100 - x.toFixed(2);
    } else {
      colesterol.resultado = 100;
    }
    if (this._ldl < 130) {
      const y = ((130 - this._ldl) * 100) / 200;
      ldl.resultado = 100 - y.toFixed(2);
    } else {
      ldl.resultado = 100;
    }
    if (this._sistolica < 140) {
      const z = ((140 - this._sistolica) * 100) / 140;
      sistolica.resultado = 100 - z.toFixed(2);
    } else {
      sistolica.resultado = 100;
    }
    if (this._diastolica < 80) {
      const p = ((80 - this._diastolica) * 100) / 80;
      diastolica.resultado = 100 - p.toFixed(2);
    } else {
      diastolica.resultado = 100;
    }
    if (this._actividad < 7) {
      probActividad.calculo = ((7 - this._actividad) * 100) / 7;
    }

    const porPresionArterial =
      sistolica.resultado * 0.5 + diastolica.resultado * 0.5;
    switch (this._fumar) {
      case "Activo":
        tabaquismo.porcentaje = 100;
        break;
      case "Medio":
        tabaquismo.porcentaje = 50;
      case "Nada":
        tabaquismo.porcentaje = 0;
    }
    const resultadoAnalisis =
      porPresionArterial * 0.2 +
      familiares * 0.1 +
      tabaquismo.porcentaje * 0.1 +
      colesterol.resultado * 0.4 +
      ldl.resultado * 0.1;
    probActividad.resultado * 0.1;
    return resultadoAnalisis.toFixed(2);
  };

  analizarCongenita = function () {
    const resultadoAnalisis = { resultado: 0 };
    switch (this._familiares) {
      case "Abuelos":
        resultadoAnalisis.resultado = 50;
        break;

      case "Padres":
        resultadoAnalisis.resultado = 70;

      case "Tios":
        resultadoAnalisis.resultado = 30;

      case "Hermanos":
        resultadoAnalisis.resultado = 40;

      default:
        break;
    }
    return resultadoAnalisis.resultado;
  };

  analizarCerebrovascular = function () {
    const fumar = { calculo: 0 };
    const familiar = { calculo: 0 };
    const sistoDisto = { calculo: 0 };
    const colesterol = { calculo: 0 };
    const ldl = { calculo: 0 };
    if (this._diastolica < 80 && this._sistolica < 120) {
      const x = ((120 - this._sistolica) * 100) / 120;
      const xy = 100 - x.toFixed(2);
      const s = ((80 - this._diastolica) * 100) / 80;
      const sy = 100 - s.toFixed(2);
      sistoDisto.calculo = xy * 0.5 + sy * 0.5;
    } else {
      sistoDisto.calculo = 100;
    }

    if (this._colesterol < 200) {
      const x = ((200 - this._colesterol) * 100) / 200;
      colesterol.calculo = 100 - x.toFixed(2);
    } else {
      colesterol.calculo = 100;
    }

    if (this._ldl < 130) {
      const x = ((130 - this._ldl) * 100) / 130;
      ldl.calculo = 100 - x.toFixed(2);
    } else {
      ldl.calculo = 100;
    }

    switch (this._familiares) {
      case "Abuelos":
        familiar.calculo = 50;
        break;

      case "Padres":
        familiar.calculo = 70;
        break;
      case "Tios":
        familiar.calculo = 30;
        break;
      case "Hermanos":
        familiar.calculo = 40;

      default:
        break;
    }
    switch (this._fumar) {
      case "Activo":
        fumar.calculo = 100;
        break;

      case "Medio":
        fumar.calculo = 50;

      case "Nada":
        fumar.calculo = 0;

      default:
        break;
    }
    const diabetes = this.analizarDiabetes2();

    const resultado =
      diabetes * 0.1 +
      fumar.calculo * 0.1 +
      familiar.calculo * 0.1 +
      sistoDisto.calculo * 0.2 +
      colesterol.calculo * 0.4 +
      ldl.calculo * 0.1;
    return resultado.toFixed(2);
  };

  analizarDiabetes2 = function () {
    const imc = { imc: 0, resultado: "" };
    const probActividad = { calculo: 0 };
    const familiar = { calculo: 0 };
    const probIMC = { calculo: 0 };
    if (this._actividad < 7) {
      probActividad.calculo = ((7 - this._actividad) * 100) / 7;
    }
    if (this._enfermedades == "diabetes") {
      switch (this._familiares) {
        case "Abuelos":
          familiar.calculo = 50;
          break;

        case "Padres":
          familiar.calculo = 70;
          break;
        case "Tios":
          familiar.calculo = 30;
          break;
        case "Hermanos":
          familiar.calculo = 40;

        default:
          break;
      }
    }
    const altura = this._altura / 100;
    console.log(altura);
    const calcularImc = this._masa / (altura * altura);
    console.log(calcularImc);
    if (calcularImc < 18.5) {
      imc.resultado = "Bajo peso";
    } else if (calcularImc >= 18.5 && imc < 24.9) {
      imc.resultado = "Normal";
    } else if (calcularImc >= 24.9 && imc < 29.9) {
      imc.resultado = "Sobrepeso";
    } else {
      imc.resultado = "Obeso";
    }
    if (calcularImc < 30) {
      const x = ((30 - calcularImc) * 100) / 30;
      probIMC.calculo = 100 - x.toFixed(2);
    } else {
      probIMC.calculo = 100;
    }
    const resultado =
      probActividad.calculo * 0.3 +
      probIMC.calculo * 0.6 +
      familiar.calculo * 0.1;
    return resultado.toFixed(2);
  };

  analzarArterial = function () {
    const diabetes = this.analizarDiabetes2();
    const edad = { calculo: 0 };
    if (this._edad < 65) {
      const x = ((65 - this._edad) * 100) / 65;
      edad.calculo = 100 - x.toFixed(2);
    } else {
      edad.calculo = 100;
    }
    const resultado = diabetes * 0.4 + edad.calculo * 0.6;
    return resultado.toFixed(2);
  };

  analisarPaciente = function () {
    const resultadoAnalisis = {
      hipertension: parseFloat(this.analizarHipertension()),
      hiperlipidemia: parseFloat(this.analizarHiperlipidemia()),
      coronaria: parseFloat(this.analizarCoronaria()),
      congenita: parseFloat(this.analizarCongenita()),
      cerebrovascular: parseFloat(this.analizarCerebrovascular()),
      diabetes: parseFloat(this.analizarDiabetes2()),
      arterial: parseFloat(this.analzarArterial()),
    };
    return resultadoAnalisis;
  };
}
export default Paciente;
