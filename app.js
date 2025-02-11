const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
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