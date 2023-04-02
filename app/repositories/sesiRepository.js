// const sesi = require('../models/sesi.js');
const {sesi} = require('../models');

const getAllSesi = () => {
  console.log(sesi)
  return sesi.findAll(
    {
      attributes: ['tanggal', 'waktu', 'materi', 'pemateri']
    }
  );
}

const getSesiById = (id) => {
  return sesi.findOne(
    {
      where: {id: id},
      attributes: ['tanggal', 'waktu', 'materi', 'pemateri']
    }
  );
}

const getSesiByPemateri = (pemateri) => {
  return sesi.findAll(
    {
      where: {pemateri: pemateri},
      attributes: ['tanggal', 'waktu', 'materi', 'pemateri']
    }
  );
}

const getSesiByTanggal = (tanggal) => {
  return sesi.findAll(
    {
      where: {tanggal: tanggal},
      attributes: ['tanggal', 'waktu', 'materi', 'pemateri']
    }
  );
}

const getSesiByWaktu = (waktu) => {
  return sesi.findAll(
    {
      where: {waktu: waktu},
      attributes: ['tanggal', 'waktu', 'materi', 'pemateri']
    }
  );
}

const createSesi = (data) => {
  return sesi.create(data);
}

const updateSesi = (id, data) => {
  return sesi.update(data, {where: {id: id}});
}

const deleteSesi = (id) => {
  return sesi.destroy({where: {id: id}});
}

module.exports = {
  getAllSesi,
  getSesiById,
  getSesiByPemateri,
  getSesiByTanggal,
  getSesiByWaktu,
  createSesi,
  updateSesi,
  deleteSesi
}
