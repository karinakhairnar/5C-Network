import logo from './logo.svg';
import './App.css';
import Home from './Compnent/Home';
import { Routes, Route } from 'react-router-dom';
import DecriptionPage from './Compnent/DecriptionPage';
import Followers from './Compnent/Followers';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description/:login/:name' element={<DecriptionPage />} />
        <Route path='/followers/:login' element={<Followers />} />
        
      </Routes>
    </div>
  );
}

export default App;
