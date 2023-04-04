const { sesi } = require("../models");

const getAllSesi = () => {
  console.log(sesi);
  return sesi.findAll({
    attributes: ["id", "tanggal", "materi", "pemateri"],
  });
};

const getSesiById = (id) => {
  return sesi.findOne({
    where: { id: id },
    attributes: ["id", "tanggal", "materi", "pemateri"],
  });
};

const getSesiByPemateri = (pemateri) => {
  return sesi.findAll({
    where: { pemateri: pemateri },
    attributes: ["id", "tanggal", "materi", "pemateri"],
  });
};

const getSesiByTanggal = (tanggal) => {
  return sesi.findAll({
    where: { tanggal: tanggal },
    attributes: ["id", "tanggal", "materi", "pemateri"],
  });
};

const createSesi = (data) => {
  return sesi.create(data);
};

const updateSesi = (id, data) => {
  return sesi.update(data, {
    where: { id: id },
  });
};

const deleteSesi = (id) => {
  return sesi.destroy({
    where: { id: id },
  });
};

module.exports = {
  getAllSesi,
  getSesiById,
  getSesiByPemateri,
  getSesiByTanggal,
  createSesi,
  updateSesi,
  deleteSesi,
};
