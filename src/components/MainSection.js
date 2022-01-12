import React from 'react';
import Board from './Board';
import './styles/_main_section.scss';
import { useContextProgressBoard } from '../contexts/ProgressBoardContext';

const MainSection = () => {
   const { progressLists } = useContextProgressBoard();
   return (
      <main>
         {progressLists.map((el) => (
            <Board key={el.id} name={el.name} idBoard={el.id} data={el.data} />
         ))}
      </main>
   );
};
export default MainSection;
