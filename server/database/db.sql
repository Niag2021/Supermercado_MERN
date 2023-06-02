-- Crear BD. 
create database supermercado;

-- Usar BD botilleria. 
use supermercado;

-- Crear tabla bebidas. 
/*
    CREATE TABLE bebidas (
        id INTEGER PRIMARY KEY auto_increment,
        nombre VARCHAR(20) NOT NULL,
        marca VARCHAR(10) NOT NULL,
        cantidad INTEGER(6) NOT NULL,
        medidaCantidad VARCHAR(15) NOT NULL,
        createdAt TimeStamp NOT NULL default current_timestamp,
        updatedAt TimeStamp NOT NULL default current_timestamp
    );
*/

-- Seleccionar todo de la taba bebidas. 
select * from bebidas;

-- Insertar datos en la tabla bebidas de la Base de Datos. 
INSERT INTO bebidas (id, nombre, marca, cantidad, medidaCantidad) VALUES(1, 'Coca cola', 'CCU', 2, 'litros');
INSERT INTO bebidas (id, nombre, marca, cantidad, medidaCantidad) VALUES(2, 'Garotade', 'CUC', 35, 'gramos');
INSERT INTO bebidas (id, nombre, marca, cantidad, medidaCantidad) VALUES(3, 'RedBull', 'CCU', 92, 'litros');
INSERT INTO bebidas (id, nombre, marca, cantidad, medidaCantidad) VALUES(4, 'Agua', 'CCU', 5, 'gramos');
INSERT INTO bebidas (id, nombre, marca, cantidad, medidaCantidad) VALUES(5, 'Power Ade', 'CCU', 5, 'litros');

/*
    CREATE TABLE maiz (
        id_maiz INTEGER PRIMARY KEY auto_increment,
        nombre VARCHAR(20) NOT NULL,
        marca VARCHAR(10) NOT NULL,
        cantidad INTEGER(6) NOT NULL,
        medidaCantidad VARCHAR(15) NOT NULL,
        mantenimiento VARCHAR(15) NOT NULL, 
        createdAt TimeStamp NOT NULL default current_timestamp,
        updatedAt TimeStamp NOT NULL default current_timestamp
    );
*/

-- Seleccionar todo de la taba maiz. 
select * from maiz;

-- Insertar datos en la tabla bebidas de la Base de Datos. 
-- INSERT INTO maiz (id_maiz, nombre, marca, cantidad, medidaCantidad, mantenimiento, fechaElaboracion, fechaVencimiento) 
-- VALUES(1, 'Coca cola', 'CCU', 2, 'litros','congelado');



