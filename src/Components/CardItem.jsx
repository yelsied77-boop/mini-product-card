import { useSelector } from "react-redux";

import CartItem from "../Components/CardItem";

function Cart() {
  const cardItems = useSelector(
    (state) => state.card.items
  );

  const total = cardItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <h1>Your Cart</h1>

        <p className="empty-cart">
          Your cart is empty.
        </p>
      </section>
    );
  }

  return (
    <section className="cart">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="cart-total">
        <span>Total</span>

        <strong>
          ${total.toFixed(2)}
        </strong>
      </div>
    </section>
  );
}

export default Cart;