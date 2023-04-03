"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("sesis", [
      {
        tanggal: "2021-04-01",
        waktu: "09:00:00",
        materi: "Pengenalan NodeJS",
        pemateri: "Kalyana Putri",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tanggal: "2021-04-01",
        waktu: "13:00:00",
        materi: "Pengenalan ExpressJS",
        pemateri: "Fathin Muhashibi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tanggal: "2021-04-01",
        waktu: "15:00:00",
        materi: "Tutorial Sequelize",
        pemateri: "Naufal Baihaqi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tanggal: "2021-04-02",
        waktu: "09:00:00",
        materi: "Tutorial ReactJS",
        pemateri: "Kalyana Putri",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tanggal: "2021-04-02",
        waktu: "13:00:00",
        materi: "Pengenalan Typescript",
        pemateri: "Fathin Muhashibi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tanggal: "2021-04-02",
        waktu: "15:00:00",
        materi: "Pengenalan XAMPP",
        pemateri: "Naufal Baihaqi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
