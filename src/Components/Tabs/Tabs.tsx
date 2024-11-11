import { useContext } from 'react';
import './Tabs.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Providers/ThemeContext';

function Tabs() {
    const [color,setColor] = useContext(ThemeContext);
    return ( 
    <>
        <section className='tabs-wrap'>
            <Link className={`tab-${color}`} to='/'> Main </Link>
            <Link className={`tab-${color}`} to='/Pizza'> Pizza </Link>
            <Link className={`tab-${color}`} to='/Contact'> Contact </Link>

        </section>
    </> 
    );
}

export default Tabs;