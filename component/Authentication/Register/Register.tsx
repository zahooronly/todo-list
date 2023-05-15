"use client";
import "tailwindcss/tailwind.css";
import styles from "../../../Styles/signup.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, createUserWithEmailAndPassword } from "@/Config/firebase.config";
import React, { useState } from "react";
import Link from "next/link";

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
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("You have been Registered Successfully!");
      window.location.href = "/login";
    } catch (error: any) {
      console.log("Error occurred: " + error.message);
    }
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.container}>
        <head>
          <title>Register here</title>
        </head>
        {/* <div className=" fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 flex justify-center items-center z-50"> */}
        {/* <div className="bg-white rounded-md shadow-md p-8"> */}
        <div className={styles.internalDiv}>
          <h1 className={styles.h1}>Register here.</h1>
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
            {/* <input
              type="password"
              placeholder="confirm your password"
              className={styles.input}
              // onChange={passwordHandlerConfirm}
              // value={confirm}
            /> */}
            <button className={styles.button} onClick={userRegisterHandler}>
              Register
            </button>
          </div>
          <span className={styles.span}>
            Already User?{" "}
            <span className={styles.LoginHere}>
              <Link href={"/login"}>Login here.</Link>
            </span>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
