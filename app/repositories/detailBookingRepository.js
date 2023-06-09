const { detail_booking } = require("../models");

const getAllDetailBooking = () => {
  return detail_booking.findAll({
    attributes: ["id", "booking", "sesi"],
  });
};

const getDetailBookingById = (id) => {
  return detail_booking.findOne({
    where: { id: id },
    attributes: ["id", "booking", "sesi"],
  });
};

const getDetailBookingByBooking = (booking) => {
  return detail_booking.findOne({
    where: { booking: booking },
    attributes: ["id", "booking", "sesi"],
  });
};

const getDetailBookingBySesi = (sesi) => {
  return detail_booking.findOne({
    where: { sesi: sesi },
    attributes: ["id", "booking", "sesi"],
  });
};

const createDetailBooking = (data) => {
  return detail_booking.create(data);
};

const updateDetailBooking = (id, data) => {
  return detail_booking.update(data, {
    where: { id: id },
  });
};

const deleteDetailBooking = (id) => {
  return detail_booking.destroy({
    where: { id: id },
  });
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
