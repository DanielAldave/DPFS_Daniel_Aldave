const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/addProduct', (req, res) => {
    res.send('Aqui va el form')
  })

  app.get('/login', (req, res) => {
    res.send('Aqui va la vista del login')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//ejs config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// static files
app.use(express.static(path.join(__dirname, 'public')))



console.log('http://localhost:'+ port)