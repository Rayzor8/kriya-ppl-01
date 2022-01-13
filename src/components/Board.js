import React, { useState } from 'react';
import './styles/_board.scss';
import { FaTimes, FaCheck, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';

const Board = ({ name, idBoard, data }) => {
   const { showInput, setShowInput, progressLists, setProgressLists } =
      useContextProgressBoard();
   const handleClick = (state) => setShowInput(state);
   const [formData, setFormData] = useState({ id: uuidv4(), name: '' });

   const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name === '') return;
      setProgressLists(
         progressLists.map((el) =>
            el.id === idBoard ? { ...el, data: [...el.data, formData] } : el
         )
      );
      setFormData({ id: uuidv4(), name: '' });
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

   const checkString = (str) => {
      const expression =
         /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);
      let t = str.match(regex);
      return t;
   };

   return (
      <>
         <section>
            <div className="card_header">
               <h2>{name}</h2>
               <p>({data.length})</p>
               <button onClick={() => handleClick(idBoard)} type="button">
                  {<FaPlus />}
               </button>
            </div>

            <form
               className={
                  showInput === idBoard ? 'card_body show' : 'card_body hidden'
               }
               onSubmit={handleSubmit}
            >
               <input
                  type="text"
                  placeholder="Typehere"
                  value={formData.name}
                  onChange={(e) =>
                     setFormData({ ...formData, name: e.target.value })
                  }
                  name="name"
               />
               <button className="confirm_btn" type="submit">
                  {<FaCheck />}
               </button>
               <button
                  className="delete_btn"
                  onClick={() => handleClick(null)}
                  type="button"
               >
                  {<FaTimes />}
               </button>
            </form>

            {data.map((el) => (
               <ul key={el.id} className="card_item">
                  <li className="title">
                     {checkString(el.name) ? (
                        <a
                           href={`https://${el.name}`}
                           target="_blank"
                           rel="noreferrer"
                        >
                           {el.name}
                        </a>
                     ) : (
                        el.name
                     )}
                  </li>
                  <div className="card_item_btn">
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
               </ul>
            ))}
         </section>
      </>
   );
};

export default Board;
