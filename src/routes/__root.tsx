//import React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Menu from "../components/Menu/Menu"; // Ensure Menu is imported correctly

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});
