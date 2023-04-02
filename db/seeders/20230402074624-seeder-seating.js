'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('seatings', [
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'A',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'B',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'C',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'D',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'E',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'F',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'G',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'H',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'I',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'J',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'A',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'B',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'C',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'D',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'E',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'F',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'G',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'H',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'I',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'J',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',  
      baris: 5,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 1,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'A',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'B',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'C',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'D',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'E',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'F',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'G',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'H',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'I',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'J',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'A',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'B',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'C',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'D',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'E',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'F',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'G',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'H',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'I',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'J',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',  
      baris: 5,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 2,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'A',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'B',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'C',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'D',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'E',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'F',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'G',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'H',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'I',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'J',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'A',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'B',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'C',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'D',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'E',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'F',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'G',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'H',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'I',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'J',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',  
      baris: 5,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 3,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'A',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'B',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'C',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'D',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'E',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'F',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'G',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'H',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'I',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'J',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'A',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'B',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'C',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'D',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'E',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'F',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'G',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'H',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'I',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'J',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',  
      baris: 5,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 4,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'A',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'B',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'C',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'D',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'E',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'F',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'G',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'H',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'I',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'J',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'A',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'B',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'C',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'D',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'E',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'F',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'G',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'H',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'I',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'J',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',  
      baris: 5,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 5,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 1,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'A',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'B',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'C',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'D',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'E',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'F',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'G',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'H',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'I',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 2,
      kolom: 'J',
      harga_seat: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'A',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'B',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'C',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'D',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'E',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'F',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'G',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'H',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'I',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 3,
      kolom: 'J',
      harga_seat: 35000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'A',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'B',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'C',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'D',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'E',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'F',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'G',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'H',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'I',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 4,
      kolom: 'J',
      harga_seat: 25000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',  
      baris: 5,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 5,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'A',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'B',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'C',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'D',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'E',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'F',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'G',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'H',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'I',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fk_id_sesi: 6,
      ketersediaan: 'Tersedia',
      baris: 6,
      kolom: 'J',
      harga_seat: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
