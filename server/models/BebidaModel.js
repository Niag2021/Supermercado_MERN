//Se importa la conexion a la DB. 
import db from "../database/db.js";
//Se importan las dependencias. 
import { DataTypes } from "sequelize";

//Bebidas es el nombre de la tabla. 
const BebidaModel = db.define('bebidas', {
    //id_bebidas: { type: DataTypes.STRING }, 
    nombre: { type: DataTypes.STRING }, 
    marca: { type: DataTypes.STRING }, 
    cantidad: { type: DataTypes.NUMBER }, 
    medidaCantidad: { type: DataTypes.STRING }, 
})

export default BebidaModel;