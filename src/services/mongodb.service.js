const { MongoClient, ObjectId } = require("mongodb");
// Connection URI
const uri = process.env.URI_MONGODB;
// Create a new MongoClient
const client = new MongoClient(uri);

const conectarDB = async () => {
      await client.connect();
      let DB = client.db(process.env.DB_MONGODB);
      return DB;
}

/**
 * COnvirtiendo el filtro._id en un objetoId
 * @param {*} filtro 
 * @param {*} nuevoDocumento 
 * @param {*} esConsulta
 */
const obtenerFiltroId = (filtro, nuevoDocumento, esConsulta = false) => { 
  if (esConsulta) {
    if(filtro && filtro._id){
      filtro._id = new ObjectId(filtro._id)
    }
  } else{
    if(filtro && filtro._id){
      filtro._id = new ObjectId(filtro._id)
      if (nuevoDocumento) { //validacion(nuevoDocumento != null) && nuevoDocumento!=undefined && nuevoDocumento!=false)
        nuevoDocumento._id = filtro._id
      }
      return // Se sale del metodo
    }else // cuando  obneterFIltroId se invoca desde (modificar o  elminar) y el -id no esta definido se chinga
    {
      throw new Error("Id Obligatorio")
    }  
  }
 }

const leerDocumentos = async (nColeccion, filtro) => { 
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  filtro = filtro ? filtro : {}
  obtenerFiltroId(filtro, null, true) //Se invoca para ceuando sea counsulta para usuario espesifico
  return coleccion.find().toArray()
 }

const agregarDocumento = async (nColeccion, informacion) => {
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return await coleccion.insertOne(informacion)  
}

const eliminarDocumento = async (nColeccion, filtro) => {
  obtenerFiltroId(filtro)
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return await coleccion.deleteOne(filtro)  
}

const modificarDocumento = async (nColeccion, filtro, nDocumento) => {
  obtenerFiltroId(filtro, nDocumento)
  let db = await conectarDB();
  let coleccion = db.collection(nColeccion)
  return await coleccion.replaceOne(filtro, nDocumento)   
}
//run().catch(console.dir);
module.exports = { agregarDocumento, modificarDocumento, eliminarDocumento, leerDocumentos}