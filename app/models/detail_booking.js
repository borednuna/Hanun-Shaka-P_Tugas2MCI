'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_booking.belongsTo(models.booking, {
        foreignKey: "id",
        as: "db_id_booking",
        });
      detail_booking.belongsTo(models.sesi, {
        foreignKey: "id",
        as: "db_id_sesi",
        });
    }
  }
  detail_booking.init({
  }, {
    sequelize,
    modelName: 'detail_booking',
  });
  return detail_booking;
};