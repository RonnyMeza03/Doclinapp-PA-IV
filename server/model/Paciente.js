class Paciente extends Usuario {
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
        correo,
        tipoSangre,
        domicilio,
        numeroDomicilio,
        piso,
        departamento,
        obraSocial,
        telefonoFijo,
        afiliacion
    ){
        super( numeroDocumento,
            tipoDocumento,
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            direccion,
            telefono,
            fechaNacimiento,
            correo)
            this._tipoSangre = tipoSangre;
            this._domicilio = domicilio
            this._numeroDomicilio = numeroDomicilio
            this._piso = piso
            this._departamento = departamento
            this._obraSocial = obraSocial
            this._telefonoFijo = telefonoFijo
            this._afiliacion = afiliacion
    }
    get getTipoSangre(){
        return this._tipoSangre
    }
    /**
     * @param {any} tipoSangre
     */
    set setTipoSangre(tipoSangre){
        this._tipoSangre = tipoSangre
    }
    get getDomicilio(){
        return this._domicilio
    }
    /**
     * @param {any} domicilio
     */
    set setDomicilio(domicilio){
        this._domicilio = domicilio
    }
    get getNumeroDomicilio(){
        return this._numeroDomicilio
    }
    /**
     * @param {any} numeroDomicilio
     */
    set setNumeroDomicilio(numeroDomicilio) {
        this._numeroDomicilio = numeroDomicilio
    }
    get getPiso(){
        return this._piso
    }
    /**
     * @param {any} piso
     */
    set setPiso(piso){
        this._piso = piso
    }
    get getDepartamento (){
        return this._departamento
    }
    /**
     * @param {any} departamento
     */
    set setDepartamento (departamento){
        this._departamento = departamento 
    }
    get getObraSocial (){
        return this._obraSocial
    }
    /**
     * @param {any} obraSocial
     */
    set setObraSocial (obraSocial){
        this._obraSocial = obraSocial
    }
    get getTelefonoFijo (){
        return this._telefonoFijo
    }
    /**
     * @param {any} telefonoFijo
     */
    set setTelefonoFijo (telefonoFijo){
        this._telefonoFijo = telefonoFijo
    }
    get getAfiliacion (){
        return this._afiliacion
    }
    /**
     * @param {any} afiliacion
     */
    set setAfiliacion (afiliacion){
        this._afiliacion = afiliacion 
    }
}