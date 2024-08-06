import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { ProductType } from "../types/Types";
import AddToCartIcon from "../assets/images/icon-add-to-cart.svg";
import decrementbutton from "../assets/images/icon-decrement-quantity.svg";
import incrementbutton from "../assets/images/icon-increment-quantity.svg";
import {
  decrement,
  increment,
  calculateTotalProduct,
  filterProductsBasket,
  calculateTotalPrice,
  addBasket,
} from "../redux/ProductSlice";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../hooks";

type ProductProps = {
  product: ProductType;
};

export default function Product(props: ProductProps) {
  const dispatch = useAppDispatch();
  const { basket } = useAppSelector((state: RootState) => state.products);
  console.log(basket);

  const handleClick = () => {
    dispatch(increment(props.product.id));
    dispatch(filterProductsBasket());
    dispatch(calculateTotalProduct());
    dispatch(calculateTotalPrice());
    dispatch(addBasket(props.product));
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 270,
          width: 250,
          backgroundColor: "var(--Rose50)",
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          style={{
            height: "250px",
            borderRadius: "12px",
            border: !(props.product.piece < 1)
              ? "2px solid var(--Red)"
              : "none",
          }}
          image={props.product.image}
        />
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.product.piece < 1 ? (
            <button
              onClick={handleClick}
              className=" text-xs w-[150px] text-black mt-[-30px] rounded-3xl border border-solid border-[var(--Rose300)] p-3 bg-white px-4 font-bold addbutton"
            >
              <div className="flex">
                <img className="" src={AddToCartIcon} alt="" />
                <span className="ml-2">Add to Cart</span>
              </div>
            </button>
          ) : (
            <div className=" flex justify-between bg-[var(--Red)] text-xs w-[150px] text-white mt-[-30px] rounded-3xl border border-solid border-[var(--Rose300)] p-3  px-4 font-bold addbutton">
              <button
                onClick={() => {
                  dispatch(decrement(props.product.id));
                  dispatch(filterProductsBasket());
                  dispatch(calculateTotalProduct());
                  dispatch(calculateTotalPrice());
                }}
                className="text-white border-white border rounded-full p-1 "
              >
                <img className="w-2 h-2" src={decrementbutton} alt="" />
              </button>
              {props.product.piece}
              <button
                onClick={() => {
                  dispatch(increment(props.product.id));
                  dispatch(filterProductsBasket());
                  dispatch(calculateTotalProduct());
                  dispatch(calculateTotalPrice());
                }}
                className="text-white border-white border rounded-full p-1"
              >
                <img className="w-2 h-2" src={incrementbutton} alt="" />
              </button>
            </div>
          )}
        </CardActions>

        <div className="mt-1 pb-4">
          <p className="text-xs text-[var(--Rose400)] ">
            {props.product.category}
          </p>
          <p className="text-sm text-[var(--Rose900)]">{props.product.name}</p>
          <p className="text-sm text-[var(--Red)]">
            ${props.product.price.toFixed(2)}
          </p>
        </div>
      </Card>
    </>
  );
}
