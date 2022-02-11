import BurgerMenu from './components/BurgerMenu';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar/SideBar';
import Presentation from './components/Presentation/Presentation';

function App() {
  return (
    <div className="App">
      <BurgerMenu />
      <SideBar />
      <Header />
      <Presentation />
      {/* <div className='presentation'></div> */}
    </div>
  );
}

export default App;
