import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CardSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <div className="product-info">
        <span className="category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p>
          {product.description.slice(0, 100)}...
        </p>

        <div className="product-bottom">
          <strong>${product.price}</strong>

          <button onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;