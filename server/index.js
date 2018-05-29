const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const swag_controller = require('./controllers/swag_controller')
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express()
const checkForSession = require('./middlewares/checkForSession.js')


app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkForSession)


app.get('/api/swag', swag_controller.read)




app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})