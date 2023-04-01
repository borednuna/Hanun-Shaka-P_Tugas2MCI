'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      seating.belongsTo(models.sesi, {
        foreignKey: 'id_sesi',
        as: 'id_sesi'
        })
    }
  }
  seating.init({
    ketersediaan: DataTypes.ENUM('Tersedia', 'Terisi'),
    id_sesi: DataTypes.INTEGER,
    baris: DataTypes.INTEGER,
    kolom: DataTypes.CHAR,
    harga_seat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seating',
  });
  return seating;
};