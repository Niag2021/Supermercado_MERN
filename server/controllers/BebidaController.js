//Se immporta el modelo. 
import BebidaModel from "../models/BebidaModel.js";

//** Metodos para el CRUD **/

//Mostrar todos los registros. 
export const obtenerBebidas = async (req, res) => {
    //Try catch es para manejar que si ocurre algun error, no se caera el servidor. 
    try {
        //Se crea una constante asincrona que retornara todo lo que encuentre en 
        //BebidaModel, almacenandolo en la constante bebidas. 
        const bebidas = await BebidaModel.findAll()
        //Responde en formato JSON con todas las bebidas almacenadas. 
        res.json(bebidas)
    } catch (error) {
        //En caso de error mostrara un mensaje indicando el error. 
        res.json({ message: error.message })
    }
}

//Mostrar un registro. 
export const obtenerBebida = async (req, res) => {
    //Try catch es para manejar que si ocurre algun error, no se caera el servidor. 
    try {
        //Se crea una constante asincrona que retornara el registro que coincide con el id correspondiente al registro 
        //todo lo que encuentre en BebidaModel, almacenandolo en la constante bebida. 
        const bebida = await BebidaModel.findAll({
            where: { id: req.params.id }
        })
        //Responde en formato JSON con la bebida que coincida con el id correspondiente. 
        res.json(bebida[0])
    } catch (error) {
        //En caso de error mostrara un mensaje indicando el error. 
        res.json({ message: error.message })
    }
}

//Crear un registro. 
export const crearBebida = async (req, res) => {
    //Try catch es para manejar que si ocurre algun error, no se caera el servidor. 
    try {
        //Crea el nuevo registro. 
        await BebidaModel.create(req.body)
        //Responde con el siguiente mensaje en formato JSON. 
        res.json({ "message": "Registro creado correctamente.!" })
    } catch (error) {
        //En caso de error mostrara un mensaje indicando el error. 
        res.json({ message: error.message })
    }
}

//Actualizar un registro. 
export const actualizarBebida = async (req, res) => {
    //Try catch es para manejar que si ocurre algun error, no se caera el servidor. 
    try {
        //Actualiza el registro que coincide con el id correspondiente. 
        await BebidaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro actualizado correctamente.!"
        })
    } catch (error) {
        //En caso de error mostrara un mensaje indicando el error. 
        res.json({ message: error.message })
    }
}
