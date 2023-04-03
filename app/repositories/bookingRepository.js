const { booking } = require("../models");

const getAllBooking = () => {
  console.log(booking);
  return booking.findAll({
    attributes: [
      "id",
      "user",
      "pembayaran",
      "harga_total",
      "tgl_booking",
      "waktu_booking",
    ],
  });
};

const getBookingById = (id) => {
  return booking.findOne({
    where: { id: id },
    attributes: [
      "id",
      "user",
      "pembayaran",
      "harga_total",
      "tgl_booking",
      "waktu_booking",
    ],
  });
};

const getBookingByUser = (user) => {
  return booking.findAll({
    where: { user: user },
    attributes: [
      "id",
      "user",
      "pembayaran",
      "harga_total",
      "tgl_booking",
      "waktu_booking",
    ],
  });
};

const getBookingByTanggal = (tanggal) => {
  return booking.findAll({
    where: { tgl_booking: tanggal },
    attributes: [
      "id",
      "user",
      "pembayaran",
      "harga_total",
      "tgl_booking",
      "waktu_booking",
    ],
  });
};

const createBooking = (data) => {
  return booking.create(data);
};

const updateBooking = (id, data) => {
  return booking.update(data, {
    where: { id: id },
  });
};

const deleteBooking = (id) => {
  return booking.destroy({
    where: { id: id },
  });
};

module.exports = {
  getAllBooking,
  getBookingById,
  getBookingByUser,
  getBookingByTanggal,
  createBooking,
  updateBooking,
  deleteBooking,
};
