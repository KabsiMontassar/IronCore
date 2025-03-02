import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const RightMenu = ({ mode }) => {
  const items = [
    {
      label: (
        <>
          <Avatar icon={<UserOutlined />} />
          <span className="username">John Doe</span>
        </>
      ),
      key: "submenu",
      children: [
        {
          label: (
            <Link to="/projects">
              <CodeOutlined /> Projects
            </Link>
          ),
          key: "project",
        },
        {
          label: (
            <Link to="/profile">
              <UserOutlined /> Profile
            </Link>
          ),
          key: "about-us",
        },
        {
          label: (
            <Link to="/logout">
              <LogoutOutlined /> Logout
            </Link>
          ),
          key: "log-out",
        },
      ],
    },
  ];

  return <Menu mode={mode} items={items} />;
};

export default RightMenu;