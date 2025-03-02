import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Accueil.jsx';
import About from './Pages/Help.jsx';
import Contact from './Pages/ContactUs.jsx';
import Signup from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import Help from './Pages/Help.jsx';

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Navbar />
        <Layout.Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </Router>
  );
}

export default App;