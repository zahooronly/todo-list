"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "@/Config/firebase.config";
import "tailwindcss/tailwind.css";
import styles from "../../../Styles/signup.module.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const userLoginHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You've been logged in Successfully");
      window.location.href = "/";
    } catch (error: any) {
      setError("You gotta wrong password/email");
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
            <h1 className={styles.h1}>Login here.</h1>
            {error && <p>{error}</p>}
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
              <button className={styles.button} onClick={userLoginHandler}>
                Login
              </button>
            </div>
            <span className={styles.span}>
              New User?{" "}
              <span className={styles.LoginHere}>
                <Link href={"/register"}>Register here.</Link>
              </span>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
