const { connect } = require("../config/connection.js");
var connection = require("../config/connection.js")


// When we create a row in our sql command, the usual query that we write for this 
// is "INSERT INTO 'table name' (the column name/s we want to add a value in) VALUES (??/s)"
// Those questions marks are used are place holders so that when we do specify value/s
// this will function will specify the number ?? we need so that we can use it in our query
function questionMarks(num){   
    var arr = [];

    for(let i=0; i<num; i++){
        arr.push("?")
    }

    return arr.toString();
}

//When we want to update a value in our database, we have to specify which column we want
// to update as well as what we want to change that value to. In sql we would write that as 
// such "Column Name = Value we want to change", but in javascript the only way for us 
// to structure this data is an object. We need a way for us to conver our object
// into string that sql can read. This function does just that. 
function convertToSql(ob){
    var arr = [];

    for(key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value ==="string" && value.indexOf(" ")>=0){
                value = "'" + value + "'"
            }
        }

        arr.push(key + "=" + value)
    }

    return arr.toString();
}

var orm = {
    selectAll:function(table,cb){
        var query =  `SELECT * FROM ${table};`;
        connection.query(query,function(err,result){
            if(err) throw err;
            cb(result)
        })
    },
    insertOne:function(table,cols,vals,cb){
        var query = 'INSERT INTO' + table;

        query+=" (";
        query+=cols.toString();
        query+="} ";
        query+= "VALUES (";
        query+=questionMarks(vals.length)
        query+= ") ";

        console.log(query)
        connection.query(query,vals,function(err,result){
            if(err) throw err

            cb(result)
        })
    },
    updateOne:function(table,objColVals,condition,cb){
        var query = "UPDATE " + table;
        query+=" SET ";
        query+= convertToSql(objColVals);
        query+=" WHERE ";
        query+= condition;

        console.log(query)
        connection.query(query,function(err,result){
            if(err) throw err; 
            cb(result)
        })

    },
}