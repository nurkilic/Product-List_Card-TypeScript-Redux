
import { ProductType } from "../types/Types";

interface PropsType {
  product: ProductType;
}

function OrderProduct(props: PropsType) {
  return (
    <div className="p-3 ">
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="h-12 rounded-md mr-3"
            src={props.product.image}
            alt=""
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col ">
              <div className="text-[var(--Rose900)] font-bold mr-1 text-sm ">
                {props.product.name}
              </div>
              <div className="flex gap-x-3 my-1">
                <span className="text-[var(--Red)] text-sm font-bold">
                  {props.product.piece}x
                </span>{" "}
                <span className="text-[var(--Rose300)]">
                  @${props.product.price.toFixed(2)}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="text-[var(--Rose900) text-sm font-bold">
          ${(props.product.piece * props.product.price).toFixed(2)}
        </div>
      </div>
      <div className="m-2 w-[98%] border-b border-solid  bg-gray-600  "></div>
    </div>
  );
}

export default OrderProduct;
