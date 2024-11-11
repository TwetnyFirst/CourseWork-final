import './ItemInCard.scss';
import { countPlus,countMinus } from '../../Redux/Slice/products';
import { useDispatch } from 'react-redux';

function ItemInCard({content}:any) {

    const dispatch = useDispatch();

    return ( 
    <>
    <div className='item-wrap'>
        <div className="item__img">
            <img src={content.item.image} alt="#" />
        </div>
        <div className="item__description">
            <div className="description__name">{content.item.name}</div>
            <div className="description__price">{content.item.rating * 4 * content.count}</div>
        </div>
        <div className="item__count">
            <div className="count-minus" onClick={() => dispatch<any>(countMinus(content))}> - </div>
            <div className="count-main">{content.count}</div>
            <div className="count-plus" onClick={() => dispatch<any>(countPlus(content))}> + </div>
        </div>
    </div>
    </> 
    );
}

export default ItemInCard;