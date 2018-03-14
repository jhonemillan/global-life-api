var express = require('express');
var seq = require('../model').sequelize; 
var router = express.Router(); 

exports.getUserInfo = function(req, res){
    debugger;
    seq.query('SELECT u.nom_usu, r.nom_rol FROM usuario u INNER JOIN rol r on u.id_rol = r.id_rol WHERE id_usu = :id_usu ',
    { replacements: { id_usu: req.params.id_usu }, 
    }
    ).spread(function(results, metadata) {
        res.send(JSON.stringify(results));
     });
}

