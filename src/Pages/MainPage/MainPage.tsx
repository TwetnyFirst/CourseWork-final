import './MainPage.scss';
import { useSelector, useDispatch } from 'react-redux'

function MainPage() {

    const products = useSelector((state:any) => state.products );
    return ( 
        <>
        <div>Main</div>
        </>
     );
}

export default MainPage;