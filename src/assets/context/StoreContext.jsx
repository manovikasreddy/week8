import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        if (isMounted) {
          setProducts(data.products);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const addToCart = useCallback((product) => {
    setCartItems((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((indexToRemove) => {
    setCartItems((prev) =>
      prev.filter((_, itemIndex) => itemIndex !== indexToRemove)
    );
  }, []);

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      products,
      cartItems,
      isLoading,
      error,
      addToCart,
      removeFromCart,
      total,
    }),
    [products, cartItems, isLoading, error, addToCart, removeFromCart, total]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
