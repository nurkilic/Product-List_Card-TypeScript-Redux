import React, { useEffect } from "react";
import Product from "./Product";
// import { getAllProducts } from "../redux/ProductSlice";
import { RootState } from "../redux/store";
import { ProductType } from "../types/Types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAllProducts } from "../redux/ProductSlice";

const ProductList: React.FC = () => {
  const { products } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className=" bg-[--Rose50] ml-5 max-sm:ml-0 sm:ml-0 ">
      <h1 className="text-4xl font-bold  ">Desserts</h1>
      <div className="flex flex-wrap mt-7 gap-x-11 max-sm:gap-x-0  max-sm:justify-center mb-3">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
