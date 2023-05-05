import React from "react";
import { FaRegTrashAlt, FaBeer } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
// import { FaBeer } from 'react-icons/fa';

import style from "../Styles/todo.module.css";
// const style = {
//   li: `flex justify-between p-3 my-2 bg-gray-500`,
//   liCompleted: `flex justify-between bg-slate-200 capitalize `,
//   row: `flex`,
//   textStyle: `ml-2 cursor-pointer text-md `,
//   checkbox: `valid:border-green-500`,
//   textCompleted: `ml-2 cursor-pointer line-through text-green-600 text-md`,
// };

const Todo: any = ({ todo, toggle, deleteTodo }: any) => {
  return (
    <ul className={style.row}>
      <li className={todo.copleted ? style.liCompleted : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggle(todo)}
            className={style.checkbox}
            type="checkbox"
            checked={todo.completed ? true : false}
          />
          <p
            onClick={() => toggle(todo)}
            className={todo.completed ? style.textCompleted : style.textStyle}
          >
            {todo.text}
          </p>
        </div>

        <div className={style.row}>
          <BiEdit />
          <FaRegTrashAlt
            className={"cursor-pointer"}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </li>
    </ul>
  );
};

export default Todo;
