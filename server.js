var express = require('express')

var PORT = process.env.PORT || 8080;

var app = express();

// middleware function for serving up our static css,js files
app.use(express.statis('public'))

// middleware function to help parse through json data that is sent to our server
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var exphbs = requre('express-handlebars')

app.engine('handlebars',exphbs({defaultLayout:"main"}))
app.set('view engine','handlebars')

var routes = require('./controllers/burgerController.js')

app.use(routes)

app.listen(PORT,function(){
    console.log("server listening on: https://localhost:"+PORT)
})