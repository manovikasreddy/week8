import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import RenderCount from "./RenderCount";

function ProductGrid() {
  const { products, isLoading, error, addToCart } = useContext(StoreContext);

  if (isLoading) {
    return <p className="status-message">Loading products...</p>;
  }

  if (error) {
    return <p className="status-message">{error}</p>;
  }

  return (
    <section className="product-grid">
      <div className="context-note">
        <RenderCount name="ProductGrid (Store context)" />
      </div>
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{formatCurrency(product.price)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </article>
      ))}
    </section>
  );
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);
}

export default ProductGrid;
