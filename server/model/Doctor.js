class Doctor extends Usuario {
    constructor (
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
        especialidad
    ){
        super(
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
        )
        this._especialidad = especialidad
    }
    get getEspecialidad(){
        return this._especialidad
    }
    /**
     * @param {any} especialidad
     */
    set setEspecialidad(especialidad){
        this._especialidad = especialidad
    }
}