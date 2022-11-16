import "./team.css";
import { HiPlusSm } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FiHeart,FiStar } from "react-icons/fi";
const Team = ({hotels}) => {
  
  return (
        <div className="searchItem">
        <img
          src={hotels.cover_image}
          alt="hinh"
          className="siImg"
        />       
          <div className="app">
            <FiHeart className="heart"/>
          </div>
      <div className="siDesc">
        <h1 className="siTitle">{hotels.name}
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
          {hotels.category}
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
          <span className="siPrice">{hotels.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default Team ;
