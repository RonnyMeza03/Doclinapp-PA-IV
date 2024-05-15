-- Tabla de usuarios
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE usuarios 
    ADD sexo VARCHAR(1) NOT NULL, 
    edad INT NOT NULL, 
    sistolica INT NOT NULL, 
    diastolica INT NOT NULL, 
    colesterol INT NOT NULL, 
    ldl INT NOT NULL, 
    hdl INT NOT NULL, 
    trigriceridos INT NOT NULL, 
    familiares VARCHAR(20) NOT NULL, 
    enfermedades VARCHAR(100) NOT NULL, 
    fumar VARCHAR(30) NOT NULL, 
    alcohol VARCHAR(20) NOT NULL, 
    dieta VARCHAR(10) NOT NULL, 
    actividad TIME NOT NULL, 
    masa DECIMAL(10, 2) NOT NULL, 
    glucosa INT NOT NULL ;


CREATE TABLE analisis (
    id_analisis INT PRIMARY KEY,
    id_usuario INT,
    hipertension DECIMAL (10, 2) NOT NULL,
    hiperlipidemia DECIMAL (10, 2) NOT NULL,
    coronaria DECIMAL (10, 2) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


