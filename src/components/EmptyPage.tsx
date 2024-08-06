import React from "react";
import emptyimage from "../assets/images/illustration-empty-cart.svg";

function EmptyPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={emptyimage} alt="" />
      <p className="text-xs text-[var(--Rose400)] font-semibold">
        Your added items will apper here
      </p>
    </div>
  );
}

export default EmptyPage;
