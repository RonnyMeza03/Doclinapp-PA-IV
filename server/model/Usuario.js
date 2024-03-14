class Usuario {
  constructor(
    numeroDocumento,
    tipoDocumento,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    direccion,
    telefono,
    fechaNacimiento,
    correo
  ) {
    this._numeroDocumento = numeroDocumento;
    this._tipoDocumento = tipoDocumento;
    this._primerNombre = primerNombre;
    this._segundoNombre = segundoNombre;
    this._primerApellido = primerApellido;
    this._segundoApellido = segundoApellido;
    this._direccion = direccion;
    this._telefono = telefono;
    this._fechaNacimiento = fechaNacimiento;
    this._correo = correo;
  }
  get getNumeroDocumento() {
    return this._numeroDocumento;
  }
  /**
   * @param {any} numeroDocumento
   */
  set setNumeroDocumento(numeroDocumento) {
    this._numeroDocumento = numeroDocumento;
  }
  get getTipoDocumento() {
    return this._tipoDocumento;
  }
  /**
   * @param {any} tipoDocumento
   */
  set tipoDocumento(tipoDocumento) {
    this._tipoDocumento = tipoDocumento;
  }
  get getPrimerNombre() {
    return this._primerNombre;
  }
  /**
   * @param {any} primerNombre
   */
  set setPrimerNombre(primerNombre) {
    this._primerNombre = primerNombre;
  }
  get getSegundoNombre() {
    return this._segundoNombre;
  }
  /**
   * @param {any} segundoNombre
   */
  set setSegundoNombre(segundoNombre) {
    this._segundoNombre = segundoNombre;
  }
  get getPrimerApellido() {
    return this._primerApellido;
  }
  /**
   * @param {any} primerApellido
   */
  set setPrimerApellido(primerApellido) {
    this._primerApellido = primerApellido;
  }
  get getSegundoApellido() {
    return this._segundoNombre;
  }
  /**
   * @param {any} segundoApellido
   */
  set setSegundoApellido(segundoApellido) {
    this._segundoApellido = segundoApellido;
  }
  get getDireccion() {
    return this._direccion;
  }
  /**
   * @param {any} direccion
   */
  set setDireccion(direccion) {
    this._direccion = direccion;
  }
  get getTelefono() {
    return this._telefono;
  }
  /**
   * @param {any} telefono
   */
  set setTelefono(telefono) {
    this._telefono = telefono;
  }
  get getFechaNacimiento() {
    return this._fechaNacimiento;
  }
  /**
   * @param {any} fechaNacimiento
   */
  set setFechaNacimiento(fechaNacimiento) {
    this._fechaNacimiento = fechaNacimiento;
  }
  get getCorreo() {
    return this._correo;
  }
  /**
   * @param {any} correo
   */
  set setCorreo(correo) {
    this._correo = correo;
  }
}
