import{
    faChevronDown,
    faChevronUp,
  }from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./btn.css"
const Btn = ({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) => {
    return(
        <div className="mn">
           <form>
            <input type="text" value={filterText} placeholder="Top picks for long stays" className="icon" onChange={(e) => onFilterTextChange(e.target.value)}/>
            <FontAwesomeIcon icon={faChevronDown} className="icon3" />
            <FontAwesomeIcon icon={faChevronUp} className="icon03" />
            <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        chỉ hiện khách sạn còn phòng
      </label>
           </form>
        </div>
        
    )
}
export default Btn