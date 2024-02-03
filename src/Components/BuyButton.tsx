import "../Styles.css/GlobalComponents.css";
import cartContext, { useCartContext } from "./CartContext";

interface Props {
  buttonText: string;
  buttonPrice: string;
  buttonName: string;
}
let k = 0;
function BuyButton({ buttonText, buttonPrice, buttonName }: Props) {
  const { cart, setCart } = useCartContext();

  return (
    <button
      className="buy-button"
      onClick={() => {
        k = k + 1;
        let oldCart = [...cart];
        let newCart = [{ cartItemName: buttonName, cartItemPrice: buttonPrice, cartItemQuantity: 1 }];
        let index = oldCart.findIndex((v) => v.cartItemName === newCart[0].cartItemName);

        if (index !== -1) {
          oldCart[index].cartItemQuantity = oldCart[index].cartItemQuantity + 1;
          let price = parseInt(buttonPrice);
          oldCart[index].cartItemPrice = price.toString();
        } else {
          oldCart = cart.concat(newCart);
        }
        setCart(oldCart);
      }}
    >
      {buttonText}
    </button>
  );
}

export default BuyButton;
