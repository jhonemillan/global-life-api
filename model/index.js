var path = require('path');
var config = require('../config/config');
var Sequelize = require('sequelize');

var sequelizeConnection = new Sequelize(  
    config.development.database,  
    config.development.username,  
    config.development.password, {  
        logging: console.log,  
        define: {  
            timestamps: false  
        }, dialect: config.development.dialect  
    }
);  

var db = {
  Sequelize: Sequelize,
  sequelize: sequelizeConnection
};

db.medicamento = db.sequelize.import('./medicamentos');
db.seguimiento = db.sequelize.import('./seguimiento');
db.braden = db.sequelize.import('./braden');

module.exports = db;