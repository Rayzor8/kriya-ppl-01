import React from 'react';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const FormInput = ({ idBoard, handleShowInput }) => {
   
   const { progressLists, setProgressLists, showInput, formData, setFormData } =
      useContextProgressBoard();

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

   return (
      <form
         className={
            showInput === idBoard ? 'board_body show' : 'board_body hidden'
         }
         onSubmit={handleSubmit}
      >
         <input
            type="text"
            placeholder="Type here.."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            name="name"
         />
         <button className="confirm_btn" type="submit">
            {<FaCheck />}
         </button>
         <button
            className="delete_btn"
            onClick={() => handleShowInput(null)}
            type="button"
         >
            {<FaTimes />}
         </button>
      </form>
   );
};

export default FormInput;
