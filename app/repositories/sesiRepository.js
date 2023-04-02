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

module.exports = {
  getAllSesi
}
