import{
  faSearch,
  faCalendar,
  faChevronDown,
}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./list.css";
import SearchItem from "../../compoment/searchItem/SearchItem";
import Gill from "../../compoment/gill/Gill";
import Btn from "../../compoment/btn/Btn";
import Bmn from "../../compoment/bmn/Bmn";
import Team from "../../compoment/team/Team";
import Navbar from "../../compoment/navbar/Navbar";
import Footer from "../../compoment/footer/Footer";
const List = () => {
  return (
    <div>
      <Navbar/>
      {/* <Navbar />
      <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination/property name:</label>
              <input type="text" placeholder="Royal Room" className="name"/>
              <FontAwesomeIcon icon={faSearch} className="name1" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <input type="text" placeholder="" className="name"/>
              <FontAwesomeIcon icon={faCalendar} className="name1" />
              <FontAwesomeIcon icon={faChevronDown} className="name01" />
            </div>
            <div className="lsItem">
              <label>Check-out Date</label>
              <input type="text" placeholder="" className="name"/>
              <FontAwesomeIcon icon={faCalendar} className="name1" />
              <FontAwesomeIcon icon={faChevronDown} className="name01" />
            </div>
            <div className="lsItem">
              <label>30-night stay</label>
              <input type="text" placeholder="2 adults-0 children-1 room" className="name02"/>
              <FontAwesomeIcon icon={faChevronDown} className="name01" />
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <Gill />
            <Btn />
            <Team />
            <Bmn />
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default List;
