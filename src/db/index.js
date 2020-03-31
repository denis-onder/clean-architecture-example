const mongodb = require("mongodb");
const dbInterface = require("./interface");
const client = new mongodb.MongoClient("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = async () => {
  if (!client.isConnected()) await client.connect();
  return client.db("cleanarchitecture");
};

module.exports = dbInterface(connection);
