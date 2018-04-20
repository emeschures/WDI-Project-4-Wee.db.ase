const
    dotenv = require('dotenv').load(),
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react-express-jwt',
    PORT = process.env.PORT || 3001,
    usersRoutes = require('./routes/users.js'),
    weediesRoutes = require('./routes/weedies.js'),
    API_KEY = process.env.API_KEY

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.json({ message: "API root." })
})

app.get('/api/cannabisdata', (req, res) => {
    httpClient.get(`strainapi.evanbusse.com/${API_KEY}/strains/search/all`).then((apiResponse) => {
        res.json(apiResponse.data)
    })
})

app.use('/api/users', usersRoutes)
app.use('/api/weed', weediesRoutes)

app.use('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}.`)
})