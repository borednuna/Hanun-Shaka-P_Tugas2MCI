const { seating } = require('../models');

const getAllSeating = () => {
  return seating.findAll(
      {
      attributes: ['st_id_sesi', 'ketersediaan', 'baris', 'kolom', 'harga_seat']
      }
  );
}

const getSeatingById = (id) => {
  return seating.findOne(
      {
      where: {id: id},
      attributes: ['st_id_sesi', 'ketersediaan', 'baris', 'kolom', 'harga_seat']
      }
  );
}

const getSeatingBySesi = (sesi) => {
  return seating.findAll(
      {
      where: {st_id_sesi: sesi},
      attributes: ['st_id_sesi', 'ketersediaan', 'baris', 'kolom', 'harga_seat']
      }
  );
}

const getSeatingByKetersediaan = (ketersediaan) => {
  return seating.findAll(
      {
      where: {ketersediaan: ketersediaan},
      attributes: ['st_id_sesi', 'ketersediaan', 'baris', 'kolom', 'harga_seat']
      }
  );
}

const getSeatingByBaris = (baris) => {
  return seating.findAll(
      {
      where: {baris: baris},
      attributes: ['st_id_sesi', 'ketersediaan', 'baris', 'kolom', 'harga_seat']
      }
  );
}

const getSeatingByHargaSeat = (harga_seat) => {
  return seating.findAll(
      {
      where: {harga_seat: harga_seat},
      attributes: ['st_id_sesi', 'ketersediaan', 'baris', 'kolom', 'harga_seat']
      }
  );
}

const createSeating = (data) => {
  return seating.create(data);
}

const updateSeating = (id, data) => {
  return seating.update(data, {where: {id: id}});
}

const deleteSeating = (id) => {
  return seating.destroy({where: {id: id}});
}

module.exports = {
  getAllSeating,
  getSeatingById,
  getSeatingBySesi,
  getSeatingByKetersediaan,
  getSeatingByBaris,
  getSeatingByHargaSeat,
  createSeating,
  updateSeating,
  deleteSeating
}
