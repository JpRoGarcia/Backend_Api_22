// IMportacion del frameword de expree
const express = require('express')

// Instanciando un routed
const router = express.Router()

//importar controllers
const usuario_ctr = require('../controllers/usuarios.controller')

//Definicion de los endpoints - ruta

const vs = "/api/v1"

router.get(vs + '/usuarios', usuario_ctr.consultarUsuario)
    .get(vs + '/usuarios/:id', usuario_ctr.consultarUsuarios)
    .post(vs + '/usuarios', usuario_ctr.crearUsuario)
    .put(vs + '/usuarios', usuario_ctr.modificarUsuario)
    .delete(vs + '/usuarios', usuario_ctr.eliminarUsuario)


module.exports = router