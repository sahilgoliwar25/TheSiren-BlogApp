import './App.css';
import ContextAPI from './components/ContextAPI';
import Navbar from './components/Navbar/Navbar';
import ReactRoutes from './components/ReactRoutes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <ReactRoutes/>
      </BrowserRouter>
      <ContextAPI/>
        {/* <Home/> */}
    </div>
  );
}

export default App;
