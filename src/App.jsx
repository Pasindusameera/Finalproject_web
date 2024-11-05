import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Component/Signup";
import Login from "./Component/login";
import ArenaHome from "./Component/Home";
import Profile from "./Component/Profile";
import WeatherBanner from "./Component/WeatherBanner";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Staffmanage from "./Component/Staffmanage";
import CreateArena from "./Component/CreateArena";
import Arena from "./Component/Arena";
import ShopHome from "./shop/ShopHome";
import AddItemPage from "./shop/AddItemPage";
import ShopNavbar from "./shop/ShopNavbar";
//import ManageItems from "./shop/ManageItems";
import ShowOrders from "./shop/ShowOrders";
import ItemManager from "./shop/ItemManager";
import Arenaterms from "./Component/arenaterms";
import Arenaprivancr from "./Component/Apenaprivance"


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ArenaHome" element={<ArenaHome />} /> 
          <Route path="Profile" element={<Profile />} />
          <Route path="WeatherBanner" element={<WeatherBanner />} />
          <Route path="Staffmanage" element={<Staffmanage />} />
          <Route path="CreateArena" element={<CreateArena />} />
          <Route path="Arena" element={<Arena />} />
          <Route path="ShopHome" element={<ShopHome />} />
          <Route path="ShopNavbar" element={<ShopNavbar />} />
          <Route path="AddItemPage" element={<AddItemPage />} />
          <Route path="ItemManager" element={<ItemManager />} />
          <Route path="ShowOrders" element={<ShowOrders />} />
          <Route path="Arenaterms" element={<Arenaterms />} />
          <Route path="Arenaprivancr" element={<Arenaprivancr />} />



          {}
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
