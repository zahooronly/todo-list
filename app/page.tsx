"use client";
import React, { useState, useEffect } from "react";
// import { suppressHydrationWarning } from "re act-dom/server";
import Todo from "@/component/Todo";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "@/component/Config/firebase.config";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
// if (typeof window === "undefined") {
//   suppressHydrationWarning(true);
// }
const styles = {
  bg: `min-h-screen w-screen p-4 bg-gradient-to-r from-gray-600 to-gray-800`,
  heading: `text-4xl font-bold text-center text-gray-700 p-3`,
  container: `bg-slate-100 max-w-[60%] w-full m-auto rounded-[50px] shadow-2xl shadow-zinc-100/50 p-8`,
  form: `flex justify-between `,
  button: `border p-4 ml-2 sm:mt-0 bg-gray-900/70 text-white rounded-[20px]`,
  input: `border outline-gray-900/70 w-full text-xl p-3 rounded-[20px]`,
  count: `text-center p-4 text-bold text-xl`,
  li: `flex justify-between p-3 my-2`,
  liCompleted: `flex justify-between bg-slate-200 text-green-600 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer text-xl`,
  ul: ``,
  textCompleted: `ml-2 cursor-pointer line-through text-xl`,
};

const Home = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Create Data      *C*
  // const createTodo = async () => {};
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

  // Updata Data    *U*
  // const toggle = async (todo: any) => {
  //   await updateDoc(doc(db, "todos", todo.id), {
  //     completed: !todo.completed,
  //   });
  // };
  // Props;

  // const toggle = async (todo: { id: string; completed: boolean }) => {
  const toggle: any = async (todo: any) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const todoAdder = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = formData.get("task") as string;
    if (!data) {
      alert("Please write some text first");
      return;
    } else {
      // setTodo([...todo, data]);
      await addDoc(collection(db, "todos"), {
        text: input,
        completed: false,
      });
      // setInput(event.target.reset());
      setInput("");
    }
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
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter your task..."
          />
          <button className={styles.button} type="submit">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul className={styles.ul}>
          {todo.map((todo, index) => (
            // <Todo key={index} todo={todo} toggle={toggle} />
            // <Todo
            //   key={index}
            //   todo={{ id: todo.id, text: todo.text, completed: todo.completed }}
            //   toggle={toggle}
            // />
            <Todo key={index} todo={todo} toggle={toggle} />
          ))}
        </ul>
        <p className={styles.count}>You have {todo.length} todos</p>
      </div>
    </div>
  );
};

export default Home;
