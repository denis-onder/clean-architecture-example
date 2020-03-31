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
  update(doc) {
    let index;

    this.collection.forEach((v, i) => {
      if (v.id === doc.id) index = i;
    });

    this.collection.splice(index, 1, doc);

    return this.collection[index];
  }
  deleteOne(id) {
    const exists = this.findById(id);
    return { deletedCount: exists ? 1 : 0 };
  }
}

module.exports = new MockDatabase();
