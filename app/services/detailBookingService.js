const detailBookingRepository = require("../repositories/detailBookingRepository");

const getAllDetailBooking = async () => {
  try {
    const detail_bookings = detailBookingRepository.getAllDetailBooking();
    return detail_bookings;
  } catch (error) {
    throw error;
  }
};

const getDetailBookingById = async (id) => {
  try {
    const detail_booking = detailBookingRepository.getDetailBookingById(id);
    return detail_booking;
  } catch (error) {
    throw error;
  }
};

const getDetailBookingByBooking = async (booking) => {
  try {
    const detail_booking = detailBookingRepository.getDetailBookingByBooking(booking);
    return detail_booking;
  } catch (error) {
    throw error;
  }
};

const getDetailBookingBySesi = async (sesi) => {
  try {
    const detail_booking = detailBookingRepository.getDetailBookingBySesi(sesi);
    return detail_booking;
  } catch (error) {
    throw error;
  }
};

const createDetailBooking = async (data) => {
  try {
    const detail_booking = detailBookingRepository.createDetailBooking(data);
    return detail_booking;
  } catch (error) {
    throw error;
  }
};

const updateDetailBooking = async (id, data) => {
  try {
    const detail_booking = detailBookingRepository.updateDetailBooking(id, data);
    return detail_booking;
  } catch (error) {
    throw error;
  }
};

const deleteDetailBooking = async (id) => {
  try {
    const detail_booking = detailBookingRepository.deleteDetailBooking(id);
    return detail_booking;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDetailBooking,
  getDetailBookingById,
  getDetailBookingByBooking,
  getDetailBookingBySesi,
  createDetailBooking,
  updateDetailBooking,
  deleteDetailBooking,
};
