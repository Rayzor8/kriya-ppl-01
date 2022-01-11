import React from 'react';
import './styles/_board.scss';
import {FaTrash} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {FaPlus} from 'react-icons/fa'

const Board = () => {
   return (
      <section>
         <div className='card_header'>
            <h2>Header Card</h2>
            <p>(0)</p>
            <button>{<FaPlus/>}</button>
         </div>

         <div className='card_body'>
            <input type="text" />
            <button className='confirm_btn'>{<FaCheck/>}</button>
            <button className='edit_btn'>{<FaEdit/>}</button>
            <button className='delete_btn'>{<FaTrash/>}</button>
         </div>
      </section>
   );
};

export default Board;
