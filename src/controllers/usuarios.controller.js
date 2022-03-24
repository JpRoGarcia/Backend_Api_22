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
    res.send('Consular Usuario'); 
 }
  /**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarUsuarios = (req, res) => {
    res.send('Consular Usuarios'); 
 }

 module.exports = {crearUsuario,
                  modificarUsuario,
                  eliminarUsuario,
                  consultarUsuario,
                  consultarUsuarios
}