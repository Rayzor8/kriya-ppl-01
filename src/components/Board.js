import React from 'react';
import './styles/_board.scss';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';

const Board = ({ name, id }) => {
   const { showInput, setShowInput } = useContextProgressBoard();
   const handleClick = (state) => setShowInput(state);

   return (
      <>
         <section>
            <div className="card_header">
               <h2>{name}</h2>
               <p>(0)</p>
               <button onClick={() => handleClick(id)}>{<FaPlus />}</button>
            </div>

            <div className={showInput === id ? 'card_body show' :'card_body hidden' }>
               <input type="text" />
               <button className="confirm_btn">{<FaCheck />}</button>
               <button className="edit_btn">{<FaEdit />}</button>
               <button className="delete_btn" onClick={() => handleClick(null)}>
                  {<FaTimes />}
               </button>
            </div>
         </section>
      </>
   );
};

export default Board;
