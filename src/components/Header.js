import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ConCart } from "../context/Context";

const Header = () => {
  const { cart } = useContext(ConCart);
  return (
    <div>
      <span
        className="header"
        style={{ backgroundColor: "coral", color: "white", height: "50px" }}
      >
        React Context API Project - Shopping Cart
      </span>
      <ul className="nav">
        <li className="prod1">
          <Link to="/">Home</Link>
        </li>
        <li className="prod2">
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
