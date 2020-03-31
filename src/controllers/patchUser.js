module.exports = editUser => async req => {
  try {
    const { user, updates } = req.body;
    const updated = await editUser(user.id, updates);
    return {
      headers: {
        "Content-Type": "application/json"
      },
      statusCode: 200,
      body: {
        user: updated
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
