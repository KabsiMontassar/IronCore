import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Accueil from "./Pages/Accueil.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Help from "./Pages/Help.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/LogIn.jsx";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
