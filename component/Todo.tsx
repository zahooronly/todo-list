import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between p-3 my-2 bg-gray-500`,
  liCompleted: `flex justify-between bg-slate-200 capitalize `,
  row: `flex`,
  textStyle: `ml-2 cursor-pointer text-md `,
  checkbox: `valid:border-green-500`,
  textCompleted: `ml-2 cursor-pointer line-through text-green-600 text-md`,
};

const Todo: any = ({ todo, toggle, deleteTodo }: any) => {
  return (
    <ul>
      <li className={todo.copleted ? style.liCompleted : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggle(todo)}
            className="valid:border-green-500 h-5 w-5 text-green-600"
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
        <FaRegTrashAlt
          className={"cursor-pointer"}
          onClick={() => deleteTodo(todo.id)}
        />
      </li>
    </ul>
  );
};

export default Todo;
