const 
    dotenv = require('dotenv').config(),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    logger = require ('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Twitter = require('twitter'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project-4-api'
    axios = require('axios'),
    httpClient = axios.create(),
    PORT = process.env.port || 3001,
    usersRoutes = require('./routes/users.js')

const weatherApiKey = process.env.WEATHER_API_KEY

// const twitterClient = new Twitter({
//         consumer_key: process.env.TWITTER_CONSUMER_KEY,
//         consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//         access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//         access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//       });

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || 'Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/api/users', usersRoutes)

app.get('/api/weather/:city', (req, res) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${weatherApiKey}&units=imperial`
    const options = { method: 'get', url: apiUrl }
    httpClient(options).then((apiResponse) => {
        console.log(apiResponse.data)
        res.json(apiResponse.data)
    })
})

// app.get('/api/twitter/:lat/:lng', (req, res) => {
//     console.log(process.env.TWITTER_CONSUMER_KEY)
//     twitterClient.get(`https://api.twitter.com/1.1/trends/closest.json?lat=${req.params.lat}&long=-${req.params.lat}`).then((apiResponse) => {

//       })
//       .catch(function (error) {
//         throw error;
//       }) 
// })
io.on('connection', socket => {
    console.log("A new client has connected...")
   // io.emit('new-user-connection', { boom: "BANANA!!" })

    // socket.on('new-message', (message) => {
    //     io.emit('broadcast-message', message)
    // })

    socket.on('change color', (color) => {
        console.log('Color changed to: ', color)
        io.sockets.emit('change color', color)
    })
    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})


