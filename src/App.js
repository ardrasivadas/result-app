import logo from './logo.svg';
import './App.css';
import Addresult from './components/Addresult';
import Search from './components/Search';
import Viewresult from './components/Viewresult';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addresult/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/viewresult' element={<Viewresult/>}/>
  </Routes></BrowserRouter>

  );
}

export default App;
