import BurgerMenu from './components/BurgerMenu';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectBurgerMenu,
  showSideBar,
  hideSideBar,
} from './features/burgerMenu/displayBurgerMenu'

function App() {
  const burgerMenuState = useSelector(selectBurgerMenu);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BurgerMenu />
      <header className="App-header">

        <p>
          Gostaria de me apresentar, como uma oportunidade de mudar de vida.
        </p>
        <button onClick={() => dispatch(showSideBar())}>
          Change Toggle Status
        </button>
        <button onClick={() => dispatch(hideSideBar())}>
          Change Toggle Status
        </button>
        <span>{burgerMenuState}</span>
      </header>
    </div>
  );
}

export default App;
