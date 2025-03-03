import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets"

const Head = () => {
    return (
        <div className="all-head">
            <nav className="navbar ">

                <div className="navHead ">
                    <ul className="d-flex" >
                        <li><i className="fa-solid fa-envelope"></i>
                            <a href="#">  www.registerkro.in</a></li>
                        <span>|</span>
                        <li><i className="fa-solid fa-phone"></i>
                            <a href="#"> +918447746183</a></li>
                        <span>|</span>

                    </ul>
                </div>
                <div className="social-media">
                    <ul className="d-flex">
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>

                    </ul>
                </div>
            </nav>

    <div className="nav">
    <i class="bx bx-menu" id="menu-icon"></i>

      <div className="logo">
     <img src={assets.cap_img} alt="cap img" className="cap_img"/>
        <img src={assets.logo_img} alt="RegisterKaro" loading="lazy" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Services ▾</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
      </ul>
      <div className="search-icon" />

      <button className="talk-button"><a href="#" >Talk An Expert</a></button>
</div>
        </div>

        



    )
};

export default Head;

