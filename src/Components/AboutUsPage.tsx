import "../Styles.css/ProductSection.css";
import "../Styles.css/AboutUsPage.css";
import Product from "./Product";
import { useState } from "react";
import { sign } from "crypto";
import AboutUsPageCategories from "./AboutUsPageCategories";

function WhatsNewPage() {
  const [isHistory, setHistory] = useState(false);
  const [isCategory, setCategory] = useState(false);
  const [isCommunity, setCommunity] = useState(false);
  const [isMain, setMain] = useState(true);

  const productImage = require("../Images/NewProductImage.png");

  return (
    <>
      <div className="about-us-page-content">
        <div className="about-us-page-div">
          <AboutUsPageCategories></AboutUsPageCategories>
        </div>
      </div>
    </>
  );
}

export default WhatsNewPage;
