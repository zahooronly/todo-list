"use client";
import { auth, signInWithEmailAndPassword } from "@/Config/firebase.config";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "../../../Styles/signup.module.css";
// global
// styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };
  const userLoginHandler = async (event: any) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error: any) {
      alert("Error occurred: " + error.message);
    }
  };
  return (
    <div>
      <div className={styles.fullContainer}>
        <header>
          <title>Login here</title>
        </header>
        <div className={styles.container}>
          <div className={styles.internalDiv}>
            <h1 className={styles.h1}>Login here</h1>
            <div className={styles.inputDive}>
              <input
                type="email"
                placeholder="you@your.com"
                className={styles.input}
                onChange={emailHandler}
                value={email}
              />
              <input
                type="password"
                placeholder="your password"
                className={styles.input}
                onChange={passwordHandler}
                value={password}
              />
            </div>
            <button className={styles.button} onClick={userLoginHandler}>
              Login
            </button>
          </div>
        </div>
        {/* </div> */}
        {/* <div className={styles.container}>
        <header>
          <title>Login here</title>
        </header>
        <body>
          <h1>Login here</h1>
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
            <button onClick={userLoginHandler} className={styles.button}>
              Login
            </button>
          </div>
        </body> */}
      </div>
    </div>
  );
};

export default Login;
