const detail_sesiRepository = require("../repositories/detailSesiRepository");

const getAllDetailSesi = async () => {
  try {
    const detail_sesis = detail_sesiRepository.getAllDetailSesi();
    return detail_sesis;
  } catch (error) {
    throw error;
  }
};

const getDetailSesiById = async (id) => {
  try {
    const detail_sesi = detail_sesiRepository.getDetailSesiById(id);
    return detail_sesi;
  } catch (error) {
    throw error;
  }
};

const createDetailSesi = async (data) => {
  try {
    const detail_sesi = detail_sesiRepository.createDetailSesi(data);
    return detail_sesi;
  } catch (error) {
    throw error;
  }
};

const updateDetailSesi = async (id, data) => {
  try {
    const detail_sesi = detail_sesiRepository.updateDetailSesi(id, data);
    return detail_sesi;
  } catch (error) {
    throw error;
  }
};

const deleteDetailSesi = async (id) => {
  try {
    const detail_sesi = detail_sesiRepository.deleteDetailSesi(id);
    return detail_sesi;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDetailSesi,
  getDetailSesiById,
  createDetailSesi,
  updateDetailSesi,
  deleteDetailSesi,
};
