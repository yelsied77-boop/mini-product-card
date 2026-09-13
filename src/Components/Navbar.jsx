import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const CartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = CartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="Navbar">
      <h2>ShopMini</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/cart">
          Cart ({totalItems})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;