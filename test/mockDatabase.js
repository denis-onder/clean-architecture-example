class MockDatabase {
  constructor() {
    this.collection = [];
  }
  findByEmail(email) {
    const res = this.collection.filter(v => v.email === email);
    if (res.length > 0) return res[0];
    return false;
  }
  insertUser(entry) {
    this.collection.push(entry);
    return entry;
  }
}

module.exports = new MockDatabase();
