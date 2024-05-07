class Doctor {
    constructor(nombre, nombreUsuario, apellido, contraseña, especialidad, clinicaAfiliada) {
        this._nombre = nombre;
        this._nombreUsuario = nombreUsuario;
        this._apellido = apellido;
        this._contraseña = contraseña;
        this._especialidad = especialidad;
        this._clinicaAfiliada = clinicaAfiliada;
    }

    // Getters
    get nombre() {
        return this._nombre;
    }

    get nombreUsuario() {
        return this._nombreUsuario;
    }

    get apellido() {
        return this._apellido;
    }

    get contraseña() {
        return this._contraseña;
    }

    get especialidad() {
        return this._especialidad;
    }

    get clinicaAfiliada() {
        return this._clinicaAfiliada;
    }

    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }

    set nombreUsuario(nombreUsuario) {
        this._nombreUsuario = nombreUsuario;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    set contraseña(contraseña) {
        this._contraseña = contraseña;
    }

    set especialidad(especialidad) {
        this._especialidad = especialidad;
    }

    set clinicaAfiliada(clinicaAfiliada) {
        this._clinicaAfiliada = clinicaAfiliada;
    }
}

