import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DetailRoom from "./pages/detail-rooms/DetailRooms";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Rooms from "./pages/rooms/Rooms";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/detail" element={<DetailRoom/>}/>
        <Route path="/search" element={<List/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
