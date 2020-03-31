module.exports = db => {
  return async function(email) {
    // 1. Check if the user exists within the database
    const exists = await db.findByEmail(email);
    if (!exists) throw new Error("This email address is not in use.");
    // 2. Return the inserted entry
    return exists;
  };
};
