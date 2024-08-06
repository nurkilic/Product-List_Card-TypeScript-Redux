
import { RootState } from "../redux/store";

import OrderProduct from "./OrderProduct";
import { useAppSelector } from "../hooks";

function OrderList() {
  const { filterProducts, totalProduct, total } = useAppSelector(
    (state: RootState) => state.products
  );
  console.log(filterProducts);

  return (
    <div className=" bg-[var(--Rose100)] rounded-lg">
      {filterProducts.map((product) => (
        <OrderProduct product={product} />
      ))}

      {totalProduct > 0 ? (
        <div className="px-2">
          <div className="flex justify-between p-1 items-center  bg-[var(--Rose100)]">
            <p className="text-xs font-semibold">Order Total</p>
            <p className="font-extrabold text-xl">${total.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default OrderList;
