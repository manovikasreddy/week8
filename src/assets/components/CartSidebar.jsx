import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import RenderCount from "./RenderCount";

function CartSidebar() {
  const { cartItems, removeFromCart, total } = useContext(StoreContext);

  return (
    <aside className="cart-sidebar">
      <h2>Cart Items</h2>
      <RenderCount name="CartSidebar (Store context)" />
      {cartItems.length === 0 ? <p className="empty">No items in cart.</p> : null}
      {cartItems.map((item, index) => (
        <div key={`${item.id}-${index}`} className="cart-item">
          <p>{item.title}</p>
          <p>{formatCurrency(item.price)}</p>
          <button onClick={() => removeFromCart(index)}>Delete</button>
        </div>
      ))}
      <h3>Total: {formatCurrency(total)}</h3>
    </aside>
  );
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);
}

export default CartSidebar;
