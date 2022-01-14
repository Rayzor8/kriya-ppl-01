import React, { useState } from 'react';
import './styles/_board.scss';
import { FaPlus } from 'react-icons/fa';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';
import BoardItem from './BoardItem';
import FormInput from './FormInput';

const Board = ({ name, idBoard, data }) => {
   const { setShowInput } = useContextProgressBoard();

   const handleShowInput = (state) => setShowInput(state);

   return (
      <React.Fragment>
         <section>
            <div className="board_header">
               <h2>{name}</h2>
               <p>({data.length})</p>
               <button onClick={() => handleShowInput(idBoard)} type="button">
                  {<FaPlus />}
               </button>
            </div>

            <FormInput idBoard={idBoard} handleShowInput={handleShowInput} />

            {data.map((el) => (
               <BoardItem key={el.id} el={el} idBoard={idBoard} data={data} />
            ))}
         </section>
      </React.Fragment>
   );
};

export default Board;
