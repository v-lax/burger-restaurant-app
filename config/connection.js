// this file sets up the connection to our mysql database. 

var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"burgers_db"
})

connection.connect(function(err){
    if(err){
        console.log('Sorry it looks like there was an error connecting: '+err.stack)
        return
    }

    console.log('connected as id' + connection.threadId)
})

module.exports = connection; 