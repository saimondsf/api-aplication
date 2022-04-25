const express = require('express')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

app.route('/').post((req, res) => {
    const { nome, cidade } = req.body
    console.log(nome, cidade)
    res.send(nome)
})
