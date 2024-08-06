import React, { useState } from "react";
import { RootState } from "../redux/store";
import EmptyPage from "./EmptyPage";
import BasketProductList from "./BasketProductList";
import carbonneutral from "../assets/images/icon-carbon-neutral.svg";
import { handleConfirm } from "../redux/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const Basket = () => {
  const dispatch = useAppDispatch();
  const { totalProduct, total } = useAppSelector(
    (state: RootState) => state.products
  );


  return (
    <>
      <div className="flex flex-col min-h-[250px] h-auto  h-m bg-white rounded-lg p-5 w-full max-lg:mt-7 max-w-[370px] mr-5">
        <h2 className="text-[var(--Red)] font-bold text-xl mb-2 ">
          Your Card ({totalProduct})
        </h2>
        {totalProduct === 0 ? <EmptyPage /> : <BasketProductList />}

        <div>
          {totalProduct > 0 ? (
            <div>
              <div className="flex justify-between p-1 items-center">
                <p className="text-xs font-semibold">Order Total</p>
                <p className="font-extrabold text-xl">${total.toFixed(2)}</p>
              </div>
              <div className="bg-[var(--Rose100)] p-3 rounded-md mt-2 text-xs text-center mb-2 flex justify-center">
                <img
                  className="h-[18px] w-[18px] "
                  src={carbonneutral}
                  alt="carbon-neutral"
                />
                <div className="ml-1">
                  This is a <b>carbon-neutral</b> delivery
                </div>
              </div>
              <button
                onClick={() => dispatch(handleConfirm(true))}
                className="bg-[var(--Red)] rounded-3xl text-white p-3 w-full mt-2"
              >
                Confirm Order
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Basket;
