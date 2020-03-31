const buildAddUser = require("./addUser");
const buildDeleteUser = require("./deleteUser");
const buildFakeUser = require("../../test/buildFakeUser");
const db = require(process.env.NODE_ENV === "test"
  ? "../../test/mockDatabase"
  : "../db");

describe("Service: Deleting users", () => {
  const addUserService = buildAddUser(db);
  const deleteUserService = buildDeleteUser(db);
  it("must return the confirmation object", async () => {
    const user = await addUserService(buildFakeUser());
    const result = await deleteUserService(user.id);
    expect(result.deleted).toBe(true);
  });
});
