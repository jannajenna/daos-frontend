// Import components
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import React from "react";
import Menu from "./pages/Menu/menu";

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <LandingPage />
      <CreateProfile />
    </div>
  );
};

export default App;
