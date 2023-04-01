'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'id_user'
        })
      booking.belongsTo(models.pembayaran, {
        foreignKey: 'id_pembayaran',
        as: 'id_pembayaran'
        })
    }
  }
  booking.init({
    id_user: DataTypes.INTEGER,
    id_pembayaran: DataTypes.INTEGER,
    harga_total: DataTypes.INTEGER,
    tanggal_booking: DataTypes.DATE,
    waktu_booking: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};