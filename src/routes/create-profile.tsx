// src/routes/createProfileRoute.tsx
import { createFileRoute } from '@tanstack/react-router'
import CreateProfile from '../pages/CreateProfile/CreateProfile'

export const Route = createFileRoute('/create-profile')({
  component: CreateProfile,
})
