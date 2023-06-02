//Se importan las dependencias. 
import express from 'express'

//Se importa el controlador correspondiente a bebidas. 
import { obtenerBebidas, obtenerBebida } from "../controllers/BebidaController.js"

const router = express.Router()
    //Se definen los endpoints y sus rutas. 
    router.get('/', obtenerBebidas); 
    router.get('/:id', obtenerBebida); 
    

export default router