"use client";
import React, { useState, useEffect } from "react";
import Todo from "@/component/Todo";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "@/component/Config/firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";

const styles = {
  bg: `min-h-screen w-screen p-4 bg-gradient-to-r from-gray-600 to-gray-800`,
  heading: `text-4xl font-bold text-center text-gray-700 p-3`,
  container: `bg-slate-100 max-w-[60%] w-full m-auto rounded-[50px] shadow-2xl shadow-zinc-100/50 p-8`,
  form: `flex justify-between `,
  button: `border p-4 ml-2 sm:mt-0 bg-gray-900/70 text-white rounded-[20px]`,
  input: `border outline-gray-900/70 w-full text-xl p-3 rounded-[20px]`,
  count: `text-center p-4 text-bold text-xl`,
  li: `flex justify-between p-3 my-2`,
  liCompleted: `flex justify-between bg-slate-200 capitalize `,
  row: `flex`,
  text: `ml-2 cursor-pointer text-xl`,
  ul: ``,
  textCompleted: `ml-2 cursor-pointer line-through text-xl`,
};

const Home = () => {
  const [todo, setTodo] = useState<string[]>([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
  });

  const todoAdder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = formData.get("task") as string;
    if (!data) {
      alert("Please write some text first");
    } else {
      setTodo([...todo, data]);
    }
    event.currentTarget.reset();
  };

  return (
    <div className={styles.bg}>
      <head>
        <title>Todo List</title>
      </head>
      <div className={styles.container}>
        <h3 className={styles.heading}>Todo List</h3>
        <form className={styles.form} onSubmit={todoAdder}>
          <input
            type="text"
            className={styles.input}
            name="task"
            placeholder="Enter your task..."
          />
          <button className={styles.button} type="submit">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul className={styles.ul}>
          {todo.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={styles.count}>You have {todo.length} todos</p>
      </div>
    </div>
  );
};

export default Home;
