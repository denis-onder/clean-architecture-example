const uuid = require("uuid");
const bcrypt = require("bcrypt");
const buildUserGenerator = require("./user");
const buildUser = buildUserGenerator({ uuid, bcrypt });

module.exports = buildUser;
