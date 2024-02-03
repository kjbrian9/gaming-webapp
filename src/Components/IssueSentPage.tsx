import "../Styles.css/IssueSentPage.css";
import CheckMark from "../Images/Checkmark.svg";
function IssueSentPage() {
  return (
    <div className="issue-sent-page-content">
      <div className="issue-sent-page-div">
        <div>
          <p className="issue-sent-page-title">Issue sent</p>
          <p className="issue-sent-page-text">We will contact you soon</p>
        </div>
        <div className="Checkmark-div">
          <img style={{ width: "8vw" }} src={CheckMark}></img>
        </div>
      </div>
    </div>
  );
}

export default IssueSentPage;
