import { useState } from "react";
import "../Styles.css/WhatsNewPage.css";
import "../Styles.css/Global.css";
import NewProductImage from "../Images/AboutUsMainImage.png";
import Product from "./Product";

function AboutUsPage() {
  function loadNewProduct() {
    WelcomeSectionVisible === true ? setWelcomeSectionVisible(false) : setWelcomeSectionVisible(true);
  }
  const [WelcomeSectionVisible, setWelcomeSectionVisible] = useState(true);
  const video1 = require("../Images/WhatsNewPageVideos/Video1.mp4");
  const video2 = require("../Images/WhatsNewPageVideos/Video2.mp4");
  const video3 = require("../Images/WhatsNewPageVideos/Video3.mp4");
  const video4 = require("../Images/WhatsNewPageVideos/Video4.mp4");
  const video5 = require("../Images/WhatsNewPageVideos/Video5.mp4");
  return (
    <>
      {" "}
      {WelcomeSectionVisible === true ? (
        <div className="whats-new-page-div">
          <div className="whats-new-page-content">
            <div className="whats-new-page__videos-text-div">
              <div className="whats-new-page-videos-div">
                <video className="whats-new-page-video1" loop autoPlay muted playsInline>
                  <source src={video2} type="video/mp4" />
                </video>
                <video className="whats-new-page-video2" loop autoPlay muted playsInline>
                  <source src={video3} type="video/mp4" />
                </video>
                <video className="whats-new-page-video3" loop autoPlay muted playsInline>
                  <source src={video4} type="video/mp4" />
                </video>
                <video className="whats-new-page-video4" loop autoPlay muted playsInline>
                  <source src={video5} type="video/mp4" />
                </video>
                <video className="whats-new-page-video5" loop autoPlay muted playsInline>
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
              <button onClick={loadNewProduct} className="whats-new-page__title">
                Explore our newest product
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="whats-new-page-div2">
          <div className="new-product-page-background-image-div">
            <img src={NewProductImage} className="new-product-page-image"></img>
          </div>
          <p className="new-product-title">Experience our newest gaming setup made for gamers</p>
          <div style={{ width: "90%", marginTop: "20vh" }}>
            <Product
              imagePosition="left"
              productImagePath={NewProductImage}
              productName="White Shark gaming setup"
              productDescription="White Shark gaming setup is a perfect addition to your collection. The newest version of White Shark gaming setup was
                      carefully designed to help you through your adventures."
              productDetails="  AMD Ryzen 5 5600H, 16 IPS antireflexný 2560 × 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3060 6GB
                130 W, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, USB-C, WiFi 6,
                hmotnosť 2,45 kg, Bez OS"
              price="399$"
            ></Product>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutUsPage;
