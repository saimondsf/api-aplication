const express = require('express')

const app = express()

app.listen('3000')


app.route('/').get((req, res) => {
    res.send('Hello')
})

app.route('/about').get((req, res) => {
    res.send('About')
})