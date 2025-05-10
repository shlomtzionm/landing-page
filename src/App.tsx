import './App.css';
import Branches from './components/branches/Branches';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
     <Brands/>
     <Branches/>
    </div>
  );
}

export default App;
