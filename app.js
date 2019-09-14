const express= require('express');

const app =express();

/*Middleware*/
var staticOptions={
    dotfiles:'ignore',
    etag:false,
    extensions:['html','htm','js'],
    index:true,
    maxAge:'1d',
    redirect:false,
    setHeaders:function(res,path,stat) {
        res.set('x-timestamp',Date.now());
        res.set('x-powered-by','LFVB Node Server 1.0.0');
    }
};

app.use(express.static('./public')); //Este middleware sirve el contenido estatico de public

/*
app.get('/primera', (requets, response) => {
    response.send('Hola mundo');
});

app.get('/data', (request,response) => {
    let salida={
        mensaje:'Esto es una salida'
    }
    response.send(salida);
});
*/

app.listen(8080,()=> {
    console.log('Escuchando peticiones en el puerto 8080');
    console.log(`${__dirname}`)
});