// "use client";
import "tailwindcss/tailwind.css";
import React from "react";
import TodoList from "@/component/Todo/TodoList";
import Register from "@/component/Authentication/Register/Register";
import Login from "@/component/Authentication/Login/Login";
// import { useRouter } from "next/router";
const Home = () => {
  // const router = useRouter();
  return (
    <div>
      <head>
        <title>todo.</title>
      </head>

      {/* <Login /> */}
      <TodoList />
      {/* <Register /> */}
    </div>
  );
};

export default Home;
