import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span className="Brand-Name">IRONCORE</span>
        </Link>
        
      </div>

      {/* Desktop Menu */}
      <div className="nav-links">
        <Link to="/help">
          <span className="link-name">
            Browse
          </span>
          <DownOutlined style={{
            position: 'relative',
            bottom: '5px',
            right: '5px',
            color: 'grey',
            fontSize: '15px'
          }} />





        </Link>


        <Link to="/help">
          <span className="link-name">Market Place</span>
        </Link>
        <Link to="/contact">
          <span className="link-name">Contact Us</span>
        </Link>
        <Link to="/help">
          <span className="link-name">Help</span>
        </Link>


        <div className="divider">|</div>
        <Link to="/signin">
          <span className="link-name">Sign In</span>
        </Link>
        <Link to="/signup">
          <span className="link-name signup">Sign Up</span>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <Button className="mobile-menu-button" icon={<MenuOutlined />} onClick={showDrawer} />

      {/* Mobile Drawer Menu */}
      <Drawer
        title={<span>Menu</span>}
        placement="right"
        closable
        closeIcon={<CloseOutlined />}
        onClose={closeDrawer}
        open={visible}
      >
        <div className="drawer-links">
          <Link className="link-name" to="/" onClick={closeDrawer}>Home</Link>
          <Link className="link-name" to="/help" onClick={closeDrawer}>Help</Link>
          <Link className="link-name" to="/contact" onClick={closeDrawer}>Contact Us</Link>
          <Link className="link-name" to="/signin" onClick={closeDrawer}>Sign In</Link>
          <Link className="link-name" to="/signup" onClick={closeDrawer}>Sign Up</Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
