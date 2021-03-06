const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const passport = require('passport')
require('./services/passport')
const router = require('./routes/index')


const app = express()

// middleware
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressValidator());
app.use(passport.initialize())

app.use('/', router);

// ERROR HANDLING

// export so we can start the app in start.js
module.exports = app