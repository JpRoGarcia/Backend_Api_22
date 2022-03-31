const { MongoClient } = require("mongodb");

// Connection URI
const uri = process.env.URI_MONGODB;


// Create a new MongoClient
const client = new MongoClient(uri);

const conectarDB = async () => {
      await client.connect();
      let DB = client.db(process.env.DB_MONGODB);
      return DB;
}

const leerDocumentos = async (nColeccion) => { 
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return coleccion.find().toArray()
 }

const agregarDocumento = async (nColeccion, informacion) => {
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return await coleccion.insertOne(informacion)  
}

const eliminarDocumento = async (nColeccion, filtro) => {
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return await coleccion.deleteOne(filtro)  
}

const modificarDocumento = async (nColeccion, filtro, nDocumento) => {
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return await coleccion.replaceOne(filtro, nDocumento)   
}

//run().catch(console.dir);
module.exports = { agregarDocumento, modificarDocumento, eliminarDocumento, leerDocumentos}