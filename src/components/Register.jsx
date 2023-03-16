import React, { useState, useEffect } from "react";
import { registerAccount } from "../apiAdapters";
import { saveToLocalStorage } from "../utils/localStorage";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function makeProfile(username, password) {
    try {
      const result = await registerAccount(username, password);

      if (result.token !== undefined) {
        saveToLocalStorage(result.token);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            makeProfile(username, password);
          }}
        >
          <h3>Username</h3>
          <input
            name="username"
            type="text"
            value={username}
            minLength="6"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <h3>Password</h3>
          <input
            name="password"
            type="password"
            value={password}
            minLength="8"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h3>Confirm Password</h3>
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            minLength="8"
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          {confirmPassword === password && password !== "" ? (
            <button type="submit">Submit</button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Register;
