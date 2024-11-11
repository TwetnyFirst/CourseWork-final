import './ProductPage.scss';
import ItemCard from '../../Components/ItemCard/ItemCard';
import { fetchProducts } from '../../Redux/Slice/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductPage() {

    const dispatch = useDispatch();
    const products = useSelector((state:any) => state.products);

    useEffect(() => {
        dispatch<any>(fetchProducts());
    },[]);
    return ( 
        <>
        <div className="container">
            <div className="products-wrap">
                {products.length !== 0 ? products.recipes.map((item:any) => <div key={item.id} className="product-wrap"><ItemCard  content={item}/></div> ) : null}
            </div>
        </div>
        </>
     );
}

export default ProductPage;