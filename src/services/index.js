const buildAddUser = require("./addUser");
const buildGetUser = require("./getUser");
const buildEditUser = require("./editUser");
const buildDeleteUser = require("./deleteUser");
const database = require("../db");

const addUser = buildAddUser(database);
const getUser = buildGetUser(database);
const editUser = buildEditUser(database);
const deleteUser = buildDeleteUser(database);

module.exports = Object.freeze({
  addUser,
  getUser,
  editUser,
  deleteUser
});
