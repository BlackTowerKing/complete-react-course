import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  QuantitySpan,
  RemoveButton,
  Arrow,
  Value,
} from "./checkout-item.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);

  const clearItemHandler = (e) => clearItemToCart(cartItem);
  const addItemHandler = (e) => addItemToCart(cartItem);
  const removeItemHandler = (e) => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan className='name'>{name}</BaseSpan>
      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantitySpan>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
