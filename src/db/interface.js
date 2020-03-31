module.exports = connection => {
  async function findById(id) {
    const db = await connection();
    const result = await db.collection("users").findOne({ _id: id });
    return result;
  }
  async function findByEmail(email) {
    const db = await connection();
    const result = await db.collection("users").findOne({ email });
    return result;
  }
  async function insertOne(user) {
    const db = await connection();
    const result = await db
      .collection("users")
      .insertOne({ _id: user.id, ...user });
    return result.ops[0];
  }

  async function updateOne(id, updates) {
    const db = await connection();
    const result = await db
      .collection("users")
      .updateOne({ _id: id }, { $set: { ...updates } });
    return result.modifiedCount > 0 ? { id, ...updates } : null;
  }
  async function removeOne(id) {
    const db = await connection();
    const result = await db.collection("users").deleteOne({ _id: id });
    return result.deletedCount;
  }
  return Object.freeze({
    findById,
    findByEmail,
    insertOne,
    removeOne,
    updateOne
  });
};
