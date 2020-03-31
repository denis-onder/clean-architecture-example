const faker = require("faker");

module.exports = overrides => {
  const password = faker.internet.password();
  const user = {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    password,
    confirmPassword: password
  };
  return {
    ...user,
    ...overrides
  };
};
