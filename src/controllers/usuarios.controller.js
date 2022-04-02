//Importar los Servicios de mongodb

const { leerDocumentos,  agregarDocumento, modificarDocumento, eliminarDocumento} = require('../services/mongodb.service')

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
      respuesta.message = 'Te chingastes creando el Usuarios';
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
const modificarUsuario = async (req, res) => {
   let respuesta = {}
   try {
         let _id = req.params["id"]
         respuesta.ok = true
         respuesta.message = "Usuarios modificado Correctamente."
         //modificar usuario en la base de datos
         let informacion = req.body
         let resultado = await modificarDocumento('usuarios', {_id}, informacion)
         console.log(resultado);
         respuesta.info = resultado
         res.send(respuesta); 
      
   } catch (Error) {
      respuesta.ok = false;
      respuesta.message = 'Te chingastes modificando Usuarios';
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
 const eliminarUsuario = async (req, res) => {
      let respuesta = {}
      try {
            let _id = req.params["id"]
            respuesta.ok = true
            respuesta.message = "Usuarios eliminado Correctamente."
            //eliminar usuario en la base de datos
            let resultado = await eliminarDocumento('usuarios', {_id})
            console.log(resultado);
            respuesta.info = resultado
            res.send(respuesta); 
         
      } catch (Error) {
         respuesta.ok = false;
         respuesta.message = 'Te chingastes eliminando Usuarios';
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
   const consultarUsuario =  async (req, res) => {
      let respuesta = {}
      try {
            let _id = req.params["id"]
            respuesta.ok = true
            respuesta.message = "Usuarios eliminado Correctamente."
            //eliminar usuario en la base de datos
            let resultado = await leerDocumentos('usuarios', {_id})
            console.log(resultado);
            respuesta.info = resultado
            res.send(respuesta); 
         
      } catch (Error) {
         respuesta.ok = false;
         respuesta.message = 'Te chingastes eliminando Usuarios';
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