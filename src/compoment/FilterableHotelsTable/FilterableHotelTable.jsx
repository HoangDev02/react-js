import React, {useState} from 'react'
import Btn  from '../btn/Btn';
import HotelsTable from '../hotelTable/HotelsTable';

// import './FilterableProductTable.css'
const FilterableProductTable = ({hotels}) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <Btn 
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