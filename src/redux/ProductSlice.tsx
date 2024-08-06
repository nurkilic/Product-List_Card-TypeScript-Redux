import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "../types/Types";
import {menuData} from "../data/data"
import axios from "axios";

type ProductInitialState = {
  products: ProductType[];
  totalProduct: number;
  filterProducts: ProductType[];
  total: number;
  confirmed: boolean;
  basket: ProductType[];
  // newtodo:string,
};

// Define a type for the slice state
// export const getAllProducts = createAsyncThunk("products", async () => {
//   const response = await axios.get("http://localhost:3000/items");

//   return response.data;
// });

// Define the initial state using that type
export const initialState: ProductInitialState = {
  products: [],
  totalProduct: 0,
  filterProducts: [],
  total: 0,
  confirmed: false,
  basket: [],
};

export const ProductSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    decrement: (state: ProductInitialState, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.piece = Math.max(0, product.piece - 1);
      }
      calculateTotalProduct();
    },
    increment: (state: ProductInitialState, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.piece = (product.piece || 0) + 1;
      }

      // ProductSlice.caseReducers.calculateTotalProduct(state)
    },
    calculateTotalProduct: (state: ProductInitialState) => {
      state.totalProduct = state.filterProducts.reduce((total, product) => {
        return total + product.piece;
      }, 0);
    },

    filterProductsBasket: (state: ProductInitialState) => {
      state.filterProducts = state.products.filter(
        (product) => product.piece > 0
      );
    },

    calculateTotalPrice: (state: ProductInitialState) => {
      state.total = state.filterProducts.reduce((total, product) => {
        return total + product.piece * product.price;
      }, 0);
    },
    handleConfirm: (
      state: ProductInitialState,
      action: PayloadAction<boolean>
    ) => {
      state.confirmed = action.payload;
    },
    handleRemoveAllProduct: (state: ProductInitialState) => {
      state.filterProducts = [];
      state.totalProduct = 0;
      state.total = 0;
      state.confirmed = false;
      state.products = state.products.map((product) => {
        return { ...product, piece: 0 };
        // product.piece=0
      });
    },

    addBasket: (
      state: ProductInitialState,
      action: PayloadAction<ProductType>
    ) => {
      state.basket.push(action.payload);
    },

    removeProductById: (
      state: ProductInitialState,
      action: PayloadAction<number>
    ) => {
      state.products = state.products.map((product) => {
        return action.payload === product.id
          ? { ...product, piece: 0 }
          : product;
      });

      state.filterProducts = state.filterProducts.filter(
        (product) => product.id !== action.payload
      );
    },
       getAllProducts:(state:ProductInitialState)=>{

        state.products=menuData
       }
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getAllProducts.fulfilled, (state, action) => {
  //     state.products = action.payload;
  //   });
  // },

});

export const {
  decrement,
  increment,
  calculateTotalProduct,
  filterProductsBasket,
  calculateTotalPrice,
  handleConfirm,
  handleRemoveAllProduct,
  removeProductById,
  addBasket,
  getAllProducts,
} = ProductSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default ProductSlice.reducer;
