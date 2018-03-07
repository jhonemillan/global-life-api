module.exports = function(sequelize, DataTypes){
    var paciente = sequelize.define("paciente", {
      iden_Pac: { type: DataTypes.STRING(50), primaryKey: true, autoIncrement: true, allowNull: false},
      nom_Pac: { type: DataTypes.STRING(50), allowNull: false}, 
      ape_Pac: { type: DataTypes.STRING(50)},
      dis_pas: { type: DataTypes.INTEGER(11)}
      
    });
  
    return paciente;
  };