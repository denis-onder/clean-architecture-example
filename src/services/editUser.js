const makeUser = require("../entities/user");

module.exports = db => {
  return async function(id, changes) {
    // 1. Ensure that the ID does not change
    if (changes.id) throw new Error("You cannot change the ID of a user.");
    // 2. Check if the user does not exist within the database
    const user = await db.findById(id);
    if (!user) throw new Error("User not found.");
    // 3. Update the user with the changes object
    const updated = await db.updateOne(
      user.id,
      makeUser({ ...user, ...changes })
    );
    return updated;
  };
};
