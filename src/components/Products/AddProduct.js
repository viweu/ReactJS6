import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";


export const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true);

    const dispatch = useDispatch();

    const handlerSubmit = (e) =>{
        e.preventDefault();
        dispatch(addProduct({name, description, price: parseFloat(price), available}))
        setName("");
        setDescription("");
        setPrice("");
        setAvailable(true);
    }
  return (
    <form onSubmit={handlerSubmit}>
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
        <label>
            <input 
                type="checkbox"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
            />
        </label>
        <button className="button" type="submit">Добавить</button>
    </form>
  )
}
