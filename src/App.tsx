import React, { useState } from "react";
import "./App.css";
import "./Styles.css/Global.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import WhatsNewPage from "./Components/AboutUsPage";
import SupportPage from "./Components/SupportPage";
import CartPage from "./Components/CartPage";
import CartContext from "./Components/CartContext";
import IssueSentPage from "./Components/IssueSentPage";
import AboutUsPage from "./Components/WhatsNewPage";
import PcPage2 from "./Components/PcPage";
import KeyboardPage from "./Components/KeyboardPage";
import MobileHeader from "./Components/MobileHeader";
import ScrollTop from "./Components/ScrollTop";

export interface CartItemProps {
  cartItemName: string;
  cartItemQuantity: number;
  cartItemPrice: string;
}

function App() {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  window.addEventListener("resize", handleResize);
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  const value = { cart, setCart };
  const [getScreenWidth, setScreenWidth] = useState(window.innerWidth);
  return (
    <>
      <CartContext.Provider value={value}>
        <BrowserRouter>
          <ScrollTop />
          {getScreenWidth > 740 ? <Header></Header> : <MobileHeader></MobileHeader>}
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/gaming-webapp" element={<MainPage />}></Route>
            <Route path="/PcPage" element={<PcPage2 />}></Route>
            <Route path="/whatsNewPage" element={<WhatsNewPage />}></Route>
            <Route path="/keyboardPage" element={<KeyboardPage />}></Route>
            <Route path="/supportPage" element={<SupportPage />}></Route>
            <Route path="/cartPage" element={<CartPage />}></Route>
            <Route path="/issueSentPage" element={<IssueSentPage />}></Route>
            <Route path="/aboutUsPage" element={<AboutUsPage />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
