var express = require('express');
var models = require('../model'); 
var router = express.Router(); 

router.get('/readAll', function(req, res) {      
    models.seguimiento.findAll().  
    then(function(history) {  
        res.status(200).json(history);  
    }, function(error) {  
       res.status(500).send(error);  
    });  
});  

router.post('/add', (req, res)=>{
    console.log(req.body);
    var seg = models.seguimiento.build({        
        dosis: req.body.dosis,
        hora: req.body.hora,
        id_prod: req.body.id_prod,
        id_usu: req.body.id_usu
        
    });

    seg.save().then((data)=>{
        res.json({success: true, message: 'se ingreso el registro en seguimiento'});
    })
    .catch((error)=>{
        console.log(error);        
        res.json({success: false, message: 'There is a problem with the insert of seguimientos'});
    })
});

module.exports = router;