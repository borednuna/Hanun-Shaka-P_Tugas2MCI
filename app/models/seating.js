"use strict";
const { Model } = require("sequelize");
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
        foreignKey: "id",
        as: "st_id_sesi",
      });
    }
  }
  seating.init(
    {
      sesi: DataTypes.INTEGER,
      ketersediaan: DataTypes.ENUM("Tersedia", "Terisi"),
      baris: DataTypes.INTEGER,
      kolom: DataTypes.CHAR,
      harga_seat: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "seating",
    }
  );
  return seating;
};
