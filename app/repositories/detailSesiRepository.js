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
  createDetailSesi,
  updateDetailSesi,
  deleteDetailSesi,
};
