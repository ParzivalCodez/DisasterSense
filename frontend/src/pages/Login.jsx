import { useState } from "react";
import axios from "axios";

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandler() {
    let fetchedProfile = await axios
      .post("http://localhost:3000/api/user/login-account", {
        emailAddress: emailAddress,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userId", res.data.accountIdentity.uuid);
      });
  }

  return (
    <>
      <div>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder={"Enter Email Address"}
          onChange={(event) => setEmailAddress(event.target.value)}
        />
        <input
          type="text"
          placeholder={"Enter Password"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={loginHandler}>Create</button>
      </div>
    </>
  );
}

export default Login;
