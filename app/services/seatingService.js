const seatingRepository = require("../repositories/seatingRepository");

const getAllSeating = async () => {
  try {
    const seatings = seatingRepository.getAllSeating();
    return seatings;
  } catch (error) {
    throw error;
  }
};

const getSeatingById = async (id) => {
  try {
    const seating = seatingRepository.getSeatingById(id);
    return seating;
  } catch (error) {
    throw error;
  }
};

const getSeatingBySesi = async (sesi) => {
  try {
    const seatings = seatingRepository.getSeatingBySesi(sesi);
    return seatings;
  } catch (error) {
    throw error;
  }
};

const getSeatingByKetersediaan = async (ketersediaan) => {
  try {
    const seatings = seatingRepository.getSeatingByKetersediaan(ketersediaan);
    return seatings;
  } catch (error) {
    throw error;
  }
};

const getSeatingByBaris = async (baris) => {
  try {
    const seatings = seatingRepository.getSeatingByBaris(baris);
    return seatings;
  } catch (error) {
    throw error;
  }
};

const getSeatingByHargaSeat = async (harga_seat) => {
  try {
    const seatings = seatingRepository.getSeatingByHargaSeat(harga_seat);
    return seatings;
  } catch (error) {
    throw error;
  }
};

const createSeating = async (data) => {
  try {
    const seating = seatingRepository.createSeating(data);
    return seating;
  } catch (error) {
    throw error;
  }
};

const updateSeating = async (id, data) => {
  try {
    const seating = seatingRepository.updateSeating(id, data);
    return seating;
  } catch (error) {
    throw error;
  }
};

const deleteSeating = async (id) => {
  try {
    const seating = seatingRepository.deleteSeating(id);
    return seating;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSeating,
  getSeatingById,
  getSeatingBySesi,
  getSeatingByKetersediaan,
  getSeatingByBaris,
  getSeatingByHargaSeat,
  createSeating,
  updateSeating,
  deleteSeating,
};
