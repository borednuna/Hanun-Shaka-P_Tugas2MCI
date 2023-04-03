const { pembayaran } = require("../models");

const getAllPembayaran = () => {
  console.log(pembayaran);
  return pembayaran.findAll({
    attributes: ["id", "tanggal", "waktu", "method"],
  });
};

const getPembayaranById = (id) => {
  return pembayaran.findOne({
    where: { id: id },
    attributes: ["id", "tanggal", "waktu", "method"],
  });
};

const getPembayaranByTanggal = (tanggal) => {
  return pembayaran.findAll({
    where: { tanggal: tanggal },
    attributes: ["id", "tanggal", "waktu", "method"],
  });
};

const createPembayaran = (data) => {
  return pembayaran.create(data);
};

const updatePembayaran = (id, data) => {
  return pembayaran.update(data, {
    where: { id: id },
  });
};

const deletePembayaran = (id) => {
  return pembayaran.destroy({
    where: { id: id },
  });
};

module.exports = {
  getAllPembayaran,
  getPembayaranById,
  getPembayaranByTanggal,
  createPembayaran,
  updatePembayaran,
  deletePembayaran,
};
