const bookingRepository = require('../repositories/bookingRepository');

const getAllBooking = async () => {
  try {
    const bookings = bookingRepository.getAllBooking();
    return bookings;
  }
  catch (error) {
    throw error;
  }
}

const getBookingById = async (id) => {
  try {
    const booking = bookingRepository.getBookingById(id);
    return booking;
  }
  catch (error) {
    throw error;
  }
}

const getBookingByUser = async (user) => {
    try {
        const bookings = bookingRepository.getBookingByUser(user);
        return bookings;
    }
    catch (error) {
        throw error;
    }
}

const getBookingByTanggal = async (tanggal) => {
  try {
    const bookings = bookingRepository.getBookingByTanggal(tanggal);
    return bookings;
  }
  catch (error) {
    throw error;  
  }
}

const createBooking = async (data) => {
  try {
    const booking = bookingRepository.createBooking(data);
    return booking;
  }
  catch (error) {
    throw error;
  }
}

const updateBooking = async (id, data) => {
  try {
    const booking = bookingRepository.updateBooking(id, data);
    return booking;
  }
  catch (error) {
    throw error;
  }
}

const deleteBooking = async (id) => {
  try {
    const booking = bookingRepository.deleteBooking(id);
    return booking;
  }
  catch (error) {
    throw error;
  }
}

module.exports = {
  getAllBooking,
  getBookingById,
  getBookingByUser,
  getBookingByTanggal,
  createBooking,
  updateBooking,
  deleteBooking
}
