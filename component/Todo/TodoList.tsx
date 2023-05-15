"use client";

import React, { useEffect, useState } from "react";
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
import { auth, db } from "@/Config/firebase.config";
import styles from "../../Styles/todolist.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../Authentication/Login/Login";
const TodoList = () => {
  const [user] = useAuthState(auth);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        query(collection(db, "todos")),
        (snapshot) => {
          const todoList: any = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTodos(todoList);
        }
      );

      return () => unsubscribe();
    }
  }, [user]);

  const toggle = async (todo: any) => {
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
      {user ? (
        <div>
          {/* {alert("Welcome" + user.email)} */}
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
              {todos.map((todo: any) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggle={toggle}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
            <p className={styles.count}>You have {todos.length} todos</p>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default TodoList;
