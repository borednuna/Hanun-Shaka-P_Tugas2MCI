'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id_booking: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id_user'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_pembayaran: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pembayarans',
          key: 'id_pembayaran'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      harga_total: {
        type: Sequelize.INTEGER
      },
      tanggal_booking: {
        type: Sequelize.DATEONLY
      },
      waktu_booking: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('bookings');
  }
};