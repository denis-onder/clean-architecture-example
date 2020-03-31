const buildFakeUser = require("../../test/buildFakeUser");
const buildPatchUser = require("./patchUser");
const db = require(process.env.NODE_ENV === "test"
  ? "../../test/mockDatabase"
  : "../db");

describe("Controller: PATCH user", () => {
  const patchUser = buildPatchUser(user => user);
  it("must return a response of status 200, with the patched user set as it's payload", async () => {
    // Add user to database
    const user = buildFakeUser();
    await db.insertOne(user);
    // Mock request and response
    const request = {
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        user
      }
    };
    const expected = {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 200
    };
    const actual = await patchUser(request);
    expect(actual.statusCode).toBe(expected.statusCode);
    expect(actual.body.user).toBeTruthy();
  });
});
