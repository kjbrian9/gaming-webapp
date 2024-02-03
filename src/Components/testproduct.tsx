import { useLocation } from "react-router-dom";
import { Propse } from "./Producttest2";
import "../Styles.css/ProductPage.css";
import BuyButton from "./BuyButton";
import Slideshow from "./Slideshow";

function ProductPage() {
  const state = useLocation().state as Propse; // Casts the given information from the navigation to product info
  const { name, description, price } = state;

  return (
    <div className="product-page__container">
      <div>
        <Slideshow></Slideshow>
      </div>
      <div className="product-page__details-div">
        <p className="product-page__name">{name}</p>
        <p className="product-page__description">{description}</p>
        <p className="product-page__price">{price}$</p>
        <BuyButton buttonName={name} buttonPrice={price} buttonText={"Add to cart"}></BuyButton>
      </div>
    </div>
  );
}

export default ProductPage;
