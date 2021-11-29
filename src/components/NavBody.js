import React, { useEffect } from "react";
import "./navbody.css";
import Swiper from "./Swiper";

function NavBody() {
  useEffect(() => {
    const dropdown = document.getElementsByClassName("dropdown-btn");

    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        const arrow = dropdown[i].querySelector(".arrow");
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          arrow.style.transform = "rotate(45deg)";
          arrow.style.borderColor = "#808080";
        } else {
          dropdownContent.style.display = "block";
          arrow.style.transform = "rotate(-135deg)";
          arrow.style.borderColor = "#000";
        }
      });
    }
  });

  return (
    <div className="navbody">
      <Swiper />
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
          <span>25 products</span>
          <a href="#running">Running socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#padel">Padel socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#ski">Ski socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#hiking">Hiking socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#recovery">Recovery socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#fitness">Fitness socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#golf">Golf socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#tennis">Tennis socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#rowing">Rowing socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#hockey">Hockey socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#baseball">Baseball socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#other">Other sports socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#cycling">Cycling socks</a>
        </div>
        <div>
          <span>25 products</span>
          <a href="#football">Football socks</a>
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
