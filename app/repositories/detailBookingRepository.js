const { detail_booking } = require("../models");

const getAllDetailBooking = () => {
  return detail_booking.findAll({
    attributes: ["id", "db_id_booking", "db_id_sesi"],
  });
};

const getDetailBookingById = (id) => {
  return detail_booking.findOne({
    where: { id: id },
    attributes: ["id", "db_id_booking", "db_id_sesi"],
  });
};

const getDetailBookingByBooking = (booking) => {
  return detail_booking.findOne({
    where: { db_id_booking: booking },
    attributes: ["id", "db_id_booking", "db_id_sesi"],
  });
};

const getDetailBookingBySesi = (sesi) => {
  return detail_booking.findOne({
    where: { db_id_sesi: sesi },
    attributes: ["id", "db_id_booking", "db_id_sesi"],
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
