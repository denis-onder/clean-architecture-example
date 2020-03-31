const services = require("../services");

const buildPostUser = require("./postUser");
const buildGetUser = require("./getUser");
const buildPatchUser = require("./patchUser");
const buildDeleteUser = require("./deleteUser");

const postUser = buildPostUser(services.addUser);
const getUser = buildGetUser(services.getUser);
const patchUser = buildPatchUser(services.editUser);
const deleteUser = buildDeleteUser(services.deleteUser);

module.exports = Object.freeze({
  postUser,
  getUser,
  patchUser,
  deleteUser
});
