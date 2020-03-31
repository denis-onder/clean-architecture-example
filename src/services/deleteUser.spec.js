const buildAddUser = require("./addUser");
const buildDeleteUser = require("./deleteUser");
const buildFakeUser = require("../../test/buildFakeUser");
const mockDatabase = require("../../test/mockDatabase");

describe("Service: Deleting users", () => {
  const addUserService = buildAddUser(mockDatabase);
  const deleteUserService = buildDeleteUser(mockDatabase);
  it("must return the confirmation object", async () => {
    const user = await addUserService(buildFakeUser());
    const result = await deleteUserService(user.id);
    expect(result.deleted).toBe(true);
  });
});
