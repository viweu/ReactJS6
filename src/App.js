import './App.scss';
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddProduct } from './components/Products/AddProduct';
import ProductList from './components/Products/ProductList';
import HomePage from './components/Page/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/slices/themeSlice';

function App() {
  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (  
      <div style = {{height:"100vh"}} className={`App ${theme}` }>
      <BrowserRouter>
      <nav>
          <NavLink className='link' to="/">Главная</NavLink>
          <NavLink className='link' to="/add">Добавить товар</NavLink>
          
          <NavLink className='link' to="/list">Страница товаров</NavLink>
      </nav>
      <button className='button' onClick={() => {dispatch(toggleTheme())}} >Сменить тему</button>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/list' element={<ProductList/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
