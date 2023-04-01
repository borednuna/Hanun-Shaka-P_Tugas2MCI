'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_sesi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_sesi.belongsTo(models.booking, {
        foreignKey: 'id_booking',
        as: 'id_booking'
        })
      detail_sesi.belongsTo(models.sesi, {
        foreignKey: 'id_sesi',
        as: 'id_sesi'
        })
    }
  }
  detail_sesi.init({
    id_booking: DataTypes.INTEGER,
    id_sesi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_sesi',
  });
  return detail_sesi;
};