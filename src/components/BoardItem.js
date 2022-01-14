import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';

const BoardItem = ({ el, idBoard, data }) => {
   const { progressLists, setProgressLists, setFormData } =
      useContextProgressBoard();

   const checkString = (str) => {
      const expression =
         /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);
      let t = str.match(regex);
      return t;
   };

   const handleDelete = (id) => {
      setProgressLists(
         progressLists.map((el) =>
            el.id === idBoard
               ? { ...el, data: el.data.filter((el) => el.id !== id) }
               : el
         )
      );
   };

   const handleEdit = (id) => {
      setFormData({ id, name: data.find((el) => el.id === id).name });
      setProgressLists(
         progressLists.map((el) =>
            el.id === idBoard
               ? { ...el, data: el.data.filter((el) => el.id !== id) }
               : el
         )
      );
   };

   return (
      <li className="board_item">
         <p className='title'>
            {checkString(el.name) ? (
               <a href={`https://${el.name}`} target="_blank" rel="noreferrer">
                  {el.name}
               </a>
            ) : (
               el.name
            )}
         </p>

         <div className="board_item_btn">
            <button
               className="edit_btn"
               type="button"
               onClick={() => handleEdit(el.id)}
            >
               {<FaEdit />}
            </button>
            <button
               className="delete_btn"
               onClick={() => handleDelete(el.id)}
               type="button"
            >
               {<FaTrash />}
            </button>
         </div>
      </li>
   );
};

export default BoardItem;
