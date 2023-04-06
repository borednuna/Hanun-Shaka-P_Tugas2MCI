"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sesi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sesi.hasMany(models.seating, {
        foreignKey: "id",
        as: "st_id_sesi",
      });
      sesi.belongsToMany(models.booking, {
        through: "detail_booking",
        as: "bk_id_sesi",
        foreignKey: "id",
      });
      sesi.hasMany(models.detail_booking, {
        foreignKey: "id",
        as: "db_id_sesi",
      });
    }
  }
  sesi.init(
    {
      tanggal: DataTypes.DATE,
      materi: DataTypes.STRING,
      pemateri: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "sesi",
    }
  );
  return sesi;
};
