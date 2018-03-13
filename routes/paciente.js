var raw = require('../model/raw_queries');

var express = require('express');
var models = require('../model'); 
var router = express.Router(); 


router.get('/getListPacientes',(req, res)=>{ 
    
    models.paciente.findAll({
        where: {dis_pas : 1},
        order: ['nom_Pac']
    })
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log(err);
    })
    // models.sequelize.query(`select ciudad
    //                         from paciente`,
    // { type: sequelize.QueryTypes.SELECT})
    // .then(pacientes=>{
    //     res.status(200).json(pacientes);
    // })
    // .catch(err=>{
    //     console.log(err);
    // });
});

router.get('/getUserInfo',(req, res)=>{
    raw.getUserInfo(6061152)
})

module.exports = router; 