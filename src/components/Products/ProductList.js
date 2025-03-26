
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, toggleAvailability } from '../../redux/slices/productSlice';
import EditProduct from './EditProduct';

const ProductList = () => {
    const {products} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleClick = ({target}) => {
        const productEl = target.closest('.product');
        const changeFormEl = productEl.querySelector(".form");
        changeFormEl.style.display = "block";
      }


  return (
    <div>
         <div className='title-box'>
         <h2 className='title'>Страница товаров</h2>
         </div>
         {products.lenght === 0 ? (
            <p>Нет товаров</p>
         ) : (
            <ul>
                {products.map((product) => (
                    <li className='product' key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: ${product.price}</p>
                        <p>{product.available ? "В наличии" : "Закончился"}</p>
                        <div className='button-box'>
                            <button className="button" onClick={handleClick}>Изменить</button>
                            <button className="button" onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
                            <button className="button" onClick={() => dispatch(toggleAvailability(product.id))}>доступность</button>
                        </div>
                        <EditProduct productId={product.id} />          
                    </li> 
                ))}
            </ul>
         )}
    </div>
  )
}

export default ProductList;
