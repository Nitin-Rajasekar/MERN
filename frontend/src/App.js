import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/Login";
import Buyer_profile from "./components/users/Buyer_profile";
import Vendor_profile from "./components/users/Vendor_profile";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="buyer_profile" element={<Buyer_profile />} />
          <Route path="vendor_profile" element={<Vendor_profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
