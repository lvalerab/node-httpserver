const express= require('express');
const hbs=require('hbs');

const app =express();

/*Middleware*/

////////////////////////
//Servir contenidos estaticos
////////////////////////
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

app.use(express.static(__dirname+'/public')); //Este middleware sirve el contenido estatico de public

/*Hbs -- PAginas con handlebag */
//Parciales
hbs.registerPartials(__dirname+'/views/parciales');
//Configuracon
app.set('view engine', 'hbs');




/*Fin de hbs*/

app.get('/',(req,res)=> {
    res.render('home',{
        nombre:'Luis Fernando Valera Bernal',
        anyo: new Date().getFullYear()
    });
});

app.get('/help',(req,res)=> {
    res.render('help');
});

app.listen(8080,()=> {
    console.log('Escuchando peticiones en el puerto 8080');
    console.log(`${__dirname}`)
});