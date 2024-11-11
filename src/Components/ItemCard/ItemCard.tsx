import { useContext } from 'react';
import './ItemCard.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
import { useDispatch } from 'react-redux';
import { addToCard,setItem} from '../../Redux/Slice/products';


function ItemCard({content}:any) {

    const [color,setColor] = useContext(ThemeContext);
    const dispatch = useDispatch();

    return ( 
    <>
    <div className={`card-wrap-${color}`}>
        <div className="card__img">
            <img src={content.image} alt="#" />
        </div>
        <div className="card__description">
            <h2 className="card__title">{content.name}</h2>
            <p className="card__text">{content.ingredients
            }</p>
            <p className="card__price">{`${content.rating * 4}$`}</p>
            <button onClick={() => dispatch(addToCard(content))}>Add to Card</button>
        </div>
    </div>
    </>
    );
}

export default ItemCard;