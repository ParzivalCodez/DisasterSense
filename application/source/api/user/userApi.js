import axios from "axios";
import API_URL from "../api";

async function userLogin(emailAddress, password) {
  // Returns the account identifier
  let response = await axios.post(
    `http://192.168.1.62:3000/api/user/login-account`,
    {
      emailAddress: emailAddress,
      password: password,
    },
  );
  return response.data.accountIdentity.uuid;
}

export default userLogin;
