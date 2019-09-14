const express= require('express');

const app =express();

app.get('/', (requets, response) => {
    response.send('Hola mundo');
});

app.get('/data', (request,response) => {
    let salida={
        mensaje:'Esto es una salida'
    }
    response.send(salida);
});

app.listen(8080,()=> {
    console.log('Escuchando peticiones en el puerto 8080');
});