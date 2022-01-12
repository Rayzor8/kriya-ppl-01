import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const contextProgressBoard = createContext();

export const useContextProgressBoard = () => {
   return useContext(contextProgressBoard);
};

const ProgressBoardContext = ({ children }) => {
   const [showInput, setShowInput] = useState(null);

   const [progressLists, setProgressLists] = useState([
      {
         id: uuidv4(),
         name: 'Todo',
         data: [],
      },
      {
         id: uuidv4(),
         name: 'On progress',
         data: [],
      },
      {
         id: uuidv4(),
         name: 'Done',
         data: [],
      },
   ]);
   return (
      <contextProgressBoard.Provider
         value={{ showInput, setShowInput, progressLists, setProgressLists }}
      >
         {children}
      </contextProgressBoard.Provider>
   );
};

export default ProgressBoardContext;
