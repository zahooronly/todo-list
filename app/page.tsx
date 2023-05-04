"use client";
import "tailwindcss/tailwind.css";
import React from "react";
import TodoList from "@/component/Todo/TodoList";
import Register from "@/component/Authentication/Register/Register";
const Home = () => {
  return (
    <div>
      <TodoList />
      {/* <Register /> */}
    </div>
  );
};

export default Home;
