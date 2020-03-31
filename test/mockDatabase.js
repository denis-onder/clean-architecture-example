class MockDatabase {
  constructor() {
    this.collection = [];
  }
  findByEmail(email) {
    const res = this.collection.filter(v => v.email === email);
    if (res.length > 0) return res[0];
    return null;
  }
  findById(id) {
    const res = this.collection.filter(v => v.id === id);
    if (res.length > 0) return res[0];
    return null;
  }
  insertOne(entry) {
    this.collection.push(entry);
    return entry;
  }
  updateOne(id, doc) {
    const entry = this.findById(id);
    if (!entry) return { modifiedCount: 0 };
    let index = this.collection.indexOf(entry);

    this.collection.splice(index, 1, doc);

    return this.collection[index];
  }
  removeOne(id) {
    const user = this.findById(id);
    if (!user) return 0;
    this.collection.splice(this.collection.indexOf(user), 1);
    return 1;
  }
}

module.exports = new MockDatabase();
