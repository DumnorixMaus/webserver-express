const express = require('express');
const app = express();
const hbs = require('hbs');
//const, por que nunca se van a modificar

//importa los helpers, los helpers se ejecutan cuando no existe una variable
// en el render de la pagina (datos como paramentros)
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    res.render('home', {
        nombre: 'Mauricio Hernandez L'
    });
});
app.get('/about', (req, res) => {
    //res.send('Hola Mundo');
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones del puerto ${ port }`);
});