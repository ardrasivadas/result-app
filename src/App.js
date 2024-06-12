import logo from './logo.svg';
import './App.css';
import Addresult from './components/Addresult';
import Search from './components/Search';
import Viewresult from './components/Viewresult';

function App() {
  return (
    <div className="App">
      <Addresult/>
      <Search/>
    <Viewresult/>
    </div>
  );
}

export default App;
