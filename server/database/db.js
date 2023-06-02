//Se importan las dependencias. 
import {Sequelize} from 'sequelize';
 
//Se crea una constante que almacenara los datos de conexion a la BD. 
const db = new Sequelize('supermercado','root','root123',{
    host: 'localhost',
    dialect: 'mysql' 
});

export default db;