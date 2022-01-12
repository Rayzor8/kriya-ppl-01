import { createContext ,useContext,useState} from "react";

export const contextProgressBoard = createContext();

export const useContextProgressBoard = () => {
   return useContext(contextProgressBoard);
};



const ProgressBoardContext = ({children}) => {
    const [showInput,setShowInput] = useState(null);
    const progresLists =[{id:1,name:"Todo"},{id:2,name:"On progress"},{id:3,name:"Done"}];
    return (
        <contextProgressBoard.Provider value={{showInput,setShowInput,progresLists}}>
            {children}
        </contextProgressBoard.Provider>
    )
}

export default ProgressBoardContext
