//Importar los Servicios de mongodb

const run = require('../services/mongodb.service')

//Controlador de Usuarios
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = (req, res) => {
   res.send('Crear Usuario'); 
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
const consultarUsuarios = (req, res) => {
   let respuesta ={}
   try {
      respuesta.ok = true
      respuesta.message = "Usuarios consultados Correctamente."

      run().catch(console.dir);

      respuesta.info = [{nombre:"Juan"}]
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