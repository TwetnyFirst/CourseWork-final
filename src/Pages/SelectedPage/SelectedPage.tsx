import { useParams } from 'react-router-dom';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SelectedPage.scss';
import { fetchOneProduct } from '../../Redux/Slice/products';
import { link } from 'fs';

function SelectedPage() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const selected = useSelector((state:any) =>  state.selectedPost);

    useEffect(() => {
        dispatch<any>(fetchOneProduct(id));
    },[]);

    return ( 
    <>
    <div className="selected__wrap">
        <div className="selected__left">
            <div className="img__wrap">
                <img src={selected.image} alt="#"/>
            </div>
        </div>
        <div className="selected__right">
            <h2 className="right__title">{selected.name}</h2>
            <ul className='right__dics'>
                {selected.ingredients.map((item:any) => <li>{item}</li>)}
            </ul>
            <div className="right__price">{selected.rating * 4} $</div>
        </div>
    </div>
    </> 
    );
}

export default SelectedPage;