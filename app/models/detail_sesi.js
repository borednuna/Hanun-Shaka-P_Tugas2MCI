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
        foreignKey: 'id',
        as: 'fk_id_booking'
      });
      detail_sesi.belongsTo(models.sesi, {
        foreignKey: 'id',
        as: 'fk_id_sesi'
      });
    }
  }
  detail_sesi.init({
    booking: DataTypes.INTEGER,
    sesi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_sesi',
  });
  return detail_sesi;
};