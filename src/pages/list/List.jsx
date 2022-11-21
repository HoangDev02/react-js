import{
  faSearch,
  faCalendar,
  faChevronDown,
}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./list.css";
import SearchItem from "../../compoment/searchItem/SearchItem";
import Gill from "../../compoment/gill/Gill"
import Navbar from "../../compoment/navbar/Navbar";

import FilterableHotelTable from "../../compoment/FilterableHotelsTable/FilterableHotelTable";
import { HOTELS } from "./data";
import ButtonCartCount from '../../compoment/ButtonCartCount'

const List = () => {
  return (
    <div>
      <Navbar/>
      {/* <Navbar />
      <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          
          <div className="listResult">
            <ButtonCartCount/>
            <Gill/>
            <FilterableHotelTable hotels={HOTELS}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
