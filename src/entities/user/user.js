/**
 * Export a function which will return a function
 * responsible for creating the user.
 *
 * The returned function shall be responsible for
 * all the necesary logic for creation.
 *
 * That includes input validation, etc...
 *
 * The generator function itself is responsible
 * for taking in any dependencies and injecting
 * them into the returned function
 */
module.exports = function buildUserGenerator({ uuid, bcrypt }) {
  return ({ id = uuid.v4(), email, password, confirmPassword } = {}) => {
    const regexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!id) throw new Error("An ID is required.");
    if (!email) throw new Error("An email address is required.");
    if (!regexp.test(email))
      throw new Error("Please provide a valid email address.");
    if (!password) throw new Error("A password is required.");
    if (!confirmPassword)
      throw new Error("The confirm password field is required.");
    if (password.length < 8)
      throw new Error("Your password must be more than 8 characters long.");
    if (password !== confirmPassword)
      throw new Error("Your passwords are not matching.");
    // If everything passes, return an immutable object
    return Object.freeze({
      id,
      email,
      password: bcrypt.hashSync(password, 14)
    });
  };
};
