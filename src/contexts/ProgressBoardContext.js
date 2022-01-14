import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

export const contextProgressBoard = createContext();
export const useContextProgressBoard = () => {
   return useContext(contextProgressBoard);
};

const ProgressBoardContext = ({ children }) => {
   const [showInput, setShowInput] = useState(null);

   const [progressLists, setProgressLists] = useLocalStorage('progressBoard', [
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

   const [formData, setFormData] = useState({ id: uuidv4(), name: '' });



   return (
      <contextProgressBoard.Provider
         value={{ showInput, setShowInput, progressLists, setProgressLists,formData,setFormData }}
      >
         {children}
      </contextProgressBoard.Provider>
   );
};

export default ProgressBoardContext;
