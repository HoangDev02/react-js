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
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/detail" element={<DetailRoom/>}/>
        <Route path="/detail/:id" element={<DetailRoom/>}/>
        <Route path="/search" element={<List/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/auth/signin" element={<LoginPage/>}/>
        <Route path="/auth/sigup" element={<RegisterPage/>}/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
