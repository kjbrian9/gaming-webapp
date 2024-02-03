import "../Styles.css/Global.css";
import "../Styles.css/Mainpage.css";
import Logo from "../Images/forum-webpage-logo.png";
import Image1 from "../Images/MainPageImage1.png";
import Image2 from "../Images/MainpageImageTwo.png";
import Image3 from "../Images/MainpageImageThree.png";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
function MainPage() {
  const videoo = require("../Images/MainPageVideo.mp4");
  return (
    <div className="mainpage-div">
      <div className="mainpage-main-section">
        <div className="logo-div">
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <img src={Logo} className="logo"></img>
          </motion.div>
          <p className="logo-text">Dissador</p>
        </div>

        <p className="welcome-text">Enjoy gaming at its peak</p>
      </div>

      <div className="video-div">
        <video className="mainpage-video" loop autoPlay muted playsInline>
          <source src={videoo} type="video/mp4" />
        </video>
        <div className="video-text-div">
          <img src={Logo} className="video-logo"></img>
          <p className="video-text">Enjoy gaming with our newest products designed for you</p>
        </div>
      </div>
      <div className="mainpage-sections">
        <SectionHeader text="With us, every moment is special"></SectionHeader>
        <div className="section-right">
          <img src={Image1} className="image-one"></img>
          <div className="section-text-div">
            <p className="section-text">
              Explore our the newest additions to the<br></br> gaming word. Designed with the upmost <br></br>care for
              your needs while enjoying the <br></br>newest games. With us, quality is guaranteed.
            </p>
            <p className="first-link">Explore our products</p>
          </div>
        </div>
        <div className="section-left">
          <div className="section-text-div">
            <p className="section-text-left">
              We care about your experience and comfort<br></br>while making sure you are never dissappointed
              <br></br>with our products. Our newest addition to the <br></br>gaming world is here to help you bring out
              <br></br> the most of the time you spend on gaming.
            </p>
            <p className="first-link">Check out our newest products</p>
          </div>
          <img src={Image2} className="image-two"></img>
        </div>
        <div className="section-right">
          <img src={Image3} className="image-two"></img>
          <div className="section-text-div">
            <p className="section-text">
              For us customer satisfaction is paramount<br></br> and we are here to help you with everything <br></br>
              you need. Feel free to contact our helpful<br></br> customer support department.
            </p>
            <p className="first-link">Contact customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
