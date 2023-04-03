const { user } = require("../models");

const getAllUser = () => {
  return user.findAll({
    attributes: ["nama", "email", "nomor_telepon"],
  });
};

const getUserById = (id) => {
  return user.findOne({
    where: { id: id },
    attributes: ["nama", "email", "nomor_telepon"],
  });
};

const getUserByNama = (nama) => {
  return user.findOne({
    where: { nama: nama },
    attributes: ["nama", "email", "nomor_telepon"],
  });
};

const createUser = (data) => {
  return user.create(data);
};

const updateUser = (id, data) => {
  return user.update(data, {
    where: { id: id },
  });
};

const deleteUser = (id) => {
  return user.destroy({
    where: { id: id },
  });
};

module.exports = {
  getAllUser,
  getUserById,
  getUserByNama,
  createUser,
  updateUser,
  deleteUser,
};
