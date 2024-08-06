import React from "react";
import { RootState } from "../redux/store";
import BasketProduct from "./BasketProduct";
import { useAppSelector } from "../hooks";

function BasketProductList() {
  
  const { filterProducts} = useAppSelector((state: RootState) => state.products);
  console.log(filterProducts)

  return <div>
    {
     filterProducts && filterProducts.map((product)=><BasketProduct key={product.id} product={product}/>)
    }
  </div>;
}

export default BasketProductList;
