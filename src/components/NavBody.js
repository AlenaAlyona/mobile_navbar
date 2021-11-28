import React, { useEffect } from "react";
import "./navbody.css";

function NavBody() {
  useEffect(() => {
    const dropdown = document.getElementsByClassName("dropdown-btn");

    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  });

  return (
    <div className="navbody">
      <div className="navbody-swiper">Slideshow</div>
      <a href="#now">Shop now</a>
      <button className="dropdown-btn">
        Everyday
        <i className="arrow"></i>
      </button>
      <div className="dropdown-container">
        <a href="#men">Men</a>
        <a href="#women">Women</a>
      </div>

      <button className="dropdown-btn">
        Sports
        <i className="arrow"></i>
      </button>
      <div className="dropdown-container" id="sports-section">
        <div>
          <a href="#running">Running socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#padel">Padel socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#ski">Ski socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#hiking">Hiking socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#recovery">Recovery socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#fitness">Fitness socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#golf">Golf socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#tennis">Tennis socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#rowing">Rowing socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#hockey">Hockey socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#baseball">Baseball socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#other">Other sports socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#cycling">Cycling socks</a>
          <span>25 products</span>
        </div>
        <div>
          <a href="#football">Football socks</a>
          <span>25 products</span>
        </div>
      </div>

      <a href="#ambassadors">Ambassadors</a>
      <a href="#technology">Technology</a>
      <a href="#reviews">Reviews</a>
      <a href="#account">Account</a>
    </div>
  );
}

export default NavBody;
