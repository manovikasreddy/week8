import StoreHeader from "./assets/components/StoreHeader";
import ProductGrid from "./assets/components/ProductGrid";
import CartSidebar from "./assets/components/CartSidebar";
import "./App.css";

function App() {
  return (
    <main className="store-app">
      <StoreHeader />
      <section className="store-content">
        <ProductGrid />
        <CartSidebar />
      </section>
    </main>
  );
}

export default App;
