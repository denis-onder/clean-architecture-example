const buildUser = require("./");

describe("User entity", () => {
  // Create a user
  const userInfo = require("../../../test/dummyData.json");
  const user = buildUser(userInfo.user);
  // Run the test suite against the user
  it("must have an id", () => {
    expect(user.id).toBeDefined();
  });

  it("must have an email address", () => {
    expect(user.email).toBe(userInfo.user.email);
  });

  it("must return an encrypted password", () => {
    expect(user.password).toBeTruthy();
    expect(user.password).not.toBe(userInfo.user.password);
  });
});
