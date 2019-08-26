const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors')
const toyRoutes= require('./api/toy/toyRoutes')
const userRoutes = require('./api/user/userRoutes')
const authRoutes = require('./api/auth/authRoutes')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))

app.use(session({
    secret: 'Puki Muki',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

//Routes
app.use('/api/toy', toyRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on ${port}`))