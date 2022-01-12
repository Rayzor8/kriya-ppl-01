import React from 'react';
import Board from './Board';
import './styles/_main_section.scss';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';

const MainSection = () => {
   const { progresLists } = useContextProgressBoard();
   return (
      <main>
         {progresLists.map((el) => (
            <Board key={el.id} name={el.name} id={el.id}/>
         ))}
      </main>
   );
};
export default MainSection;
