//import React from "react";

//import LandingPage from "./pages/LandingPage/LandingPage";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
//import ProfilePage from "./pages/Profile/Profile";
//import CreateProfilePage from "./pages/CreateProfile/CreateProfile";
//import EditProfilePage from "./pages/EditProfile/EditProfile";
//import ListOfEnsembles from "./pages/ListOfEnsambles";
//import EnsamblePage from "./pages/Ensamble/Ensamble";
//import EditEnsemblePage from "./pages/EditEnsamble";
//import CreatePostPage from "./pages/CreatePost/CreatePost";
//import PostPage from "./pages/Post/Post";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
