import { useEffect, useState } from "react";
import "../Styles.css/CartPage.css";
import cartContext, { useCartContext } from "./CartContext";
import CartItem from "./CartItem";

function CartPage() {
  let totalPrice = 0;
  let i = 0;
  useEffect(() => {
    i++;
    calculateTotalPrice();
  });
  function calculateTotalPrice() {
    totalPrice = 0;
    cart.forEach((element, index) => {
      console.log("cart lengtg" + cart.length + "cart index", index);
      totalPrice += parseInt(element.cartItemPrice) * element.cartItemQuantity;
      console.log("price:", element.cartItemPrice, "quantity", element.cartItemQuantity);
      console.log(totalPrice);
    });
    setCost(totalPrice);
    return totalPrice;
  }
  const { cart, setCart } = useCartContext();
  const [costValue, setCost] = useState(0);
  return (
    <div className="cart-page__div">
      <div className="cart-page__container">
        <p className="cart-page__title">Cart</p>
        <div className="cart-page-header__container">
          <ul className="cart-item__container__header">
            <li>
              <p className="cart-item__attribute">name</p>
            </li>
            <li>
              <p className="cart-item__attribute">quantity</p>
            </li>
            <li>
              <p className="cart-item__attribute">price</p>
            </li>
            <li>
              <p className="cart-item__attribute">price per unit</p>
            </li>
          </ul>
        </div>

        {cart.map((element, index) => (
          <CartItem
            cartItemName={element.cartItemName}
            cartItemQuantity={element.cartItemQuantity}
            cartItemPrice={element.cartItemPrice}
            functionVo={calculateTotalPrice}
          ></CartItem>
        ))}
        <div className="total-price-div">
          <div style={{ display: "flex" }}>
            <p className="total-price">Total price: {costValue}$</p>
          </div>

          <button className="check-out-button">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
