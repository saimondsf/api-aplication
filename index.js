const express = require('express')
const res = require('express/lib/response')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

app.route('/').get((req, res) => {
    res.send('Hello')
})

app.route('/about').get((req, res) => {
    res.send('About')
})

app.route('/').post((req, res) => {
    console.log(req.body)
    res.send(req.body)
})