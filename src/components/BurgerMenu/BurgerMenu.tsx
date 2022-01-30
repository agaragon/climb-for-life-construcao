import { BMLines, BurgerMenuContainer } from './BurgerMenu.styles'
import { useDispatch } from 'react-redux';
import {
    showSideBar,
} from '../../features/burgerMenu/displayBurgerMenu'



function BurgerMenu() {
    const dispatch = useDispatch();
    return (
        <BurgerMenuContainer onClick={() => {
            dispatch(showSideBar())
        }}>
            <BMLines className='burger-items'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </BMLines>
        </BurgerMenuContainer>
    )
}

export default BurgerMenu
