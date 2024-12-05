import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landingpage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/landingpage"!</div>
}