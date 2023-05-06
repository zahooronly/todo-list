"use client";
import "tailwindcss/tailwind.css";
import styles from "../../../Styles/signup.module.css";

import { auth, createUserWithEmailAndPassword } from "@/Config/firebase.config";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const userRegisterHandler = async (event: any) => {
    event.preventDefault();
    setEmail("");
    setPassword("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alert("New user registered: " + user.uid);
    } catch (error: any) {
      alert("Error occurred: " + error.message);
    }
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.container}>
        {/* <div className=" fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 flex justify-center items-center z-50"> */}
        {/* <div className="bg-white rounded-md shadow-md p-8"> */}
        <div className={styles.internalDiv}>
          <h1 className={styles.h1}>Register here</h1>
          <div className={styles.inputDive}>
            <input
              type="email"
              placeholder="you@your.com"
              className={styles.input}
              onChange={emailHandler}
              value={email}
            />
            {/* </div> */}
            {/* <div className={styles.inputDive}> */}
            <input
              type="password"
              placeholder="your password"
              className={styles.input}
              onChange={passwordHandler}
              value={password}
            />
            <input
              type="password"
              placeholder="confirm your password"
              className={styles.input}
              // onChange={passwordHandler}
              // value={password}
            />
          </div>
          <button className={styles.button} onClick={userRegisterHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
