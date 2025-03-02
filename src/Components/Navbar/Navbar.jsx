import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Drawer, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  MenuOutlined,  // Changed icon to hamburger icon
  SettingOutlined,
} from "@ant-design/icons";
import "./Navbar.css"; // Import external CSS file

const Navbar = () => {
  const [visible, setVisible] = useState(false); // Drawer visibility state

  // Toggle drawer visibility
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "help",
      icon: <UserOutlined />,
      label: <Link to="/help">Help</Link>,
    },
    {
      key: "contact",
      icon: <AppstoreOutlined />,
      label: <Link to="/contact">Contact Us</Link>,
    },
    {
      key: "submenu",
      icon: <SettingOutlined />,
      label: "More",
      children: [
        {
          key: "signin",
          label: <Link to="/signin">Sign In</Link>,
        },
        {
          key: "signup",
          label: <Link to="/signup">Sign Up</Link>,
        },
      ],
    },
  ];

  return (
    <div className="navbar-container">
      <Menu className="desktop-menu" mode="horizontal" theme="dark" defaultSelectedKeys={["home"]} items={menuItems} />
      <Button className="mobile-menu-button" icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer title="Menu" placement="right" closable onClose={closeDrawer} open={visible} width={250}>
        <Menu mode="inline" theme="light" defaultSelectedKeys={["home"]} items={menuItems} onClick={closeDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;
