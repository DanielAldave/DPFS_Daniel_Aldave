const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para manejar el formulario y renderizar pago.ejs
app.post('/pago', (req, res) => {
    res.render('pago'); // Renderiza la vista pago.ejs
});
const homeRoutes = require('./routes/home.routes.js')
app.get('/', homeRoutes)

app.get('/addProduct', (req, res) => {
    res.send('Aqui va el form')
  })

app.get('/login', (req, res) => {
    res.render('login')
  })

app.get('/producto', (req, res) => {
  res.render('producto')
})

app.get('/carrito', (req, res) => {
  res.render('carrito')
})

  app.get('/Registro', (req, res) => {
  res.render('Registro')
})

app.get('/login', (req, res) => {
  res.render('login')
})

 
// static files
app.use(express.static(path.join(__dirname, 'public')))

const indexRoutes = require('./routes/home.routes.js')
app.use('/', indexRoutes)

const productoRoutes = require('./routes/producto.routes.js')
app.use('/producto', productoRoutes)


//console.log('http://localhost:'+ port)
const db = require('./database/models');

app.listen(port, async()=>console.log(
  
  //await db.sequelize.sync({force: true}), 
  //console.log('All models were synchronized successfully'),
  
  "Servidor corriendo en el puerto: http://localhost:" + port
))

// Importar modelos

// const File = db.File;
// const User = db.User;