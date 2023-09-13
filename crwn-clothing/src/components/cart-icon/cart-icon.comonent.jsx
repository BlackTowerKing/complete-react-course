import { useContext } from "react";

import {
  CartIconContainer,
  ItemCount,
  ShoppingLogoIcon,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../../contexts/cart.context";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, totalCartQuantity } =
    useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingLogoIcon />
      <ItemCount>{totalCartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default Cart;
