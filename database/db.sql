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

INSERT INTO usuarios (nombre, apellido, sexo, edad, sistolica, ldl, hdl, trigriceridos, familiares, enfermedades, fumar, alcohol, dieta, actividad, masa, glucosa) 
VALUES 
('Juan', 'Pérez', 'M', 35, 120, 100, 40, 150, 'Padres', 'Ninguna', 'No', 'Ocasionalmente', 'Equilibrada', '02:15:00', 75.5, 90),
('María', 'Gómez', 'F', 40, 130, 110, 50, 170, 'Abuelos', 'Diabetes', 'Sí', 'No', 'Baja', '01:30:00', 65.2, 100);

