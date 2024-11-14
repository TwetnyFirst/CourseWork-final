import { useContext, useState } from 'react';
import './Header.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
import { showCard,search } from '../../Redux/Slice/products';
import { useDispatch } from 'react-redux';
import SearchPage from '../../Pages/SearchPage/SearchPage';

function Header() {
    const [color,setColor] = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [inputValue,setInputValue] = useState('');

    function handleSearch(e:any){
        setInputValue(e.target.value)
        dispatch<any>(search<any>(inputValue));

    }


    return ( 
        <>
        <section className='header-section'>
            <div className='header-wrap'>
                <div className="header-theme">
                    <button className={`theme-button-${color}`} onClick={() => setColor('light')}>Light</button>
                    <button className={`theme-button-${color}`} onClick={() => setColor('dark')}>dark</button>
                </div>
                <div className="header-search">
                    <input value={inputValue} onChange={(e) => handleSearch(e)} type="text" placeholder='Search...'/>
                </div>
                <div className="header-card" onClick={() => dispatch(showCard())}>Card</div>
            </div>
            {inputValue === '' ? null : <SearchPage/>}
        </section>
        </>
     );
}

export default Header;