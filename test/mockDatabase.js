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
    let document;
    let index;

    this.collection.forEach((v, i) => {
      if (v.id === doc.id) {
        document = v;
        index = i;
      }
    });

    this.collection.splice(index, 1, doc);

    return this.collection[index];
  }
}

module.exports = new MockDatabase();
