import "./searchItem.css";
import { FiHeart } from "react-icons/fi";
// import{
//   faHeart
// }from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchItem = () => {
  return (
        <div className="searchItem">
      <img
        src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/227/2017/12/04094751/Exterior-340x473.jpg"
        alt=""
        className="siImg"
      />       
          <div className="app">
            <FiHeart className="heart"/>
          </div>
      <div className="siDesc">
        <h1 className="siTitle">Hyatt Regency Amsterdam</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">VND 216.324.487</span>
          <span className="siTaxOp">+ VND 10.456.908 taxes 
          and changes</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
