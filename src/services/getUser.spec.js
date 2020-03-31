const buildUser = require("../entities/user");
const buildGetUser = require("./getUser");
const buildFakeUser = require("../../test/buildFakeUser");
// const mockDatabase = require("../../test/mockDatabase");
const db = require("../db");

describe("Service: Getting users", () => {
  const getUserService = buildGetUser(db);
  it("must return the user searching via email", async () => {
    // Add user
    const userDetails = buildFakeUser();
    const user = buildUser(userDetails);
    await db.insertOne(user);
    // Look the user up
    expect(await getUserService(userDetails.email)).toHaveProperty(
      "id",
      "email",
      "password"
    );
  });
});
