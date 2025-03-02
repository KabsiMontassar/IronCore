import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const LeftMenu = ({ mode }) => {
    const items = [
        {
            label: <Link to="/">Accueil</Link>,
            key: "Accueil",
        },
        {
            label: <Link to="/signin">signIn</Link>,
            key: "signin",
        },
        {
            label: <Link to="/signup">signup</Link>,
            key: "signup",
        },
        {
            label: <Link to="/help">help</Link>,
            key: "help",
        },
        {
            label: <Link to="/contact">Contact Us</Link>,
            key: "contact",
        },
    ];

    return <Menu mode={mode} items={items} />;
};

export default LeftMenu;