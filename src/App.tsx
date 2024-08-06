import "./App.css";
import Basket from "./components/Basket";
import GrayBackground from "./components/GrayBackground";
import OrderConfirm from "./components/OrderConfirm";
import ProductList from "./components/ProductList";
import { useAppSelector } from "./hooks";
import { RootState } from "./redux/store";

function App() {
  const { confirmed } = useAppSelector((state: RootState) => state.products);

  return (
    <>
      {/* <div className=" md:grid md:grid-cols-5 gap-x-4 w-full p-24 bg-[var(--Rose50)] sm:flex"> */}
      <div
        className={`relative flex justify-center max-lg:flex-col  gap-x-4 w-full p-20 bg-[var(--Rose50)] items-start ${
          confirmed ? "h-screen overflow-hidden " : "h-auto"
        } `}
      >
        <div className="flex-grow ">
          <ProductList />
        </div>
        <Basket />
        {confirmed ? <GrayBackground /> : ""}
        {confirmed ? <OrderConfirm /> : ""}
      </div>
    </>
  );
}

export default App;
