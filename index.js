const express = require('express')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

app.route('/').get((req, res) => res.send("Oi"))

app.route('/:variable').get((req, res) => {
    res.send(req.params.variable)
})
