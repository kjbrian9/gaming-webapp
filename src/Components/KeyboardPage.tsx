import "../Styles.css/KeyboardPage.css";
import Product from "./Product";
import SectionHeader from "./SectionHeader";
import topProductImage from "../Images/KeyboardPageTopProduct.png";
function KeyboardPage() {
  const keyboardImage1 = require("../Images/KeyboardImage1.png");
  const keyboardImage2 = require("../Images/KeyboardPageImage1.png");

  return (
    <div className="keyboard-page-content">
      <div className="keyboard-page-div">
        <div className="keyboard-page__top-product__div">
          <p className="keyboard-page__top-product__text">Premium keyboards designed for you</p>
          <div className="keyboard-page__top-product__underline"></div>
          <img className="keyboard-page__top-product__image" src={topProductImage}></img>
        </div>

        <div className="product-page__product__div1">
          <Product
            imagePosition="right"
            productImagePath={keyboardImage1}
            productName="Ebony 2032 "
            productDescription="The Killmonger 5v213 is a perfect addition to your collection. The newest version of Killmonger was
                      carefully designed to help you through your adventures and help you experience games in the best possible
                      way"
            productDetails="  AMD Ryzen 5 5600H, 16 IPS 2560 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3060 6GB
                130 W, SSD 512GB, webcam, USB 3.2 Gen 1, USB-C, WiFi 6,
                weight 2,45 kg, Bez OS"
            price="399$"
          ></Product>
        </div>
        <div className="keyboard-page__section-header-div">
          <SectionHeader text={"Premium keyboards made to help you navigate through worlds"}></SectionHeader>
        </div>
        <div className="product-page__product__div2">
          <Product
            imagePosition="left"
            productImagePath={keyboardImage2}
            productName="Ebony 2032 "
            productDescription="The Killmonger 5v213 is a perfect addition to your collection. The newest version of Killmonger was
                      carefully designed to help you through your adventures and help you experience games in the best possible
                      way"
            productDetails="  AMD Ryzen 5 5600H, 16 IPS 2560 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3060 6GB
                130 W, SSD 512GB, webcam, USB 3.2 Gen 1, USB-C, WiFi 6,
                weight 2,45 kg, Bez OS"
            price="399$"
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default KeyboardPage;
