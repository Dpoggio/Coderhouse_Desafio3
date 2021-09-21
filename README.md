# Servidor con Express

Desafio 3 del curso Backend de Coderhouse

## Instalar dependencias

npm install

## Iniciar el servidor

node ./server.js

## Obtener un listado de productos

### Request

`GET /productos`

    curl -i http://localhost:8080/productos

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 278

    [{"title":"Escuadra","price":123.45,"thumbnail":"https://icon.foo.bar.escuadra.png","id":1},{"title":"Planeta","price":345.67,"thumbnail":"https://icon.foo.bar.planeta.png","id":3},{"title":"Computadora","price":789.56,"thumbnail":"https://icon.foo.bar.computadora.png","id":4}]

## Obtener un producto aleatorio

### Request

`GET /productoRandom`

    curl -i http://localhost:8080/productoRandom

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 90

    {"title":"Escuadra","price":123.45,"thumbnail":"https://icon.foo.bar.escuadra.png","id":1}