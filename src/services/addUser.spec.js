const buildAddUser = require("./addUser");
const buildFakeUser = require("../../test/buildFakeUser");
const db = require(process.env.NODE_ENV === "test"
  ? "../../test/mockDatabase"
  : "../db");

describe("Service: Adding users", () => {
  const service = buildAddUser(db);
  it("must return the inserted user", async () => {
    const user = buildFakeUser();
    const result = await service(user);
    expect(result).toHaveProperty("id", "email", "password");
  });
});
