import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import "./footer.scss";

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
        <div className="left">
          <HomeIcon className="icon" />
          <p>Shop</p>
        </div>
        <div className="middle1">
          <Badge badgeContent={2} color="success">
            <FavoriteBorderIcon className="icon" />
          </Badge>
          <p>wishlist</p>
        </div>
        <div className="middle2">
          <Badge badgeContent={2} color="success">
            <ShoppingCartIcon className="icon" />
          </Badge>
          <p>Cart</p>
        </div>
        <div className="right">
          <PersonIcon className="icon" />
          <p>MyAccount</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
