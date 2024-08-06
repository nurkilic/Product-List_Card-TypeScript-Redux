import React from "react";
import { ProductType } from "../types/Types";
import {
  calculateTotalPrice,
  calculateTotalProduct,
  removeProductById,
} from "../redux/ProductSlice";
import { useAppDispatch } from "../hooks";

interface PropsType {
  product: ProductType;
}

function BasketProduct(props: PropsType) {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          <div className="text-[var(--Rose900)] font-bold mr-1">
            {props.product.name}
          </div>
          <div className="flex gap-x-3 my-2">
            <span className="text-[var(--Red)]">{props.product.piece}x</span>{" "}
            <span className="text-[var(--Rose300)]">
              @${props.product.price.toFixed(2)}
            </span>{" "}
            <span className="text-[var(--Rose500)]">
              ${(props.product.piece * props.product.price).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(removeProductById(props.product.id));
            dispatch(calculateTotalProduct());
            dispatch(calculateTotalPrice());
          }}
          className="pb-1 font-semibold flex items-center justify-center w-[18px] h-[18px] text-[var(--Rose300)] border-2 border-solid border-[var(--Rose300)] rounded-full"
        >
          x
        </button>
      </div>
      <div className="m-2 w-full border-b border-solid  bg-gray-600  "></div>
    </>
  );
}

export default BasketProduct;
