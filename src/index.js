// IMportacion del frameword de expree
const express = require('express')

//Agregar configuracion a preocess.env
require('../Config/index.config')

//Creando la aplicacion de expree
const app = express()

// Aplicar middleware que permite leer los json del body
app.use(express.json())

// Integrado el router con la API
const router = require('./routers/index.router')
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Puerto donde se levantea el servidor web
const PORT = process.env.PORT

// Levantar la API que estara escuchado en el PUERTO 3000
//1. Primer Parametro: Puerto
//2. Segundo Parametro: CallBack
app.listen(PORT, () => {
  console.log(`no se meta hpta: http://localhost:${PORT}`)
})
