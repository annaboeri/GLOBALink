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
const bearerToken = process.env.TWITTER_BEARER_ACCESS_TOKEN
const consumerKey = process.env.TWITTER_CONSUMER_KEY
const consumerSecret = process.env.TWITTER_CONSUMER_SECRET

const twitterClient = new Twitter({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    bearer_token: bearerToken
      })

app.get('/api/tweets/:lat/:lng', (req, res) => {
    console.log(req.params)
    var woeid 
    twitterClient.get(
        `https://api.twitter.com/1.1/trends/closest.json?lat=${req.params.lat}&long=${req.params.lng}`, (err, apiResponse) => {
            console.log(apiResponse || err)
            res.json(apiResponse[0].woeid)
            woeid = apiResponse[0].woeid
            console.log(woeid)
        })
        // .then(
        //     twitterClient.get(`https://api.twitter.com/1.1/trends/place.json?id=${woeid}`, (err, apiResponse) => {
        //         console.log(apiResponse || err)
        //        // res.json(apiResponse)
        //     })
        // )
            
})

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


io.on('connection', socket => {
    console.log("A new client has connected...")
    socket.on('broadcast-user', (user) => {
        console.log("user has been broadcasted to server")
        io.sockets.emit('broadcast-user', user)
    })
    socket.on('broadcast-message', (msg) => {
        console.log('New message: ', msg)
        io.sockets.emit('broadcast-message', msg)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})


