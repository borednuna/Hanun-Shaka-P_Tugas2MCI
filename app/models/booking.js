"use strict";
const { Model } = require("sequelize");
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
        foreignKey: "id",
        as: "bk_id_user",
      });
      booking.belongsTo(models.pembayaran, {
        foreignKey: "id",
        as: "bk_id_pembayaran",
      });
      booking.belongsToMany(models.sesi, {
        through: "detail_booking",
        as: "ss_id_booking",
        foreignKey: "id",
      });
      booking.hasMany(models.detail_booking, {
        foreignKey: "id",
        as: "db_id_booking",
      });
    }
  }
  booking.init(
    {
      user: DataTypes.INTEGER,
      pembayaran: DataTypes.INTEGER,
      harga_total: DataTypes.INTEGER,
      tgl_booking: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
