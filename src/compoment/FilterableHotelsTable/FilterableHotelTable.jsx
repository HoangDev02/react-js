import React, {useState, useEffect} from 'react'
import Search  from '../search/Search';
import HotelsTable from '../hotelTable/HotelsTable';
import { useLocation } from "react-router-dom";

// import './FilterableProductTable.css'
const FilterableProductTable = ({hotels}) => {
  const location = useLocation();
  const [inStockOnly, setInStockOnly] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [filterText, setFilterText] = useState(destination);
  
  return (
    <div>
      <Search 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
      <HotelsTable 
        hotels={hotels}  
        filterText= {filterText}
        inStockOnly = {inStockOnly}
        />
    </div>
  )
}

export default FilterableProductTable