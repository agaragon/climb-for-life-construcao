import BurgerMenu from './components/BurgerMenu';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <SideBar />
      <Header />
      <header className="App-header">

        <p>
          Gostaria de me apresentar, como uma oportunidade de mudar de vida.
        </p>
      </header>
    </div>
  );
}

export default App;
