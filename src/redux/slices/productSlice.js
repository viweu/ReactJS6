import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    // products: [],
    products: JSON.parse(localStorage.getItem("product-Catalog") || "[]"),
}

const saveToLocalStorage = (products) => {
  localStorage.setItem("product-Catalog", JSON.stringify(products));
};



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = { ...action.payload, id: crypto.randomUUID() };
      const products = [...state.products, newProduct];
      saveToLocalStorage(products);
      state.products = products;
        },
        deleteProduct: (state, action) => {
            const products = state.products.filter(
                (product) => product.id !== action.payload,
              );
              saveToLocalStorage(products);
              state.products = products;
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id,
              );
              if (index !== -1) {
                state.products[index] = action.payload;
                saveToLocalStorage(state.products);
              }
        },
        toggleAvailability: (state, action) => {
            const product = state.products.find(
                (product) => product.id === action.payload,
              );
              if (product) {
                product.available = !product.available;
                saveToLocalStorage(state.products);
              }
        },
    },
});

export const {addProduct, deleteProduct, updateProduct, toggleAvailability} = productSlice.actions;
export default productSlice.reducer;
