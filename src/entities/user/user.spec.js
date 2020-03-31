const buildUser = require("./");
const buildFakeUser = require("../../../test/buildFakeUser");

describe("User entity", () => {
  it("must have an id", () => {
    const user = buildFakeUser({ id: null });
    expect(() => buildUser(user)).toThrowError("An ID is required.");
  });

  it("must have an email address", () => {
    const user = buildFakeUser({ email: null });
    expect(() => buildUser(user)).toThrowError("An email address is required.");
  });

  it("must have a valid email address", () => {
    const user = buildFakeUser({ email: "test1234" });
    expect(() => buildUser(user)).toThrowError(
      "Please provide a valid email address."
    );
  });

  it("must have a password", () => {
    const user = buildFakeUser({ password: null });
    expect(() => buildUser(user)).toThrowError("A password is required.");
  });

  it("must have both mathing password fields", () => {
    const user = buildFakeUser({ confirmPassword: null });
    expect(() => buildUser(user)).toThrowError(
      "The confirm password field is required."
    );
  });
});
