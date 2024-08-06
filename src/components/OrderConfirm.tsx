import React from "react";
import { RootState } from "../redux/store";
import confirmedimage from "../assets/images/icon-order-confirmed.svg";
import OrderList from "./OrderList";
import { handleRemoveAllProduct } from "../redux/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

function OrderConfirm() {
  const dispatch = useAppDispatch();
  const { totalProduct } = useAppSelector((state: RootState) => state.products);

  return (
    <div className="min-h-[550px] max-h-[720px] h-auto  w-[500px] absolute order-confirm p-9 overflow-scroll">
      <div>
        <img src={confirmedimage} alt="" />
        <h2 className="text-2xl font-bold py-2">Order Confirmed</h2>
        <p className="text-[var(--Rose300)] text-xs pb-4 font-bold">
          We hope you enjoy your food!
        </p>
      </div>

      {totalProduct !== 0 && <OrderList />}

      <div className=" ">
        {totalProduct > 0 ? (
          <div className="">
            <button
              onClick={() => dispatch(handleRemoveAllProduct())}
              className="bg-[var(--Red)] rounded-3xl text-white p-3 w-full  my-5 "
            >
              Start New Order
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default OrderConfirm;
