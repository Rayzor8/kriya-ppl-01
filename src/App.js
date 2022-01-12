import Header from './components/Header';
import MainSection from './components/MainSection';
import ProgressBoardContext from './contexts/ProgressBoardContext';

function App() {
   return (
      <ProgressBoardContext>
         <div className="App">
            <Header />
            <MainSection />
         </div>
      </ProgressBoardContext>
   );
}

export default App;
