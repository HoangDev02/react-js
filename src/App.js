import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Booking from "./pages/booking/Booking";

import DetailRoom from "./pages/detail-rooms/DetailRooms";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Rooms from "./pages/rooms/Rooms";
import ViewMore from "./pages/view-more/ViewMore";
import Map from "./pages/map/Map";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/detail" element={<DetailRoom/>}/>
        <Route path="/search" element={<List/>}/>
        <Route path="/description" element={<ViewMore/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
