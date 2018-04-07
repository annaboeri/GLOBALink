const 
    dotenv = require('dotenv').load()
    express = require('express'),
    app = express(),
    logger = require ('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project-4-api'
    PORT = process.env.port || 3001

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || 'Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.json({message: "API Root"})
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})