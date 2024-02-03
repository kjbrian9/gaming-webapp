import BuyButton from "./BuyButton";
import { useNavigate } from "react-router-dom";

export interface Propse {
  price: string;
  name: string;
  description: string;
}

function Product({ price, name, description }: Propse) {
  const navigate = useNavigate();
  return (
    <div
      className="product-div"
      onClick={() => {
        navigate("/productPage", { state: { name, description, price } });
      }}
    >
      <div className="product-image-div">
        <img src={require("../Images/NewProductImage.png")} className="product-image"></img>
      </div>
      <p className="product-price">{price}$</p>
      <p className="product-name">{name}</p>
      <p className="product-description">{description}</p>
      <BuyButton buttonName={name} buttonPrice={price} buttonText="Add to Cart"></BuyButton>
    </div>
  );
}

export default Product;
