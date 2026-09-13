import { useState } from "react";
import axios from "axios";

function ProductForm({ onProductAdded }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !price) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        {
          title: title,
          price: Number(price),
          description: "New product",
          image:
            "https://i.pravatar.cc/150?img=1",
          category: "electronics",
        }
      );

      onProductAdded(response.data);

      setTitle("");
      setPrice("");
    } catch (error) {
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="product-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Product name"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(event) =>
          setPrice(event.target.value)
        }
      />

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;