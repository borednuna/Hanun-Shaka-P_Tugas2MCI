"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("seatings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sesi: {
        type: Sequelize.INTEGER,
        references: {
          model: "sesis",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      ketersediaan: {
        type: Sequelize.ENUM("Tersedia", "Terisi"),
      },
      baris: {
        type: Sequelize.INTEGER,
      },
      kolom: {
        type: Sequelize.CHAR,
      },
      harga_seat: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("seatings");
  },
};
