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

