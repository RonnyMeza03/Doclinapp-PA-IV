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
    const resultadoAnalisis = { resultado: 0 };
    const x = ((140 - this._sistolica) * 100) / 140;
    const xy = 100 - x.toFixed(2);
    switch (this._fumar) {
      case "Activo":
        const probFumarA = 100 * 0.3;
        resultadoAnalisis.resultado = xy * 0.7 + probFumarA;
        break;
      case "Medio":
        const probFumarM = 50 * 0.3;
        resultadoAnalisis.resultado = xy * 0.7 + probFumarM;
        break;
      case "Nada":
        const probFumarN = 0 * 0.3;
        resultadoAnalisis.resultado = xy * 0.7 + probFumarN;
        break;
      default:
        break;
    }
    return resultadoAnalisis.resultado.toFixed(2);
  };

  analizarHiperlipidemia = function () {
    const x = ((200 - this._colesterol) * 100) / 200;
    const porColesterol = 100 - x.toFixed(2);
    const y = ((130 - this._ldl) * 100) / 200;
    const porLdl = 100 - y.toFixed(2);
    const z = ((150 - this._trigliceridos) * 100) / 150;
    const porTrigliceridos = 100 - y.toFixed(2);
    const h = ((40 - this._hdl) * 100) / 40;
    const resultado =
      porColesterol * 0.5 + porLdl * 0.2 + porTrigliceridos * 0.2 + h * 0.1;
    console.log("hiperlipidemia: " + resultado);
    return resultado.toFixed(2);
  };

  analizarCoronaria = function () {
    const valorEquitativo = 8 / 100;
    let tabaquismo = { porcentaje: 0 };
    const x = ((200 - this._colesterol) * 100) / 200;
    const porColesterol = 100 - x.toFixed(2);
    const y = ((130 - this._ldl) * 100) / 200;
    const porLdl = 100 - y.toFixed(2);
    const z = ((140 - this._sistolica) * 100) / 140;
    const porSistolica = 100 - z.toFixed(2);
    const p = ((80 - this._diastolica) * 100) / 80;
    const porDiatolica = 100 - p.toFixed(2);
    const porPresionArterial = porSistolica * 0.5 + porDiatolica * 0.5;
    switch (this._fumar) {
      case "Activo":
        tabaquismo.porcentaje = 100 * valorEquitativo;
        break;
      case "Medio":
        tabaquismo.porcentaje = 50 * valorEquitativo;
      case "Nada":
        tabaquismo.porcentaje = 0 * valorEquitativo;
    }
    const resultadoAnalisis =
      porPresionArterial * valorEquitativo +
      tabaquismo.porcentaje +
      porColesterol * valorEquitativo +
      porLdl * valorEquitativo;
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
    const diabetes = this.analizarDiabetes2()
    const edad = {calculo : 0}
    if (this._edad < 65){
      const x = (65 - this._edad) * 100 / 65
      edad.calculo = 100 - x.toFixed(2)
    } else {
      edad.calculo = 100
    }
    const resultado = diabetes * 0.40 + edad.calculo * 0.60
    return resultado.toFixed(2)
  };

  analisarPaciente = function () {
    const resultadoAnalisis = {
      hipertension: parseFloat(this.analizarHipertension()),
      hiperlipidemia: parseFloat(this.analizarHiperlipidemia()),
      coronaria: parseFloat(this.analizarCoronaria()),
      congenita: parseFloat(this.analizarCongenita()),
      cerebrovascular: parseFloat(this.analizarCerebrovascular()),
      diabetes: parseFloat(this.analizarDiabetes2()),
      arterial:parseFloat(this.analzarArterial())
    };
    return resultadoAnalisis;
  };
}
export default Paciente;
