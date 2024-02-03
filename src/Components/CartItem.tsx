import { useState } from "react";
import image from "../Images/NewProductImage.png";
import trashIcon from "../Images/trashIcon.svg";
import { CartItemProps } from "../App";
import cartContext, { useCartContext } from "./CartContext";
interface Props {
  functionVo: VoidFunction;
}

function CartItem({ cartItemName, cartItemQuantity, cartItemPrice, functionVo }: CartItemProps & Props) {
  const { cart, setCart } = useCartContext();

  return (
    <div>
      <ul className="cart-item__container">
        <div className="cart-item-div">
          <li>
            <img className="cart-item__image" src={image}></img>
          </li>
          <li>
            <p className="cart-item__name">{cartItemName}</p>
          </li>
          <li>
            <p className="cart-item__quantity">{cartItemQuantity}</p>
          </li>
          <li>
            <p className="cart-item__price">{cartItemPrice}$</p>
          </li>
          <li>
            <img
              className="trash-icon"
              src={trashIcon}
              onClick={() => {
                let newCart = [...cart];
                let index = newCart.findIndex((v) => v.cartItemName === cartItemName);

                if (newCart[index].cartItemQuantity > 1) {
                  newCart[index].cartItemQuantity = newCart[index].cartItemQuantity - 1;
                } else {
                  newCart.splice(index, 1);
                }

                console.log("cart: ", newCart);
                setCart(newCart);
                functionVo();
                console.log("it raaan");
              }}
            ></img>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default CartItem;
