// Dependencies & Packages Import
import { useState } from "react";
import axios, { Axios } from "axios";

function Registration() {
  // State Hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  function RegistrationHandler() {
    axios
      .post("http://localhost:3000/api/user/create-account", {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        password: password,
      })
      .then((r) => console.log(r));
  }

  return (
    <>
      <div>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder={"Enter First Name"}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder={"Enter Last Name"}
          onChange={(event) => setLastName(event.target.value)}
        />
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
        <button onClick={RegistrationHandler}>Create Account</button>
      </div>
    </>
  );
}

export default Registration;
