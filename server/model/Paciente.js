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
    diastolica
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

  // Métodos set
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
    const x = (140 - this._sistolica) * 100 / 140;
    const xy = 100 - x.toFixed(2);
    switch (this._fumar) {
        case "Activo":
            const probFumarA = 100 * 0.30;
            resultadoAnalisis.resultado = (xy * 0.70) + probFumarA;
            break;
        case "Medio":
            const probFumarM = 50 * 0.30;
            resultadoAnalisis.resultado = (xy * 0.70) + probFumarM;
            break;
        case "Nada":
            const probFumarN = 0 * 0.30;
            resultadoAnalisis.resultado = (xy * 0.70) + probFumarN;
            break;
        default:
            break;
    }
    return resultadoAnalisis.resultado.toFixed(2);
}


    analizarHiperlipidemia = function(){
      const x = (200 - this._colesterol) * 100 / 200
      const porColesterol = 100 - x.toFixed(2)
      const y = (130 - this._ldl) * 100 / 200
      const porLdl = 100 - y.toFixed(2)
      const z = (150 - this._trigliceridos) * 100 / 150
      const porTrigliceridos = 100 - y.toFixed(2)
      const h = (40 - this._hdl) * 100 / 40
      const resultado = porColesterol * 0.50 + porLdl * 0.20 + porTrigliceridos * 0.20 + h * 0.10
      return resultado.toFixed(2)
    }

    analizarCoronaria = function(){
      const valorEquitativo = 8 / 100
      let tabaquismo = {porcentaje : 0}
      const x = (200 - this._colesterol) * 100 / 200
      const porColesterol = 100 - x.toFixed(2)
      const y = (130 - this._ldl) * 100 / 200
      const porLdl = 100 - y.toFixed(2)
      const z = (140 - this._sistolica) * 100 / 140
      const porSistolica = 100 - z.toFixed(2)
      const p = (80 - this._diastolica) * 100 / 80
      const porDiatolica = 100 - p.toFixed(2)
      const porPresionArterial = porSistolica * 0.50 + porDiatolica * 0.50
      switch (this._fumar) {
        case "Activo":
          tabaquismo.porcentaje = 100 * valorEquitativo
          break;
        case "Medio":
          tabaquismo.porcentaje = 50 * valorEquitativo
        case "Nada":
          tabaquismo.porcentaje = 0 * valorEquitativo
      }
      const resultadoAnalisis = porPresionArterial * valorEquitativo + tabaquismo.porcentaje + porColesterol * valorEquitativo + porLdl * valorEquitativo
      return resultadoAnalisis.toFixed(2)
    }

  analisarPaciente = function(){
    const resultadoAnalisis = {hipertension: parseFloat(this.analizarHipertension()), 
      hiperlipidemia : parseFloat(this.analizarHiperlipidemia()),
      coronaria : parseFloat(this.analizarCoronaria())
    }
    return resultadoAnalisis ;
  }
}
export default Paciente
