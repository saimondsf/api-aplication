const express = require('express')
const res = require('express/lib/response')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

let author = 'Saimon'

app.route('/').get((req, res) => {
    res.send(author)
})

app.route('/').put((req, res) => {
    author = req.body
    res.send(author)
})