import { useContext } from 'react';
import './Header.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
import { showCard } from '../../Redux/Slice/products';
import { useDispatch } from 'react-redux';

function Header() {
    const [color,setColor] = useContext(ThemeContext);
    const dispatch = useDispatch();


    return ( 
        <>
        <section className='header-section'>
            <div className='header-wrap'>
                <div className="header-theme">
                    <button className={`theme-button-${color}`} onClick={() => setColor('light')}>Light</button>
                    <button className={`theme-button-${color}`} onClick={() => setColor('dark')}>dark</button>
                </div>
                <div className="header-search"></div>
                <div className="header-card" onClick={() => dispatch(showCard())}>Card</div>
            </div>
        </section>
        </>
     );
}

export default Header;