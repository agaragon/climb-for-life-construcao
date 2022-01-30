import { BMList, BurgerMenuContainer } from './BurgerMenu.styles'
import SideBar from '../SideBar';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectBurgerMenu,
    showSideBar,
} from '../../features/burgerMenu/displayBurgerMenu'



function BurgerMenu() {
    const burgerMenuState = useSelector(selectBurgerMenu);
    const dispatch = useDispatch();
    return (
        <BurgerMenuContainer onClick={() => {
            dispatch(showSideBar())
        }}>
            <BMList className='burger-items'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <SideBar />
            </BMList>
        </BurgerMenuContainer>
    )
}

export default BurgerMenu
