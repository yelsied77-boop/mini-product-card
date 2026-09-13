import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../Components/ProductCard";
import ProductForm from "../Components/ProductForm";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setError("Failed to load products.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addProductToList = (product) => {
    setProducts((previousProducts) => [
      product,
      ...previousProducts,
    ]);
  };

  if (loading) {
    return <p className="message">Loading products...</p>;
  }

  if (error) {
    return <p className="message error">{error}</p>;
  }

  return (
    <section className="home">
      <h1>Our Products</h1>

      <p className="subtitle">
        Discover our products
      </p>

      <ProductForm
        onProductAdded={addProductToList}
      />

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;