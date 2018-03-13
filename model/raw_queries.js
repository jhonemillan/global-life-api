var express = require('express');
var seq = require('../model').sequelize; 
var router = express.Router(); 

exports.getUserInfo = function(id_user){
    debugger;
    sequelize.query('SELECT u.nom_usu, r.nom_rol FROM usuario u INNER JOIN rol r on u.id_rol = r.id_rol WHERE id_usu = :id_user ',
    { replacements: { id_usu: id_user }, type: sequelize.QueryTypes.SELECT }
    ).then(projects => {
    console.log(projects)
    }).catch((err)=>{console.log(err)});
}

