import logo from './logo.svg';
import './App.css';
import Home from './Compnent/Home';
import { Routes, Route } from 'react-router-dom';
import DecriptionPage from './Compnent/DecriptionPage';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description/:login/:name' element={<DecriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
