module.exports = getUser => async req => {
  try {
    const { email } = req.body;
    const user = await getUser(email);
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
