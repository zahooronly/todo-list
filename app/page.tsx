"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import TodoList from "@/component/Todo/TodoList";
import Register from "@/component/Authentication/Register/Register";
import Login from "@/component/Authentication/Login/Login";
const Home = () => {
  return (
    <div>
      {/* <Login /> */}
      <TodoList />
      {/* <Register /> */}
    </div>
  );
};

export default Home;
