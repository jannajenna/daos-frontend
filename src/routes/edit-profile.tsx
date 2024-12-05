// src/routes/editProfileRoute.tsx
import { createFileRoute } from "@tanstack/react-router";
import EditProfile from "../pages/EditProfile/EditProfile";

export const Route = createFileRoute("/edit-profile")({
  component: EditProfile,
});
