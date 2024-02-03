import { useState } from "react";
import "../Styles.css/AboutUsPage.css";
import logo from "../Images/forum-webpage-logo.png";
import communityImg from "../Images/aboutUsCommunityImage.png";
function AboutUsPageCategories() {
  const backgroundVideo = require("../Images/AboutUsPageFolder/about-us-page-video.mp4");
  const [isCategory, setCategory] = useState("main");
  return (
    <>
      {isCategory === "main" ? (
        <video loop autoPlay muted playsInline className="about-us-background-video">
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
      ) : (
        <></>
      )}
      <div className="about-us-container">
        {isCategory === "main" ? (
          <>
            {" "}
            <ul className="about-us-categories">
              <li>
                <button
                  onClick={() => {
                    setCategory("history");
                  }}
                  className="about-us-category"
                >
                  History
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("us");
                  }}
                  className="about-us-category"
                >
                  Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCategory("community");
                  }}
                  className="about-us-category"
                >
                  Community
                </button>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}

        {isCategory === "us" ? (
          <div className="about-us-page-us-page-div">
            <div className="about-us-page-text-div">
              <p className="about-us-page-category-title"> Welcome to Dissador - Elevating Gaming Since 2010</p>
              <p>
                At Dissador, we are more than just a brand; we are a dedicated community of gamers united by a passion
                for excellence. Established in 2010, our journey began with a singular vision: to redefine the gaming
                experience through innovation, quality, and a commitment to delivering premium gaming products.
              </p>
              <p className="about-us-page-category-title"> A Legacy of Innovation</p>
              <p>
                For over a decade, we have been at the forefront of the gaming industry, pushing boundaries and setting
                new standards. Our relentless pursuit of innovation has resulted in cutting-edge products that enhance
                the gaming journey for enthusiasts and professionals alike.{" "}
              </p>
              <p className="about-us-page-category-title">Craftsmanship Beyond Compare</p>
              <p>
                Quality is the cornerstone of everything we create. From precision-engineered gaming peripherals to
                state-of-the-art accessories, each product undergoes rigorous testing to ensure unmatched performance,
                durability, and style. We believe that every gamer deserves the best, and we deliver nothing less.
              </p>
              <p className="about-us-page-category-title">Driven by Passion</p>
              <p>
                What sets Dissador apart is our unwavering passion for gaming. We understand the thrill of every
                victory, the camaraderie of multiplayer battles, and the immersive escape that gaming provides. This
                deep connection to the gaming community fuels our commitment to excellence.
              </p>
            </div>
            <div>
              <img className="about-us-page-logo-div" src={logo}></img>
            </div>
          </div>
        ) : (
          <></>
        )}
        {isCategory === "history" ? (
          <div className="about-us-page-history-page-div">
            <div className="about-us-page-text-div">
              <p className="about-us-page-category-title"> Embarking on a Visionary Quest Founded in 2010</p>
              <p>
                Dissador emerged from a visionary quest to redefine the gaming experience. Our founders, avid gamers and
                tech enthusiasts, envisioned a brand that would seamlessly blend cutting-edge technology with
                unparalleled design, creating a new standard for premium gaming products.
              </p>
              <p className="about-us-page-category-title">Innovation as Our Guiding Light From the outset</p>
              <p>
                innovation has been at the core of Dissador's identity. Our commitment to pushing boundaries and
                introducing groundbreaking features has set us apart in the competitive gaming industry. We strive not
                only to meet but to exceed the expectations of the most discerning gamers.
              </p>
              <p className="about-us-page-category-title"> The Evolution of Dissador Over the years</p>
              <p>
                Dissador has evolved from a promising startup to a recognized name in the gaming community. Each product
                released has been a testament to our dedication to quality, durability, and the ultimate gaming
                experience. Our journey has been marked by a series of milestones, as we continue to refine and perfect
                our craft.
              </p>
              <p className="about-us-page-category-title">Customer-Centric Approach</p>
              <p>
                At the heart of Dissador is a profound commitment to our customers. We value the feedback and
                experiences shared by our gaming community, using them to shape the evolution of our products. This
                customer-centric approach has been instrumental in our success, fostering a sense of collaboration
                between Dissador and the gaming community.
              </p>
              <p className="about-us-page-category-title">Unleashing the Future As we step into the future</p>
              <p>
                Dissador remains devoted to staying ahead of the curve. Our research and development team tirelessly
                explores the latest technologies, ensuring that every Dissador product is a testament to the relentless
                pursuit of excellence. We invite you to join us on this exciting journey as we continue to push
                boundaries and redefine what it means to be at the forefront of gaming innovation. Dissador — Where
                Innovation Meets Gaming Passion. Unleash the Power!
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
        {isCategory === "community" ? (
          <div className="about-us-page-community-page-div">
            <div className="about-us-page-text-div">
              <p className="about-us-page-category-title">
                Welcome to the Dissador Gaming Community, where passion meets innovation.
              </p>
              <p>
                At Dissador, we don't just create gaming products; we cultivate an immersive gaming experience that
                extends beyond the screen. Our brand is more than a label; it's a testament to the vibrant community
                that thrives within our digital realm.
              </p>
              <p className="about-us-page-category-title">Community</p>Dissador is more than just a brand
              <p>
                it's a gathering place for like-minded individuals who share a common love for gaming excellence. Our
                community is a diverse tapestry of gamers united by their passion for high-quality gaming gear and the
                exhilarating world of virtual adventures. Join us on this thrilling journey where camaraderie knows no
                bounds, and every gamer is a valued member of the Dissador family.
              </p>
              <p className="about-us-page-category-title">Sponsoring</p>
              <p>
                At Dissador, we believe in supporting and uplifting the gaming community. Through our sponsorship
                initiatives, we aim to empower emerging talents and established players alike. Whether you're a rising
                esports star, a content creator with a unique voice, or a passionate streamer, Dissador is committed to
                fueling your gaming dreams. Our sponsorships go beyond mere partnerships; they are a collaboration that
                propels the gaming industry forward.
              </p>
              <p className="about-us-page-category-title"> Innovation</p>
              <p>
                Dissador stands at the forefront of gaming innovation. Our commitment to pushing boundaries and
                redefining gaming excellence is reflected in every product we create. By choosing Dissador, you're not
                just choosing a brand; you're choosing cutting-edge technology that enhances your gaming experience.
                Join us in embracing the future of gaming, where innovation is not a luxury but a standard.
              </p>
            </div>
            <img src={communityImg} className="about-us-page-community-image"></img>
          </div>
        ) : (
          <></>
        )}
      </div>{" "}
    </>
  );
}

export default AboutUsPageCategories;
