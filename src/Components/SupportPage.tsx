import { Link } from "react-router-dom";
import "../Styles.css/SupportPage.css";
import supportPageImage from "../Images/SupportPageImage3.jpg";

function supportPage() {
  return (
    <div className="support-page-div">
      <div className="support-page-content">
        <div className="support-page-image-text-div">
          <div className="support-page-text-div">
            <p className="support-page__title">Enter your details</p>
            <p className="support-page__text">Please fill out the form and tell and tell us about your issue</p>
          </div>
          <div>
            <form className="issue-details">
              <div className="support-page__select-div">
                <label>Select your country</label>
                <select className="">
                  <option className="support-page__option-text">Europe</option>
                  <option className="support-page__option-text">America</option>
                  <option className="support-page__option-text">Australia</option>
                  <option className="support-page__option-text">Asia</option>
                </select>
              </div>
              <div className="support-page__select-div">
                <label>Select the type of your issue</label>
                <select className="">
                  <option className="support-page__option-text">Shipping</option>
                  <option className="support-page__option-text">Hardware issues</option>
                  <option className="support-page__option-text">Software issues</option>
                  <option className="support-page__option-text">Order cancelation</option>
                  <option className="support-page__option-text">Question about my order</option>
                </select>
              </div>
              <div className="issue-description-div">
                <label>Tell us more about your issue</label>
                <input className="issue-description"></input>
              </div>
              <div className="suppor-page__submit-butotn__div">
                <Link to="/IssueSentPage">
                  <button className="submit-button">Submit</button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="support-page__image-div">
          <img src={supportPageImage} className="support-page-image"></img>
        </div>
      </div>
    </div>
  );
}

export default supportPage;
