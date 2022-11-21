import "./team.css";
import { HiPlusSm } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { FiHeart,FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import MenuItem from '../MenuItem/index';

const Team = ({hotels}) => {
  
  
  // const navigate = useNavigate();
  // // const handleBooking = () => {
  // //   navigate("/booking");
  // // };
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
        <a href="/description" className="siTitle">{hotels.name}
          <FiStar className="team"/>
          <FiStar className="team"/>
          <FiStar className="team"/>
          <span className="mnt">
          <BiLike className="mnt"/>
          <HiPlusSm className="mnt"/>
          </span>

        </a>
        <span className="siDistance">Zuiddoost AmsDetdam - Show on map
        <span className=""> </span></span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {hotels.category}
        </span>
        <span className="siFeatures">
          {hotels.description}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          {hotels.rooms}
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
          <button className="siCheckButton" >Add</button>
        </div>
      </div>
    </div>
  );
};

export default Team ;
