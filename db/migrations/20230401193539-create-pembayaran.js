'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayarans', {
      id_pembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tgl_pembayaran: {
        type: Sequelize.DATE
      },
      waktu_pembayaran: {
        type: Sequelize.TIME
      },
      metode_pembayaran: {
        type: Sequelize.ENUM('Transfer', 'Ovo', 'Gopay', 'Dana')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pembayarans');
  }
};