const userRepository = require('../repositories/userRepository');

const getAllUser = async () => {
  try {
    const users = userRepository.getAllUser();
    return users;
  }
  catch (error) {
    throw error;
  }
}

const getUserById = async (id) => {
  try {
    const user = userRepository.getUserById(id);
    return user;
  }
  catch (error) {
    throw error;
  }
}

const getUserByNama = async (nama) => {
  try {
    const users = userRepository.getUserByNama(nama);
    return users;
  }
  catch (error) {
    throw error;
  }
}

const createUser = async (data) => {
  try {
    const user = userRepository.createUser(data);
    return user;
  }
  catch (error) {
    throw error;
  }
}

const updateUser = async (id, data) => {
  try {
    const user = userRepository.updateUser(id, data);
    return user;
  }
  catch (error) {
    throw error;
  }
}

const deleteUser = async (id) => {
  try {
    const user = userRepository.deleteUser(id);
    return user;
  }
  catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUser,
  getUserById,
  getUserByNama,
  createUser,
  updateUser,
  deleteUser
}
