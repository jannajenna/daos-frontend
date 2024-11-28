import React from "react";
import { createReactRouter, RouterProvider, Route } from "@tanstack/react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/Profile/Profile";
import CreateProfilePage from "./pages/CreateProfile/CreateProfile";
import EditProfilePage from "./pages/EditProfile/EditProfile";
import ListOfEnsembles from "./pages/ListOfEnsambles";
import EnsamblePage from "./pages/Ensamble/Ensamble";
import EditEnsemblePage from "./pages/EditEnsamble";
import CreatePostPage from "./pages/CreatePost/CreatePost";
import PostPage from "./pages/Post/Post";

// Define all routes, including LandingPage
const routeConfig = new Route({
  path: "/",
  component: LandingPage, // Default route is LandingPage
  children: [
    {
      path: "profile",
      component: ProfilePage,
    },
    {
      path: "profile/create",
      component: CreateProfilePage,
    },
    {
      path: "profile/edit",
      component: EditProfilePage,
    },
    {
      path: "ensembles",
      component: ListOfEnsembles,
    },
    {
      path: "ensembles/:id",
      component: EnsamblePage,
    },
    {
      path: "ensembles/:id/edit",
      component: EditEnsemblePage,
    },
    {
      path: "post/create",
      component: CreatePostPage,
    },
    {
      path: "post/:id",
      component: PostPage,
    },
  ],
});

// Create and use the router
const router = createReactRouter({
  routeConfig,
});

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
