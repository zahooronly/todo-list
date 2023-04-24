import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
interface Props {
  todo: string;
}

const style = {
  // ul:`p-3`,
  li: `flex justify-between p-3 my-2 bg-gray-500/90`,
  liCompleted: `flex justify-between bg-slate-200 capitalize `,
  row: `flex`,
  textStyle: `ml-2 cursor-pointer text-md`,
  checkbox: `valid:border-green-500`,
  textCompleted: `ml-2 cursor-pointer line-through text-xl`,
};

const Todo: React.FC<Props> = ({ todo }: any) => {
  return (
    <ul>
      <li className={style.li}>
        <div className={style.row}>
          <input
            className="valid:border-green-500 h-5 w-5 text-green-600"
            type="checkbox"
          />
          <p className={style.textStyle}>{todo.text}</p>
        </div>
        <FaRegTrashAlt />
      </li>
    </ul>
  );
};

export default Todo;
