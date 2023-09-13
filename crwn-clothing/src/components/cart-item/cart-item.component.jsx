import {
  CartItemContainer,
  ItemDetails,
  ItemDetailsName,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemDetailsName>{name}</ItemDetailsName>
        <span className='price'>{`${quantity} x ${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
