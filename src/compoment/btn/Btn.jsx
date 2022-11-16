import{
    faChevronDown,
    faChevronUp,
  }from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./btn.css"
const Btn = () => {
    return(
        <div className="mn">
           <input type="text"placeholder="Top picks for long stays" className="icon"/>
           <FontAwesomeIcon icon={faChevronDown} className="icon3" />
           <FontAwesomeIcon icon={faChevronUp} className="icon03" />
        </div>
        
    )
}
export default Btn