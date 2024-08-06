import OrderConfirm from "./OrderConfirm";

function GrayBackground() {
  return (
    <div
      className="top-0 left-0 fixed z-10 min-h-screen w-screen flex justify-center items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <OrderConfirm />
    </div>
  );
}

export default GrayBackground;
