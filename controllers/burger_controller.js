var express = require('express')
var burger = require('../models/burger.js')


var router = express.Router()


router.get('/',function(req,res){
    burger.all(function(data){
       var hbObject = {
           burgers:data
       } 

       res.render('index',hbObject)
    });
})

router.post('/api/burgers',function(req,res){
    burger.insert(
        ['burger_name','devoured'],
        [req.body.name, req.body.devoured],
        function(result){
            res.json({id: result.insertId})
        })
})

router.put('/api/burgers/:id',function(req,res){
    var condition = `id = ${req.params.id}`

    burger.update(
        {devoured:req.body.devoured},
        condition,
        function(result){
            if(result.changedRows===0){
                res.sendStatus(404)
            }else{
                res.sendStatus(202)
            }
        })
})

module.exports = router;

