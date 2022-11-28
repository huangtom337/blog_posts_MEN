const express = require('express')
// const fsp = require('fs/promises')
// const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()
const dbURI = 'mongodb+srv://blogTest:blogTest@cluster0.isunfxk.mongodb.net/learnNodejs?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => app.listen(3000))
    .catch(err => console.error(err))

// set view engine
app.set('view engine', 'ejs')
// app.set('views', 'myviews') custom views file

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public')) //anything inside folder will be public to the front end

// routes
app.get('/', (req, res) => {
    res.redirect('blogs')
})

app.get('/about', (req, res) => {
    // fileName = path.join(__dirname, './views/about.html')
    // res.sendFile(fileName)
    res.render('about', {title: 'About'})
})

// blog routes using express Router
app.use('/blogs', blogRoutes)


app.use((req, res) => {
    // fileName = path.join(__dirname, './views/404.html')
    // res.status(404).sendFile(fileName)
    res.status(404).render('404', {title: '404'})
})