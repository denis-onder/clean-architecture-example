let collection = [];

module.exports = {
  findByEmail: email => {
    const res = collection.filter(v => v.email === email);
    if (res.length > 0) return res[0];
    return false;
  },
  insertUser: entry => {
    collection.push(entry);
    return entry;
  }
};
