module.exports = addUser => async req => {
  try {
    const user = await addUser(req.body.user);
    return {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 200,
      body: {
        user
      }
    };
  } catch (error) {
    console.log(error);
    return {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 400,
      body: {
        error: error.message
      }
    };
  }
};
