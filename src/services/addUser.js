const buildUser = require("../entities/user");

module.exports = db => {
  return async function(userInfo) {
    const user = buildUser(userInfo);
    // 1. Check if the user already exist within the database
    const exists = await db.findByEmail(user.email);
    if (exists) throw new Error("This email address is already in use.");
    // 2. Insert the new user into the database
    const entry = await db.insertOne(user);
    // 3. Return the inserted entry
    return entry;
  };
};
