import "./team.css";
import { HiPlusSm } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FiHeart,FiStar } from "react-icons/fi";
const Team = () => {
  return (
        <div className="searchItem">
      <img
        src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/227/2017/12/04094723/Exterior1.jpg"
        alt=""
        className="siImg"
      />       
          <div className="app">
            <FiHeart className="heart"/>
          </div>
      <div className="siDesc">
        <h1 className="siTitle">Joy Hotel 
        <FiStar className="team"/>
        <FiStar className="team"/>
        <FiStar className="team"/>
        <span className="mnt">
        <BiLike className="mnt"/>
        <HiPlusSm className="mnt"/>
        </span>
        </h1>
        <span className="siDistance">Zuiddoost AmsDetdam - Show on map
        <span className=""> </span></span>
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
          <button>7.6</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">VND 87.474.211</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default Team ;
