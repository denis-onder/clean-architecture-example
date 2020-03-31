module.exports = db => {
  return async function(id) {
    const res = await db.deleteOne(id);
    if (res.deletedCount > 0) return { deleted: true, timestamp: Date.now() };
    return false;
  };
};
