import logo from './logo.svg';
import './App.css';
import Favourite from './Components/Favourite/Favourite';
import Categories from './Components/Categories/Categories';
import Navbar from './Components/NavBar/navbar';
import FilterBar from './Components/FilterBar/Filterbar';

function App() {  
  return (
    <div className="App">
      <Navbar/>
      <FilterBar/>
      <Favourite/>
      <Categories/>
    </div>
  );
}

export default App;
