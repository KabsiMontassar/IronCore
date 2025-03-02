import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="Accueil">Accueil</Menu.Item>
      <Menu.Item key="signin">signIn</Menu.Item>
      <Menu.Item key="signup">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;