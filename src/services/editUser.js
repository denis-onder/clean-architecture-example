const makeUser = require("../entities/user");

module.exports = db => {
  return async function(id, changes) {
    // 1. Ensure that the ID does not change
    if (changes.id) throw new Error("You cannot change the ID of a user.");
    // 2. If a password's set to change, check the confirmation password and encrypt it
    // if (changes.password) {
    //   if (changes.password !== changes.confirmPassword) throw new Error();
    // }
    // 3. Check if the user does not exist within the database
    const user = await db.findById(id);
    if (!user) throw new Error("This email address is not in use.");
    // 4. Update the user with the changes object
    const updated = await db.update(makeUser({ ...user, ...changes }));
    return updated;
  };
};
