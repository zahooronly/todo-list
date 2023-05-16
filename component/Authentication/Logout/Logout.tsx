import { auth } from "@/Config/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
const Logout = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/";
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Logout;
