'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sesi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sesi.init({
    tanggal: DataTypes.DATEONLY,
    waktu: DataTypes.TIME,
    materi: DataTypes.STRING,
    pemateri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sesi',
  });
  return sesi;
};