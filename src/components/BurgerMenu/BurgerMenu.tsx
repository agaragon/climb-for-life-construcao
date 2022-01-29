import { slide as Menu } from 'react-burger-menu'
import styles, { BMList } from './BurgerMenu.styles'
import { Link } from 'react-router-dom';

function BurgerMenu() {
    return (<Menu styles={styles} >
        <BMList className='burger-items'>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
        </BMList>
    </Menu>)
}

export default BurgerMenu
