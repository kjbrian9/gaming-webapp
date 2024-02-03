import { useState } from "react";
import Triangle from "../Images/Triangle.png";
import BuyButton from "./BuyButton";
interface Props {
  productName: string;
  productDescription: string;
  productDetails: string;
  price: string;
  productImagePath: string;
  imagePosition: AllowedImagePositionValue;
}
type AllowedImagePositionValue = "left" | "right";
function Product({ productName, productDescription, productDetails, price, productImagePath, imagePosition }: Props) {
  const [clickedValue, isClicked] = useState(false);
  const [addedToCartValue, isAdded] = useState(false);
  function detailsClicked() {
    if (clickedValue === false) isClicked(true);
    else isClicked(false);
    console.log(`value:${clickedValue}`);
  }

  function addToCart() {
    if (addedToCartValue === false) isAdded(true);
    else isAdded(false);
    console.log(addedToCartValue);
  }
  let imagePosVar = "";
  if (imagePosition === "right") imagePosVar = "new-product-info-right ";
  else imagePosVar = "new-product-info-left";

  return (
    <div>
      <div className="new-product-div">
        <div className={imagePosVar}>
          <p className="new-product-name">{productName}</p>

          <p className="new-product-description">{productDescription}</p>
          <div className="new-details-div">
            {clickedValue === false ? <p>Details</p> : <p>{productDetails}</p>}
            {clickedValue === false ? (
              <img src={Triangle} className="triangle-image" onClick={detailsClicked}></img>
            ) : (
              <img src={Triangle} className="rotated-triangle-image" onClick={detailsClicked}></img>
            )}
          </div>
          <div className="product-page__price-button__div">
            <p className="new-product-price">{price}</p>
            <BuyButton buttonText="add to cart" buttonName={productName} buttonPrice={price}></BuyButton>
          </div>
        </div>
        <img src={productImagePath} className="new-product-image" style={{ marginLeft: "5vw" }}></img>
      </div>
    </div>
  );
}

export default Product;
