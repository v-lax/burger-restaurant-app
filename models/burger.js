var orm = require('../config/orm.js')

var burger = {
    all: function(cb){
        orm.selectAll('burger',function(res){
            cb(result);
        })
    },
    insert:function(cols,vals,cb){
        orm.insertOne('burger',cols,vals,function(res){
            cb(result);
        })
    },
    update:function(objColVals,condition,cb){
        orm.updateOne('burger',objColVals,condition,function(res){
            cb(res);
        })
    }
}