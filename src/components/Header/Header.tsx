import { Container } from './Header.styles'
import { Link } from 'react-router-dom';
import InstagramLogo from '../../assets/images/instagram.svg';

function Header() {

    return (
        <Container>
            <div className='main'>
                <ul className='links'>
                    <div className='left-div'>
                        <li><Link to={'/about'} className="nav-link">Sobre</Link></li>
                        <li><Link to={'/programs'} className="nav-link">Programas</Link></li>
                    </div>
                    <div className='center-div'>
                        <li><Link to={'/home'} className="nav-link">Climb4Life</Link></li>
                    </div>
                    <li className='contact'>Contato <a href='https://www.instagram.com/climb4life/' target='_blank'><img className='instagram-logo' src={InstagramLogo} alt="instagram Logo" /></a></li>

                </ul>
            </div>
        </Container>
    )
}

export default Header
