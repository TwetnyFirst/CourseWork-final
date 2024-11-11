import { useDispatch } from 'react-redux';
import { closeCard, getItem } from '../../Redux/Slice/products';
import './Card.scss';
import { useSelector } from 'react-redux';
import ItemInCard from '../ItemInCard/ItemInCard';
import { useEffect } from 'react';

function Card() {

    const dispatch = useDispatch();

    const itemsInCard = useSelector((state:any) => state.productsInCard);



    return ( 
    <>
    <section className='card-wrap'>
        <div className="card__header">
            <div className="card__close" onClick={() => dispatch(closeCard())}>Close</div>
        </div>
        <div className="card__main">
            {itemsInCard.length !== 0 ? itemsInCard.map((item:any) => {
                return <ItemInCard key={item.item.id} content={item}/>
            }): <div>No items in cart</div>}
        </div>
        <div className="card__summary">
            <div className="summary__count">{itemsInCard.reduce((acc:any,curr:any) => acc + curr.count,0)}</div>
            <div className="summary__sum">{itemsInCard.reduce((acc:any,curr:any) => acc + curr.item.rating * 4 * curr.count ,0)}</div>
        </div>

    </section>
    </> 
    );
}

export default Card;