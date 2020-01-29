const express = requrie('express')
const { join } = require('path')
const app = express()


app.use(express.static(join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.join())
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs'}))
app.set('view engine', '.hbs')

require('./routes')(app)

app.listen(3000)