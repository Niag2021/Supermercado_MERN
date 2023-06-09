//Se importan las dependencias. 
import express from 'express'

//Se importa el controlador correspondiente a bebidas. 
import { obtenerBebidas, obtenerBebida, crearBebida, actualizarBebida, eliminarBebida } from "../controllers/BebidaController.js"

const router = express.Router()
    //Se definen los endpoints y sus rutas. 
    router.get('/', obtenerBebidas); 
    router.get('/:id', obtenerBebida); 
    router.post('/', crearBebida); 
    router.put('/:id', actualizarBebida); 
    router.delete('/:id', eliminarBebida); 

export default router