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

   return (
      <>
         <section>
            <div className="card_header">
               <h2>{name}</h2>
               <p>({data.length})</p>
               <button onClick={() => handleClick(idBoard)}>
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
               <button className="delete_btn" onClick={() => handleClick(null)}>
                  {<FaTimes />}
               </button>
            </form>

            {data.map((el) => (
               <ul key={el.id} className="card_item">
                  <li className="title">{el.name}</li>
                  <button className="edit_btn">{<FaEdit />}</button>
                  <button
                     className="delete_btn"
                     onClick={() => handleDelete(el.id)}
                  >
                     {<FaTrash />}
                  </button>
               </ul>
            ))}
         </section>
      </>
   );
};

export default Board;
