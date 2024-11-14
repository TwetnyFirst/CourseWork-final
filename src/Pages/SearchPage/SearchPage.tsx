import { useSelector } from 'react-redux';
import './SearchPage.scss';
import { useDispatch } from 'react-redux';
import ItemCard from '../../Components/ItemCard/ItemCard';
import { Link } from 'react-router-dom';
import { addToCard } from '../../Redux/Slice/products';

function SearchPage() {

    const products = useSelector((state:any) => state.searchResoult);
    const dispatch = useDispatch();


    return ( 
    <>
        <section className='search__wrap'>
                {products.map((item:any) => {
                    return <Link key={item.id} to={`/${item.id}`}>
                        <div className="search__item__wrap">
                            <div className="search__item__left">
                                <img src={item.image} alt="#" />
                            </div>
                            <div className="search__item__right">
                                <div className="item__right__name">{item.name}</div>
                                <div className="item__right__price">{item.rating * 4}</div>
                                
                            </div>
                        </div>
                    </Link>
                })}
        </section>
    </> 
    );
}

export default SearchPage;