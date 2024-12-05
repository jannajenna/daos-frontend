import React from "react";
import "./Menu.modules.css";
import { Link } from "@tanstack/react-router";

const Menu: React.FC = () => {
  return (
    <div className="mobile-menu">
      <div className="menu-header">
        <h1>Musik Samspil</h1>
        <p>Skabt af DAOS - Dansk Amatørorkester Samvirke</p>
        <button className="close-btn">&times;</button>
      </div>
      <nav className="menu-items">
        {/*This should be done bu routing not by href */}
        <a href="#">Hjem</a>
        <a href="#">Find musiker</a>
        <a href="#">Find ensemble</a>
        <a href="#">Profil</a>
      </nav>
      <nav>
        <Link to="/">Landing Page</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="menu-actions">
        {/*This should be the Button components */}
        <button className="btn-primary">Opret bruger</button>
        <button className="btn-secondary">Log ind</button>
      </div>
    </div>
  );
};

export default Menu;
