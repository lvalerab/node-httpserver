const hbs=require('hbs');

hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras=texto.split(' ');
    palabras.forEach( (element, idx) => {
        palabras[idx]=element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});