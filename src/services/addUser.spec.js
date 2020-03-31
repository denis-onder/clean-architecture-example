const buildAddUser = require("./addUser");
const buildFakeUser = require("../../test/buildFakeUser");
// const mockDatabase = require("../../test/mockDatabase");
const db = require("../db");

describe("Service: Adding users", () => {
  const service = buildAddUser(db);
  it("must return the inserted user", async () => {
    const user = buildFakeUser();
    const result = await service(user);
    expect(result).toHaveProperty("id", "email", "password");
  });
});
