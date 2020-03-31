const buildFakeUser = require("../../test/buildFakeUser");
const buildPostUser = require("./postUser");

describe("Controller: POST user", () => {
  const postUser = buildPostUser(user => user);
  it("must return a response of status 200, with the user set as it's payload", async () => {
    // Mock request and response
    const request = {
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        user: buildFakeUser()
      }
    };
    const expected = {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 200,
      body: request.body
    };
    const actual = await postUser(request);
    expect(actual.body.user).toBe(expected.body.user);
  });
});
