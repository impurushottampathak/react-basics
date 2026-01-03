import { useState } from "react";
import { LOGO_URL } from "./../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName,setButtonname] = useState("Login");

    return (
      <div id="header">
        <div id="nav-logo">
          <img
            className="nav-logo"
            alt="nav-logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact Us </Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <li><button className="login" onClick={()=>{btnName === "Login" ? setButtonname("Logout") : setButtonname("Login")}}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;