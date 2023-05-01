import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "@/Config/firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const registerHandler = async (event: any) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // If registration is successful, you can access the user object like this:
      const user = userCredential.user;
      console.log("New user registered:", user.uid);
      // Redirect the user to the home page or a dashboard page
      // depending on your application.
    } catch (error: any) {
      alert("Error occurred: " + error.message);
    }
  };

  return (
    <div>
      <header>
        <title>Register here</title>
      </header>
      <body>
        <h1>Register here</h1>
        <div>
          <input
            type="email"
            placeholder="you@your.com"
            onChange={emailHandler}
            value={email}
          />
          <input
            type="password"
            placeholder="jantar mantar..."
            onChange={passwordHandler}
            value={password}
          />
          <button onClick={registerHandler}>Register</button>
        </div>
      </body>
    </div>
  );
};

export default Login;
