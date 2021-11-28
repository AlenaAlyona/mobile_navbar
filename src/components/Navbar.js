import React, { useState } from "react";
import "./navbar.css";
import NavHead from "./NavHead";
import NavBody from "./NavBody";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <NavHead
        showMenu={() => {
          setMenuOpen(!menuOpen);
        }}
      />
      {menuOpen ? <NavBody /> : ""}
    </div>
  );
}

export default Navbar;
