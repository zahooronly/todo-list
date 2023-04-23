import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
interface Props {
  todo: string;
}

const style= {
  // ul:`p-3`,
  li: `flex justify-between p-3 my-2 bg-gray-500/90`,
  liCompleted: `flex justify-between bg-slate-200 capitalize `,
  row:`flex`,
  text:`ml-2 cursor-pointer text-xl`,
  checkbox:`valid:border-green-500`,
  textCompleted:`ml-2 cursor-pointer line-through text-xl`
};


const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <ul>
    <li className={style.li}>
      <div className={style.row}>
      <input className='valid:border-green-500 h-5 w-5 text-green-600' type="checkbox"/>
        <p className={style.text}>{todo}</p>
      </div>
      <FaRegTrashAlt/>
    </li>
    </ul>
  );
};

export default Todo;
