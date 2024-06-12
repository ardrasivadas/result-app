import logo from './logo.svg';
import './App.css';
import Addresult from './components/Addresult';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    <div className="App">
      <Addresult/>
      <Search/>
      <Viewall/>
    </div>
  );
}

export default App;
