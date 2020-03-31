module.exports = deleteUser => async req => {
  try {
    const { id } = req.body;
    const status = await deleteUser(id);
    return {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 200,
      body: {
        status
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
