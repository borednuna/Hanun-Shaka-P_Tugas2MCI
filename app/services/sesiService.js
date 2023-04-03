const sesiRepository = require("../repositories/sesiRepository");

const getAllSesi = async () => {
  try {
    const sesis = sesiRepository.getAllSesi();
    return sesis;
  } catch (error) {
    throw error;
  }
};

const getSesiById = async (id) => {
  try {
    const sesi = sesiRepository.getSesiById(id);
    return sesi;
  } catch (error) {
    throw error;
  }
};

const getSesiByPemateri = async (pemateri) => {
  try {
    const sesis = sesiRepository.getSesiByPemateri(pemateri);
    return sesis;
  } catch (error) {
    throw error;
  }
};

const getSesiByTanggal = async (tanggal) => {
  try {
    const sesis = sesiRepository.getSesiByTanggal(tanggal);
    return sesis;
  } catch (error) {
    throw error;
  }
};

const getSesiByWaktu = async (waktu) => {
  try {
    const sesis = sesiRepository.getSesiByWaktu(waktu);
    return sesis;
  } catch (error) {
    throw error;
  }
};

const createSesi = async (data) => {
  try {
    const sesi = sesiRepository.createSesi(data);
    return sesi;
  } catch (error) {
    throw error;
  }
};

const updateSesi = async (id, data) => {
  try {
    const sesi = sesiRepository.updateSesi(id, data);
    return sesi;
  } catch (error) {
    throw error;
  }
};

const deleteSesi = async (id) => {
  try {
    const sesi = sesiRepository.deleteSesi(id);
    return sesi;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSesi,
  getSesiById,
  getSesiByPemateri,
  getSesiByTanggal,
  getSesiByWaktu,
  createSesi,
  updateSesi,
  deleteSesi,
};
