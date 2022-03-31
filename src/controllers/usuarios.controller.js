//Importar los Servicios de mongodb

const { leerDocumentos, agregarDocumento } = require('../services/mongodb.service')

//Controlador de Usuarios
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = async (req, res) => {
   let respuesta = {}
   try {
         respuesta.ok = true
         respuesta.message = "Usuarios consultados Correctamente."
         //agragae a labase de datos
         let informacion = req.body
         let resultado = await agregarDocumento('usuarios', informacion)
         console.log(resultado);
         respuesta.info = resultado
         res.send(respuesta); 
      
   } catch (Error) {
      respuesta.ok = false;
      respuesta.message = 'Te chingastes consultando Usuarios';
      respuesta.info = Error
      console.log(Error);
      res.status(500).send(respuesta);

   }
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const modificarUsuario = (req, res) => {
    res.send('modificar Usuario'); 
 }
 /**
  * 
  * @param {Request} req 
  * @param {Response} res 
  */
 const eliminarUsuario = (req, res) => {
    res.send('eliminar Usuario'); 
   }
   /**
    * 
    * @param {Request} req    
    * @param {Response} res 
    */
   const consultarUsuario = (req, res) => {
      let id = req.params.id
      res.send('Consular Usuario ' + id); 
   }
   /**
    * 
    * @param {Request} req 
    * @param {Response} res 
    */
const consultarUsuarios = async (req, res) => {
   let respuesta = {}
   try {
         respuesta.ok = true
         respuesta.message = "Usuarios consultados Correctamente."

         let resultado = await leerDocumentos('usuarios')
         respuesta.info = resultado
         res.send(respuesta); 
      
   } catch (Error) {
      respuesta.ok = false;
      respuesta.message = 'Te chingastes consultando Usuarios';
      respuesta.info = Error
      res.status(500).send(respuesta);
   }
 }

 module.exports = {crearUsuario,
                  modificarUsuario,
                  eliminarUsuario,
                  consultarUsuario,
                  consultarUsuarios
}