import './App.css';
import Branches from './components/branches/Branches';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
     <Brands/>
     <Branches/>
     <Info/>
     <Footer/>
    </div>
  );
}

export default App;
