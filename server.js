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
const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY
const worldtimeApiKey = process.env.WORLDTIME_API_KEY

const twitterClient = new Twitter({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    bearer_token: bearerToken
      })


mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || 'Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/api/users', usersRoutes)


app.get('/api/id/:lat/:lng', (req, res) => {
    twitterClient.get(
        `https://api.twitter.com/1.1/trends/closest.json?lat=${req.params.lat}&long=${req.params.lng}`, (err, apiResponse) => {
            twitterClient.get(
                `https://api.twitter.com/1.1/trends/place.json?id=${apiResponse[0].woeid}`, (err, apiResponse) => {
                res.json(apiResponse[0].trends)
            })
        })        
})

app.get('/api/googleplaces/:lat/:lng', (req, res) => {
    httpClient.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.params.lat},${req.params.lng}&radius=500&key=${googlePlacesApiKey}`).then((apiResponse) => {
         res.json(apiResponse.data.results)
    })
})

app.get('/api/weather/:city', (req, res) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${weatherApiKey}&units=imperial`
    const options = { method: 'get', url: apiUrl }
    httpClient(options).then((apiResponse) => {
        res.json(apiResponse.data)
    })
})


app.get('/api/time/:lat/:lng', (req, res) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${req.params.lat},${req.params.lng}&timestamp=1331766000&key=AIzaSyDJ323ZJhLZohoR7aqMU4tqm2etoDbRPMA`
    const options = { method: 'get', url: apiUrl }
    httpClient(options).then((apiResponse) => {
        console.log(apiResponse.data.timeZoneId)
        res.json(apiResponse.data.timeZoneId)
    })
})

io.on('connection', socket => {

    // server gets new user when they connect and sends that user info to all clients
    socket.on('broadcast-user', (user) => {
        io.sockets.emit('broadcast-user', user)
    })
    // servers gets new message from a client and sends that message to all clients
    socket.on('broadcast-message', (msg) => {
        io.sockets.emit('broadcast-message', msg)
    })
    // when a client disconnects, the server get that info
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})


