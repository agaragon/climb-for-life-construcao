import { Container } from './Header.styles'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <Container>
            <div className='left'>
                <ul className='links'>
                    <li><Link to={'/'} className="nav-link">Climb 4 Life</Link></li>
                    <li><Link to={'/about'} className="nav-link">Sobre nós</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contato</Link></li>
                </ul>
            </div>
        </Container>
    )
}

export default Header
