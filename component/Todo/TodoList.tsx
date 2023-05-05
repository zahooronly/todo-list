"use client";
import React, { useState, useEffect } from "react";
import Todo from "@/component/Todo";
import { AiOutlinePlus } from "react-icons/ai";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/Config/firebase.config";
import styles from "../../Styles/todolist.module.css";
// const styles = {
//   bg: `min-h-screen w-screen p-4 bg-gradient-to-r from-gray-600 to-gray-800`,
//   heading: `text-4xl font-bold text-center text-gray-700 p-3`,
//   container: `bg-slate-100 max-w-[60%] w-full m-auto rounded-[50px] shadow-2xl shadow-zinc-100/50 p-8`,
//   form: `flex justify-between `,
//   button: `border p-4 ml-2 sm:mt-0 bg-gray-900/70 text-white rounded-[20px]`,
//   input: `border outline-gray-900/70 w-full text-xl p-3 rounded-[20px]`,
//   count: `text-center p-4 text-bold text-xl`,
//   li: `flex justify-between p-3 my-2`,
//   liCompleted: `flex justify-between bg-slate-200 text-green-600 capitalize`,
//   row: `flex`,
//   text: `ml-2 cursor-pointer text-xl`,
//   ul: ``,
//   textCompleted: `ml-2 cursor-pointer line-through text-xl`,
// };

const TodoList = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Read Data      *R*
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todoList: Array<any> = [];
      QuerySnapshot.forEach((doc) => {
        todoList.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todoList);
    });
    return () => unsubscribe();
  }, []);

  const toggle: any = async (todo: any) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const todoAdder = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = formData.get("task") as string;
    setInput("");
    if (!data) {
      alert("Please write some text first");
      return;
    } else {
      await addDoc(collection(db, "todos"), {
        text: input,
        completed: false,
      });
    }
  };

  const deleteTodo = async (id: any) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className={styles.bg}>
      <head>
        <title>Todo List</title>
      </head>
      <div className={styles.container}>
        <h3 className={styles.heading}>Your Tasks.</h3>
        <form className={styles.form} onSubmit={todoAdder}>
          <input
            type="text"
            className={styles.input}
            name="task"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter your task..."
          />
          <button className={styles.button} type="submit">
            <AiOutlinePlus size={30} className="bg-black" />
          </button>
        </form>
        <ul className={styles.ul}>
          {todo.map((todo: any, index) => (
            <Todo
              key={index}
              todo={todo}
              toggle={toggle}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <p className={styles.count}>You have {todo.length} todos</p>
      </div>
    </div>
  );
};

export default TodoList;
