const Contenedor = require('./contenedor.js')
const express = require('express')

/**** CONSTANTES ****/
const PORT = process.env.PORT || 8080
const ERROR_CODE = 500
const ERROR_MSG = 'Error interno'
const ARCHIVO_PRODUCTOS = 'resources/productos.txt'

/**** Inicio App ****/
const app = express()

const productos = new Contenedor(ARCHIVO_PRODUCTOS)

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

/**** Funciones ****/
function handleError(error, res) {
    console.error(error.stack);
    res.status(ERROR_CODE).json({
        error: ERROR_MSG
    });
};

/**** Rutas ****/
app.get('/productos', async (req, res) => {  
    try {
        const listaProductos = await productos.getAll()
        res.json(listaProductos)    
    } catch (error) {
        handleError(error, res)
    }
})

app.get('/productoRandom', async (req, res) => {  
    try {
        const listaProductos = await productos.getAll()
        const indiceAleatorio = Math.floor(Math.random()*listaProductos.length)
        res.json(listaProductos[indiceAleatorio])     
    } catch (error) {
        handleError(error, res)
    }
})
