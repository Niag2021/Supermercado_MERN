//Se importan las dependencias. 
import express from "express";
import cors from 'cors';

//Se importa la conexion a la BD. 
import db from "./database/db.js";

//Se importa el enrutador. 
import bebidaRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json())

//Bebidas ira antes de cada ruta http. 
app.use('/bebidas', bebidaRoutes)

//Try catch es para controlar que no se caiga el servidor si ocurre
//algun problema, manda un mensaje en vez de que se caiga el servidor. 
try {
    await db.authenticate()
    console.log('Conexion exitosa a la BD');
} catch (error) {
    console.log(`El error de conexión es : +${error}`);
}

/*
app.get('/', (req, res)=>{ 
    res.send('Hola mundo.'); 
}) 
*/

//El servidor se esta ejecutando en el puerto 8000. 
app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/')
}) 
