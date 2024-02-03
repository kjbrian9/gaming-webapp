import "../Styles.css/PcPage.css";
import SectionHeader from "./SectionHeader";
import Product from "./Product";
import pcPageBackground from "../Images/pc-page-product-image1.png";

const pcVideo = require("../Images/PcStorePageVideo.mp4");
function PcPage2() {
  const pcTest = require("../Images/pc-page-product-image1.png");
  const pcPageProductImage2 = require("../Images/pc-page-product-image2.png");
  return (
    <div className="pc-page__content">
      <div className="pc-page__div">
        <div className="main-section-header__div">
          <p className="main-section-header__text">
            Explore the peak of gaming with our premium products designed for you
          </p>
        </div>
        <>
          <div className="pc-page__product-section-div">
            <Product
              imagePosition="right"
              productImagePath={pcTest}
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
          <div className="pc-page__section-header-div">
            <SectionHeader text="Our newest products for hardcore gamers"></SectionHeader>
          </div>
          <div className="pc-page-background1-div">
            <img src={pcPageBackground} className="pc-page-bacgrkound-image"></img>
            <div className="pc-page__bacgrkound1-text-div">
              <p>Our new gaming laptop designed to fullfil your expectations</p>
              <p style={{ marginTop: "1vh" }}>1599$</p>
            </div>
          </div>
          <div className="pc-page__product-section-div">
            <Product
              imagePosition="left"
              productImagePath={pcPageProductImage2}
              productName="Killmonger 5v213"
              productDescription="The Killmonger 5v213 is a perfect addition to your collection. The newest version of Killmonger was
                      carefully designed to help you through your adventures and help you experience games in the best possible
                      way"
              productDetails="  AMD Ryzen 5 5600H, 16 IPS antireflexný 2560 × 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3060 6GB
                130 W, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, WiFi 6,
                hmotnosť 2,45 kg, Bez OS"
              price="399$"
            ></Product>
          </div>
        </>
      </div>
    </div>
  );
}

export default PcPage2;
