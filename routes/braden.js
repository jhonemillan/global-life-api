var express = require('express');
var models = require('../model'); 
var router = express.Router(); 

router.get('/getAll',(req, res)=>{
    console.log('entra')
    models.braden.findAll()
    .then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(500).send(err);
    }).catch((err)=>{console.log(err);});
});

router.post('/add',(req, res)=>{
    var val = models.braden.build({      
      Fecha: req.body.fecha,
      pielIntegra: req.body.pielIntegra,
      observacion_Piel: req.body.observacion_Piel,
      percepcion_sensorial: req.body.percepcion_sensorial,
      exposicion_humedad : req.body.exposicion_humedad,
      actividad: req.body.actividad,
      movilidad: req.body.movilidad,
      nutricion: req.body.nutricion,
      friccion_cizallamiento:  req.body.friccion_cizallamiento,
      puntajeTotal_Braden: req.body.puntajeTotal_Braden,
      observaciones_Braden: req.body.observaciones_Braden
    });

    val.save().then((datos)=> {
        res.status(200).send(datos);
        res.end();
    }).then((err)=>{
        res.json();
        res.end();
    });
});

module.exports = router; 