import React from "react";
import { Link } from "@tanstack/react-router";

const LandingPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Musik Samspil</h1>
      <p>Your platform for managing ensembles and profiles!</p>

      <div style={{ marginTop: "20px" }}>
        {/* Link to other routes */}
        <Link to="/profile">
          <button className="primary">Go to Profile</button>
        </Link>
        <Link to="/ensembles" style={{ marginLeft: "10px" }}>
          <button className="primary">View Ensembles</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
