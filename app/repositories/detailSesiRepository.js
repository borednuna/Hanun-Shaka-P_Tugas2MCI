const { detail_sesi } = require("../models");

const getAllDetailSesi = () => {
  return detail_sesi.findAll({
    attributes: ["id", "booking", "sesi"],
  });
};

const getDetailSesiById = (id) => {
  return detail_sesi.findOne({
    where: { id: id },
    attributes: ["id", "booking", "sesi"],
  });
};

const getDetailSesiByBooking = (booking) => {
  return detail_sesi.findOne({
    where: { booking: booking },
    attributes: ["id", "booking", "sesi"],
  });
}

const getDetailSesiBySesi = (sesi) => {
  return detail_sesi.findOne({
    where: { sesi: sesi },
    attributes: ["id", "booking", "sesi"],
  });
}

const createDetailSesi = (data) => {
  return detail_sesi.create(data);
};

const updateDetailSesi = (id, data) => {
  return detail_sesi.update(data, {
    where: { id: id },
  });
};

const deleteDetailSesi = (id) => {
  return detail_sesi.destroy({
    where: { id: id },
  });
};

module.exports = {
  getAllDetailSesi,
  getDetailSesiById,
  getDetailSesiByBooking,
  getDetailSesiBySesi,
  createDetailSesi,
  updateDetailSesi,
  deleteDetailSesi,
};
