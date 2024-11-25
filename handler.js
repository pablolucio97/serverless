exports.fetchUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=2");
    const data = await response.json();
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data,
      }),
    };
  } catch (error) {
    console.log("Error at trying to fetch user: ", error);
  }
};
