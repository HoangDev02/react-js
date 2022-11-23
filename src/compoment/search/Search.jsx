import{

  faSearch,
  faCalendar,
  faChevronDown,
}from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
const Btn = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) => {
const location = useLocation();
const [destination, setDestination] = useState(location.state.destination);
const [date, setDate] = useState(location.state.date);
const [openDate, setOpenDate] = useState(false);
const [options, setOptions] = useState(location.state.options);
const[openOptions, setOpenOptions] = useState(false);


  return(
      <form>
        <div className="listSearch">
          {/* <h1 className="lsTitle">Search</h1> */}
          <div className="lsItem1">
            {/* <label>Destination/property name:</label> */}
            <form>
              <input type="text" value={filterText} placeholder={destination} className="name" onChange={(e) => onFilterTextChange(e.target.value)} />
            </form>
            <FontAwesomeIcon icon={faSearch} className="name1" />
          </div>
          <div className="lsItem">
          {/* <label>Check-in Date</label> */}
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                className="date1"
              />
            )}
          </div>
          <span onClick={() => setOpenOptions(!openOptions)} className="test">{`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>
          {openOptions &&( <div className="lsItem2">
          <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <label className="test"></label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <label className="test"></label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
          </div>)}
          {/* <button onClick={}>Search</button> */}
          <label className="list">
            <input 
              type="checkbox" 
              checked={inStockOnly} 
              onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' '}
            chỉ hiện khách sạn còn phòng
          </label>
        </div>
      </form>
  )
}
export default Btn