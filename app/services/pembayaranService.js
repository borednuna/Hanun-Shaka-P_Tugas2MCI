const pembayaranRepository = require('../repositories/pembayaranRepository');

const getAllPembayaran = async () => {
  try {
    const pembayarans = pembayaranRepository.getAllPembayaran();
    return pembayarans;
  }
  catch (error) {
    throw error;
  }
}

const getPembayaranById = async (id) => {
  try {
    const pembayaran = pembayaranRepository.getPembayaranById(id);
    return pembayaran;
  }
  catch (error) {
    throw error;
  }
}

const getPembayaranByTanggal = async (tanggal) => {
  try {
    const pembayarans = pembayaranRepository.getPembayaranByTanggal(tanggal);
    return pembayarans;
  }
  catch (error) {
    throw error;  
  }
}

const createPembayaran = async (data) => {
  try {
    const pembayaran = pembayaranRepository.createPembayaran(data);
    return pembayaran;
  }
  catch (error) {
    throw error;
  }
}

const updatePembayaran = async (id, data) => {
  try {
    const pembayaran = pembayaranRepository.updatePembayaran(id, data);
    return pembayaran;
  }
  catch (error) {
    throw error;
  }
}

const deletePembayaran = async (id) => {
  try {
    const pembayaran = pembayaranRepository.deletePembayaran(id);
    return pembayaran;
  }
  catch (error) {
    throw error;
  }
}

module.exports = {
  getAllPembayaran,
  getPembayaranById,
  getPembayaranByTanggal,
  createPembayaran,
  updatePembayaran,
  deletePembayaran
}
