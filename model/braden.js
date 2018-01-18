// initialize database connection
module.exports = function(sequelize, DataTypes){
    var valoracion = sequelize.define("valoracion_seg_enfermeria", {
      Id_ValSegEnf: { type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true, allowNull: false},
      Fecha: { type: DataTypes.DATE, allowNull: false}, 
      pielIntegra: { type: DataTypes.BOOLEAN, allowNull: true},
      observacion_Piel: { type: DataTypes.STRING(800)},
      percepcion_sensorial: { type: DataTypes.INTEGER, allowNull: true}, 
      exposicion_humedad : { type: DataTypes.INTEGER, allowNull: true}, 
      actividad: { type: DataTypes.INTEGER, allowNull: true},
      movilidad: { type: DataTypes.INTEGER, allowNull: true},
      nutricion: { type: DataTypes.INTEGER, allowNull: true},
      friccion_cizallamiento:  { type: DataTypes.INTEGER, allowNull: true},
      puntajeTotal_Braden: { type: DataTypes.INTEGER, allowNull: true},
      observaciones_Braden: { type: DataTypes.STRING, allowNull: true},
      fecha_creacion: {type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.Now}
    });
  
    return valoracion;
  };
  
  