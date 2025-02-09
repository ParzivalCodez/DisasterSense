import axios from "axios";

async function getRelativesLocationHandler(userId) {
  console.log(userId);
  let response = await axios.post(
    `http://192.168.1.62:3000/api/relatives/location/get-all`,
    {
      userId: userId,
    },
  );

  return response.data;
}

export default getRelativesLocationHandler;
