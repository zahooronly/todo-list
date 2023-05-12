"use client";

// import React, { useState, useEffect } from "react";
// import Todo from "@/component/Todo";
// import { AiOutlinePlus } from "react-icons/ai";
// import {
//   collection,
//   onSnapshot,
//   query,
//   updateDoc,
//   doc,
//   addDoc,
//   deleteDoc,
//   where,
// } from "firebase/firestore";
// import { db } from "@/Config/firebase.config";
// import styles from "../../Styles/todolist.module.css";
// import { getUserCredential } from "../Authentication/Login/Login";

// const TodoList = () => {
//   const user = getUserCredential();
//   const [todo, setTodo] = useState([]);
//   const [input, setInput] = useState("");
//   // where
//   useEffect(() => {
//     const fetchTodos = async () => {
//       if (user) {
//         const q = query(
//           collection(db, "todos"),
//           where("userId", "==", user.uid)
//         );
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//           let todoList: any = [];
//           querySnapshot.forEach((doc) => {
//             todoList.push({ ...doc.data(), id: doc.id });
//           });
//           setTodo(todoList);
//         });
//         return unsubscribe;
//       }
//     };

//     fetchTodos();
//   }, [user]);

//   const toggle = async (todo: any) => {
//     await updateDoc(doc(db, "todos", todo.id), {
//       completed: !todo.completed,
//     });
//   };

//   const todoAdder = async (event: any) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const data = formData.get("task") as string;
//     setInput("");
//     if (!data) {
//       alert("Please write some text first");
//       return;
//     } else {
//       await addDoc(collection(db, "todos"), {
//         text: input,
//         completed: false,
//         userId: user.uid,
//       });
//     }
//   };

//   const deleteTodo = async (id: any) => {
//     await deleteDoc(doc(db, "todos", id));
//   };

//   return (
//     <div className={styles.bg}>
//       <head>
//         <title>Todo List</title>
//       </head>

//       {user ? (
//         <div>
//           <h1>Welcome, {user.email}</h1>
//           <div className={styles.container}>
//             <h3 className={styles.heading}>Your Tasks.</h3>
//             <form className={styles.form} onSubmit={todoAdder}>
//               <input
//                 type="text"
//                 className={styles.input}
//                 name="task"
//                 value={input}
//                 onChange={(e) => {
//                   setInput(e.target.value);
//                 }}
//                 placeholder="Enter your task..."
//               />
//               <button className={styles.button} type="submit">
//                 <AiOutlinePlus size={30} className="bg-black" />
//               </button>
//             </form>
//             <ul className={styles.ul}>
//               {todo.map((todo, index) => (
//                 <Todo
//                   key={index}
//                   todo={todo}
//                   toggle={toggle}
//                   deleteTodo={deleteTodo}
//                 />
//               ))}
//             </ul>
//             <p className={styles.count}>You have {todo.length} todos</p>
//           </div>
//         </div>
//       ) : (
//         <div>
//           {/* <h1 className={styles.login}>Please sign in to continue</h1> */}
//           {/* {(window.location.href = "./login")} */}
//           <div className={styles.container}>
//             <h3 className={styles.heading}>Your Tasks.</h3>
//             <form className={styles.form} onSubmit={todoAdder}>
//               <input
//                 type="text"
//                 className={styles.input}
//                 name="task"
//                 value={input}
//                 onChange={(e) => {
//                   setInput(e.target.value);
//                 }}
//                 placeholder="Enter your task..."
//               />
//               <button className={styles.button} type="submit">
//                 <AiOutlinePlus size={30} className="bg-black" />
//               </button>
//             </form>
//             <ul className={styles.ul}>
//               {todo.map((todo, index) => (
//                 <Todo
//                   key={index}
//                   todo={todo}
//                   toggle={toggle}
//                   deleteTodo={deleteTodo}
//                 />
//               ))}
//             </ul>
//             <p className={styles.count}>You have {todo.length} todos</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TodoList;

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
// import style from "../../Styles/nav.module.css";
import { getUserCredential } from "../Authentication/Login/Login";
import Link from "next/link";
// getUserCredential
const TodoList = () => {
  const user = getUserCredential();
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
  // const user = getUserCredential()
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
  // const [user, setUser] = useState();
  const deleteTodo = async (id: any) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className={styles.bg}>
      <head>
        <title>Todo List</title>
      </head>

      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
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
      ) : (
        <div>
          <Link href={"./login"}>
            <h1 className={styles.login}>Please sign in to continue</h1>
          </Link>
          {/* {(window.location.href = "./login")} */}
        </div>
      )}
    </div>
  );
};

export default TodoList;
