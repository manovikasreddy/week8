import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ThemeToggle from "./ThemeToggle";
import RenderCount from "./RenderCount";

function StoreHeader() {
  const { cartItems } = useContext(StoreContext);

  return (
    <header className="store-header">
      <div>
        <h1>Context API Store</h1>
        <RenderCount name="StoreHeader (Store context)" />
      </div>
      <div className="header-right">
        <ThemeToggle />
        <p className="cart-count">Cart: {cartItems.length}</p>
      </div>
    </header>
  );
}

export default StoreHeader;
