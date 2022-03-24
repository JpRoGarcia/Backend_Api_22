// IMportacion del frameword de expree
const express = require('express')

//Creando la aplicacion de expree
const app = express()

// Integrado el router con la API
const router = require('./routers/index.router')
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Puerto donde se levantea el servidor web
const PORT = 3000

// Levantar la API que estara escuchado en el PUERTO 3000
//1. Primer Parametro: Puerto
//2. Segundo Parametro: CallBack
app.listen(PORT, () => {
  console.log(`no se meta hpta: http://localhost:${PORT}`)
})
