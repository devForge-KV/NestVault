import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import BottomNav from "./components/Common/BottomNav";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertiesDetails from "./components/Properties/PropertiesDetails";
import Footer from "./components/Common/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Agent from "./pages/Agent";
import AgentDetail from "./components/Agents/AgentDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import axios from "axios";


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || "";
axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "NestVault",
      "/properties": "NestVault | Properties",
      "/aboutus": "NestVault | About Us",
      "/agents": "NestVault | Agents",
      "/contactus": "NestVault | Contact Us",
      "/signup": "NestVault | Sign Up",
      "/signin": "NestVault | Sign In",
      "/profile": "NestVault | Profile",
      "/wishlist": "NestVault | Saved Properties",
    };

    if (location.pathname.startsWith("/properties/")) {
      document.title = "NestVault | Property Details";
    } else if (location.pathname.startsWith("/agents/")) {
      document.title = "NestVault | Agent Details";
    } else {
      document.title = routeTitles[location.pathname] || "NestVault";
    }
  }, [location]);

  const [serverMessage, setServerMessage] = useState("Connecting to server...");
  useEffect(() => {
    axios
      .get("/")
      .then((response) => {
        setServerMessage(response.data.message || "Backend connected");
      })
      .catch((error) => {
        console.error("Connection Error:", error);
        setServerMessage(
          "Unable to connect to backend server. Please verify if the server is running.",
        );
      });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="bg-[#0a0c10] border-b border-[#d4af37]/30 py-2 text-center text-xs sm:text-sm text-[#d4af37]">
        System Status: {serverMessage}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertiesDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/agents" element={<Agent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;