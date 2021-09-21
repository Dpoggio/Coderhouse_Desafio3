const Contenedor = require('./contenedor.js')
const express = require('express')

/**** CONSTANTES ****/
const PORT = 8080
const ERROR_CODE = 500
const ERROR_MSG = 'Error interno'
const ARCHIVO_PRODUCTOS = 'resources/productos.txt'

/**** Funciones ****/
function handleError(err, req, res, next) {
    console.error(err.stack);
    res.status(ERROR_CODE).send(ERROR_MSG);
};

/**** Inicio App ****/
const app = express()

const productos = new Contenedor(ARCHIVO_PRODUCTOS)

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))


/**** Rutas ****/
app.get('/testError', (req, res, next) => {  
    try{
        throw new Error("errooooor!!!")
    } catch (err) {
        next(err)
    }
})

app.get('/hello', (req, res, next) => {  
   res.send('Mundos')
})

app.get('/productos', async (req, res, next) => {  
    try {
        const listaProductos = await productos.getAll()
        res.json(listaProductos)    
    } catch (error) {
        next(error)
    }
})

app.get('/productoRandom', async (req, res, next) => {  
    try {
        const listaProductos = await productos.getAll()
        const indiceAleatorio = Math.floor(Math.random()*listaProductos.length)
        res.json(listaProductos[indiceAleatorio])     
    } catch (error) {
        next(error)
    }
})

app.use(handleError);