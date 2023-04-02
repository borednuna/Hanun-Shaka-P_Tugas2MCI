'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_sesis', {
      id_detail_sesi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_id_booking: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bookings',
          key: 'id_booking'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fk_id_sesi: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sesis',
          key: 'id_sesi'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('detail_sesis');
  }
};