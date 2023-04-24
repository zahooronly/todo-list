// import React from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// // interface Props {
// //   todo: string;
// // }

const styles = {
  // ul:`p-3`,
  li: `flex justify-between p-3 my-2 bg-gray-500/90`,
  liCompleted: `flex justify-between bg-slate-200 capitalize `,
  row: `flex`,
  textStyle: `ml-2 cursor-pointer text-md`,
  checkbox: `valid:border-green-500`,
  textCompleted: `ml-2 cursor-pointer line-through text-green-600 text-md`,
};

// const Todo: React.FC<Props> = ({ todo, toggle }: any) => {
//   return (
//     <ul>
//       <li className={todo.copleted ? style.liCompleted : style.li}>
//         <div className={style.row}>
//           <input
//             onChange={() => toggle(todo)}
//             className="valid:border-green-500 h-5 w-5 text-green-600"
//             type="checkbox"
//             checked={todo.completed ? true : false}
//           />

//           <p
//             onClick={() => toggle(todo)}
//             className={todo.completed ? style.textCompleted : style.textStyle}
//           >
//             {todo.text}
//           </p>
//         </div>
//         <FaRegTrashAlt />
//       </li>
//     </ul>
//   );
// };

// export default Todo;

import React from "react";

// interface Props {
//   key: number;
//   todo: {
//     id: string;
//     text: string;
//     completed: boolean;
//   };
//   toggle: (todo: { id: string; completed: boolean }) => Promise<void>;
// }

const Todo = ({ todo, toggle }: any) => {
  return (
    <li
      onClick={() => toggle(todo)}
      className={`${todo.completed ? styles.liCompleted : styles.li}`}
    >
      <div className={styles.row}>
        <div className={styles.textStyle}>{todo.text}</div>
      </div>
    </li>
  );
};

export default Todo;
