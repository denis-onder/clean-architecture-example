const buildAddUser = require("./addUser");
const buildEditUser = require("./editUser");
const buildFakeUser = require("../../test/buildFakeUser");
const db = require(process.env.NODE_ENV === "test"
  ? "../../test/mockDatabase"
  : "../db");

describe("Service: Editing users", () => {
  const addUserService = buildAddUser(db);
  const editUserService = buildEditUser(db);
  it("must return the inserted user", async () => {
    const [info, changes] = [buildFakeUser(), buildFakeUser()];
    const user = await addUserService(info);
    let result = await editUserService(user.id, {
      email: changes.email,
      password: changes.password,
      confirmPassword: changes.confirmPassword
    });
    expect(result).toHaveProperty("id", "email", "password");
    // Check that the returned values do not match the generated values
    Object.keys(result)
      .filter(k => k !== "id")
      .forEach(k => expect(result[k]).not.toBe(user[k]));
  });
});
