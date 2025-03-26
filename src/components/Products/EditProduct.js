import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/slices/productSlice";

const EditProduct = ({ productId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({ name, description, price: parseFloat(price), available, id: productId }),
    );
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };
 const closeForm = ({target}) =>{
    const productEl = target.closest('.product');
    const changeFormEl = productEl.querySelector(".form");
    changeFormEl.style.display = "none";
 }
  return (
    <div>
      <form style={{display: 'none'}} className="form" onSubmit={handlerSubmit}>
      <input 
            type="text"
            placeholder="Наименование товара"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <input 
            type="text"
            placeholder="Описание товара"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        />
        <input 
            type="number"
            placeholder="Цена товара"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
        />
        <div className='button-box'>
          <button className="button" type="submit">Изменить</button>
          <button className="button" type="button" onClick={closeForm}>Закрыть</button>
        </div>
        
      </form>
    </div>

  );
};

export default EditProduct;
