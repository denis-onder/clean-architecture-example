module.exports = db => {
  return async function(id) {
    const deletedCount = await db.removeOne(id);
    if (deletedCount > 0) return { deleted: true, timestamp: Date.now() };
    return false;
  };
};
