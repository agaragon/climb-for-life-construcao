import { Container } from './SideBar.styles'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectBurgerMenu,
    hideSideBar,
} from '../../features/burgerMenu/displayBurgerMenu'


function SideBar() {
    const burgerMenuState = useSelector(selectBurgerMenu);
    const dispatch = useDispatch();

    return (
        <Container style={{ display: burgerMenuState ? 'inline' : 'none' }}>
            <ul className='links'>
                <li onClick={() => { dispatch(hideSideBar()) }}><Link to={'/'} className="nav-link">Climb 4 life</Link></li>
                <li onClick={() => { dispatch(hideSideBar()) }}><Link to={'/contact'} className="nav-link">Contact</Link></li>
                <li onClick={() => { dispatch(hideSideBar()) }}><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
        </Container>
    )
}

export default SideBar
