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

// import { auth, signInWithEmailAndPassword } from "@/Config/firebase.config";
// import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";
// import styles from "../../../Styles/signup.module.css";
// import Link from "next/link";
// import { browserSessionPersistence, setPersistence } from "firebase/auth";
// let userCredential: any = null;
// const Login = () => {
//   // let signedIn = false;
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const router = useRouter();

//   const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const userLoginHandler = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       await setPersistence(auth, browserSessionPersistence);
//       userCredential = await signInWithEmailAndPassword(auth, email, password);
//       // signedIn = true;
//       window.location.href = "/";
//     } catch (error: any) {
//       alert("Error occurred: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <div className={styles.fullContainer}>
//         <header>
//           <title>Login here</title>
//         </header>
//         <div className={styles.container}>
//           <div className={styles.internalDiv}>
//             <h1 className={styles.h1}>Login here.</h1>
//             <div className={styles.inputDive}>
//               <input
//                 type="email"
//                 placeholder="you@your.com"
//                 className={styles.input}
//                 onChange={emailHandler}
//                 value={email}
//               />
//               <input
//                 type="password"
//                 placeholder="your password"
//                 className={styles.input}
//                 onChange={passwordHandler}
//                 value={password}
//               />
//               <button className={styles.button} onClick={userLoginHandler}>
//                 Login
//               </button>
//             </div>
//             <span className={styles.span}>
//               New User?{" "}
//               <span className={styles.LoginHere}>
//                 <Link href={"/register"}>Register here.</Link>
//               </span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export const getUserCredential = () => userCredential;
// export default Login;

// export { useAuthEffect };

// "use client";
// import {
//   auth,
//   signInWithEmailAndPassword,
//   // onAuthStateChanged,
// } from "@/Config/firebase.config";
// import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";
// import styles from "../../../Styles/signup.module.css";
// import Link from "next/link";
// import { onAuthStateChanged } from "firebase/auth";
// // global
// // styles

// const Login = () => {
//   let signedIn = false;
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const emailHandler = (e: any) => {
//     setEmail(e.target.value);
//   };

//   const passwordHandler = (e: any) => {
//     setPassword(e.target.value);
//   };
//   const userLoginHandler = async (event: any) => {
//     event.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       signedIn = true;
//       window.location.href = "/";
//     } catch (error: any) {
//       alert("Error occurred: " + error.message);
//     }
//     const useAuthEffect = () => {
//       useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//           if (currentUser) {
//             // User is signed in
//             setUser(currentUser);
//           } else {
//             // User is not signed in
//             setUser(null);
//             window.location.href = "/login";
//             // router.push("/login"); // Redirect to login page or any other desired page
//           }
//         });

//         // Clean up the subscription when the component unmounts
//         return () => unsubscribe();
//       }, []);
//     };
//   };
//   return (
//     <div>
//       <div className={styles.fullContainer}>
//         <header>
//           <title>Login here</title>
//         </header>
//         <div className={styles.container}>
//           <div className={styles.internalDiv}>
//             <h1 className={styles.h1}>Login here.</h1>
//             <div className={styles.inputDive}>
//               <input
//                 type="email"
//                 placeholder="you@your.com"
//                 className={styles.input}
//                 onChange={emailHandler}
//                 value={email}
//               />
//               <input
//                 type="password"
//                 placeholder="your password"
//                 className={styles.input}
//                 onChange={passwordHandler}
//                 value={password}
//               />
//               <button className={styles.button} onClick={userLoginHandler}>
//                 Login
//               </button>
//             </div>
//             <span className={styles.span}>
//               New User?{" "}
//               <span className={styles.LoginHere}>
//                 <Link href={"/register"}>Register here.</Link>
//               </span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// export { useAuthEffect };
