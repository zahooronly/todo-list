// import { auth, createUserWithEmailAndPassword } from "@/Config/firebase.config";
// import React, { useState } from "react";
// import styles from "../../../Styles/signup.module.css"; // Import your module CSS

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const emailHandler = (e: any) => {
//     setEmail(e.target.value);
//   };

//   const passwordHandler = (e: any) => {
//     setPassword(e.target.value);
//   };

//   const userRegisterHandler = async (event: any) => {
//     event.preventDefault();
//     setEmail("");
//     setPassword("");
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       alert("New user registered: " + user.uid);
//     } catch (error: any) {
//       alert("Error occurred: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.background}>
//       <div className={styles.container}>
//         <h1>Register here</h1>
//         <div>
//           <input
//             type="email"
//             placeholder="you@your.com"
//             onChange={emailHandler}
//             value={email}
//           />
//           <input
//             type="password"
//             placeholder="jantar mantar..."
//             onChange={passwordHandler}
//             value={password}
//           />
//           <button onClick={userRegisterHandler}>Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import "tailwindcss/tailwind.css";
// import styles from "@/styles/components/signup.module.css";

import { auth, createUserWithEmailAndPassword } from "@/Config/firebase.config";
import React, { useState } from "react";

const Signup = () => {
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
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-md shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Register here</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="you@your.com"
            className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="jantar mantar..."
            className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={passwordHandler}
            value={password}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={userRegisterHandler}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
