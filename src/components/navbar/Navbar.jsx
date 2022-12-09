import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import "./snavbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [fix, setfix] = useState(false);

  const setfixed = () => {
    if (window.scrollY >= 170) {
      setfix(true);
    } else {
      setfix(false);
    }
  };

  window.addEventListener("scroll", setfixed);

  return (
    <div className={fix ? "nav fixed-top bg-white" : "nav"}>
      <div className="nav-wrapper">
        <div className="left-container">
          <div className="left-menuicon">
            <MenuIcon className="icon" />
          </div>
          <div className="logo-container">
            <Link to={"/"}>
              <h3 className="logo">SRI GANESAN FURNITURE WORKS</h3>
            </Link>
          </div>
        </div>
        <div className="center-container">
          <Link to={"/about"} className="navlink">
            ABOUT US
          </Link>
          <Link to={"/shop"} className="navlink">
            SHOP
          </Link>
          <Link to={"/faq"} className="navlink">
            FAQ'S
          </Link>
          <Link to={"/gallery"} className="navlink">
            GALLERY
          </Link>
          <Link to={"/contact"} className="navlink">
            CONTACT US
          </Link>
        </div>
        <div className="right-container">
          <Link to={"/register"} className="right-link login">
            LOGIN/REGISTER
          </Link>
          <Link className="right-link search">
            <SearchOutlinedIcon />
          </Link>
          <Link to={"/singleproduct"} className="right-link fav">
            <Badge badgeContent={2} color="success">
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </Link>
          <Link to={"/cart"} className="right-link">
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
