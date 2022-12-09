import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-white">
      <div className="footer-big">
        <div className="left-container">
          <p>
            SRI GANESAN FURNITURE &copy; 2022 | Powered By &nbsp;
            <span>DIGITAL FACTORY</span>
          </p>
        </div>

        <div className="right-container">
          <img
            src="https://sriganesanfurniture.com/wp-content/themes/woodmart/images/payments.png"
            alt=""
          />
        </div>
      </div>
      <div className="small-footer">
        <Link to={"/shop"} className="left">
          <HomeIcon className="icon" />
          <p>Shop</p>
        </Link>
        <Link to={"/singleproduct"} className="middle1">
          <Badge badgeContent={2} color="success">
            <FavoriteBorderIcon className="icon" />
          </Badge>
          <p>wishlist</p>
        </Link>
        <Link to={"/cart"} className="middle2">
          <Badge badgeContent={2} color="success">
            <ShoppingCartIcon className="icon" />
          </Badge>
          <p>Cart</p>
        </Link>
        <Link to={"/contact"} className="right">
          <PersonIcon className="icon" />
          <p>MyAccount</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
